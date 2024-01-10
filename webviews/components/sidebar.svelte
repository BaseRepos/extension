<script lang="ts">
let mermaidChartHtml: any;
let todos: Array < {
    text: string,
    completed: boolean
} > = []
let text = ''

// Listen for messages from the webview
window.addEventListener('message', event => {
    const message = event.data; // The JSON data our extension sent

    switch (message.command) {
      case 'render':
        // Update your component's state with the new HTML
        mermaidChartHtml = message.content;
        break;
    }
  });
</script>

<style>
.complete {
    text-decoration: line-through;
}

.image {
    padding-top: 10px;
    padding-bottom: 10px;
}
</style>

<form on:submit|preventDefault={()=>{
    todos =[{ text, completed:false}, ...todos];
    text =""
    }}>
    <input bind:value={text}/>
</form>

<ul>
    {#each todos as todo (todo.text)}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <li class:complete={todo.completed} on:click={()=>{
        todo.completed = !todo.completed
        }}>{todo.text}</li>
    {/each}
</ul>

<div class="image">
    <!-- Add id to image -->
    <!-- svelte-ignore a11y-img-redundant-alt -->
    <img id="image"
        src=
        "https://media.geeksforgeeks.org/wp-content/uploads/20210915115837/gfg3.png"
        alt="GFG image" />
</div>

<button on:click={()=>{
    tsvscode.postMessage({
    type: "onInfo",
    value: "info message"
    })
    }}>Click for Log</button>

<button on:click={()=>{
    tsvscode.postMessage({
    type: "onFileSearch",
    value: "package.json"
    })
    }}>Click to open a file</button>

<button on:click={() => {
  tsvscode.postMessage({ type: 'onMermaid', value: "working" })
}}>Render Mermaid Chart</button>


<!-- Render the received HTML -->
{@html mermaidChartHtml}