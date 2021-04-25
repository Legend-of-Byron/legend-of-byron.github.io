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
        color: white;
        background-color: rgba(0,0,0, 0.5);
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: center;
        align-items: baseline;
        flex-wrap: wrap;
        position: relative
    }
    .brand {
        flex-grow: 1;
        text-align: center;
    }
    .version {
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