import * as vscode from "vscode";
import { getNonce } from "./getNonce";
import mermaid from "mermaid";
import fs from "fs";
export class SidebarProvider implements vscode.WebviewViewProvider {
  _view?: vscode.WebviewView;
  _doc?: vscode.TextDocument;

  constructor(private readonly _extensionUri: vscode.Uri) {}

  public resolveWebviewView(webviewView: vscode.WebviewView) {
    this._view = webviewView;

    webviewView.webview.options = {
      // Allow scripts in the webview
      enableScripts: true,

      localResourceRoots: [this._extensionUri]
    };

    webviewView.webview.html = this._getHtmlForWebview(webviewView.webview);

    webviewView.webview.onDidReceiveMessage(async (data) => {
      switch (data.type) {
        case "onInfo": {
          if (!data.value) {
            return;
          }
          console.log(data.value);
          vscode.window.showInformationMessage(data.value);
          break;
        }
        case "onError": {
          if (!data.value) {
            return;
          }
          vscode.window.showErrorMessage(data.value);
          break;
        }
        case "onFileSearch": {
          if (!data.value) {
            return;
          }
          vscode.window.showInformationMessage(data.value);
          vscode.workspace
            .findFiles("**/package.json", "**/node_modules/**", 1)
            .then((files) => {
              if (files.length > 0) {
                vscode.window.showInformationMessage("package.json found");
                vscode.workspace.openTextDocument(files[0]).then((doc) => {
                  vscode.window.showTextDocument(doc).then(async (editor) => {
                    const lineNumberToScrollTo = 35;
                    const range = new vscode.Range(
                      lineNumberToScrollTo - 1,
                      0,
                      lineNumberToScrollTo,
                      0
                    );

                    editor.revealRange(
                      range,
                      vscode.TextEditorRevealType.InCenter
                    );

                    // Highlight lines 30 to 35
                    let decorationType =
                      vscode.window.createTextEditorDecorationType({
                        backgroundColor: "rgba(211, 211, 211, 0.5)" // lightgray with 50% opacity
                      });

                    // Get the maximum line length
                    let maxLineLength = Math.max(
                      ...Array.from({ length: 6 }, (_, i) => 29 + i).map(
                        (line) => editor.document.lineAt(line).text.length
                      )
                    );

                    // Append whitespaces to each line
                    for (let line = 29; line <= 34; line++) {
                      let lineText = editor.document.lineAt(line).text;
                      let appendLength = maxLineLength - lineText.length;
                      let appendText = " ".repeat(appendLength);
                      let range = new vscode.Range(
                        line,
                        lineText.length,
                        line,
                        lineText.length + appendLength
                      );
                      let edit = new vscode.WorkspaceEdit();
                      edit.insert(editor.document.uri, range.end, appendText);
                      await vscode.workspace.applyEdit(edit);
                    }

                    // Now create the highlight as before
                    let start = new vscode.Position(29, 0);
                    let end = new vscode.Position(34, maxLineLength);
                    let decoration = {
                      range: new vscode.Range(start, end),
                      hoverMessage: "Highlighted lines"
                    };
                    editor.setDecorations(decorationType, [decoration]);

                    // Remove highlight when text is selected
                    vscode.window.onDidChangeTextEditorSelection((e) => {
                      if (e.selections.some((s) => !s.isEmpty)) {
                        editor.setDecorations(decorationType, []);
                      }
                    });

                    // Remove highlight when cursor is within highlighted lines
                    vscode.window.onDidChangeTextEditorSelection((e) => {
                      if (
                        e.selections.some(
                          (s) => s.start.line >= 29 && s.start.line <= 34
                        )
                      ) {
                        editor.setDecorations(decorationType, []);
                      }
                    });
                  });
                });
              } else {
                vscode.window.showInformationMessage("package.json not found");
              }
            });
          break;
        }
        case "onMermaid": {
          if (!data.value) {
            return;
          }

          console.log("coming here", data.value);

          // Render the Mermaid chart using a reliable library
          try {
            mermaid.initialize({
              startOnLoad: false
            });
            let dummyData = "graph LR\nA --> B\nB --> C";
            const svg = mermaid.mermaidAPI.render("mermaid-svg-1", dummyData);

            // Send the generated HTML back to the sidebar
            webviewView.webview.postMessage({
              command: "render",
              content: `<div id="mermaid-svg-1">${svg}</div>`
            });
          } catch (error: any) {
            vscode.window.showErrorMessage(
              "Failed to render Mermaid chart: " + error.message
            );
          }
          break;
        }
      }
    });
  }

  public revive(panel: vscode.WebviewView) {
    this._view = panel;
  }

  private _getHtmlForWebview(webview: vscode.Webview) {
    const styleResetUri = webview.asWebviewUri(
      vscode.Uri.joinPath(this._extensionUri, "media", "reset.css")
    );
    const styleVSCodeUri = webview.asWebviewUri(
      vscode.Uri.joinPath(this._extensionUri, "media", "vscode.css")
    );

    const scriptUri = webview.asWebviewUri(
      vscode.Uri.joinPath(this._extensionUri, "out", "compiled/sidebar.js")
    );
    const styleMainUri = webview.asWebviewUri(
      vscode.Uri.joinPath(this._extensionUri, "out", "compiled/sidebar.css")
    );

    // Use a nonce to only allow a specific script to be run.
    const nonce = getNonce();

    return `<!DOCTYPE html>
			<html lang="en">
			<head>
				<meta charset="UTF-8">
        <meta http-equiv="Content-Security-Policy" content="default-src 'self'; img-src https: data: vscode-webview:; style-src 'unsafe-inline' https://cdnjs.cloudflare.com/ajax/libs/mermaid/10.0.0/mermaid.css ${webview.cspSource}; script-src 'nonce-${nonce}';">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
				<link href="${styleResetUri}" rel="stylesheet">
				<link href="${styleVSCodeUri}" rel="stylesheet">
        <link href="${styleMainUri}" rel="stylesheet">
        <script nonce="${nonce}">
          const tsvscode = acquireVsCodeApi();
        </script>
			</head>
      <body>
				<script nonce="${nonce}" src="${scriptUri}"></script>
			</body>
			</html>`;
  }
}
