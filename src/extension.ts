import * as vscode from "vscode";
import { SidebarProvider } from "./SidebarProvider";

export function activate(context: vscode.ExtensionContext) {
  const sideBarProvider = new SidebarProvider(context.extensionUri);

  context.subscriptions.push(
    vscode.window.registerWebviewViewProvider("code-scout", sideBarProvider)
  );

  let disposable = vscode.commands.registerCommand("ex.openFile", function () {
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

              editor.revealRange(range, vscode.TextEditorRevealType.InCenter);

              // Highlight lines 30 to 35
              let decorationType = vscode.window.createTextEditorDecorationType(
                {
                    backgroundColor: 'rgba(211, 211, 211, 0.5)' // lightgray with 50% opacity

                }
              );

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
  });

  context.subscriptions.push(disposable);
}

exports.activate = activate;

export function deactivate() {}
