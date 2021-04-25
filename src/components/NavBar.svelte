<script lang="ts">
    export let title = '';
    export let summary = '';
    export let version = '0.0.0'
</script>

<nav>
    <div class="version">
        <span>{version}</span>
    </div>
    <div class="brand">
        <h1>{title}</h1>
        {#if summary}
            <p>{summary}</p>
        {/if}
    </div>
</nav>

<style>
    nav {
        color: black;
        background-color: rgba(232, 216, 189, 0.8);
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: center;
        align-items: baseline;
        flex-wrap: wrap;
        position: relative;
        box-shadow: 0 0 8px black;
    }
    .brand {
        flex-grow: 1;
        text-align: center;
    }
    .version {
        color: white;
        background-color: red;
        vertical-align: middle;
        padding: 4px;
        border-radius: 4px;
        margin: 8px;
        position: absolute;
        left: 0;
        top: 0;
    }
</style>