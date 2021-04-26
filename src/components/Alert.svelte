<script lang="ts">
    import WarningAltFilled20 from "carbon-icons-svelte/lib/WarningAltFilled20";    export let title: string;
    export let description: string | undefined;
    export let type: 'warning' | string; // TODO: add more options in the future
</script>

<div id="container">
    <div>
        <WarningAltFilled20/>
        <h3>{title}</h3>
    </div>
    {#if description}
        <p>
            {description}
        </p>
    {/if}
</div>

<style>
    #container > div {
        display: flex;
        align-items: center;
    }

    #container > div > h3 {
        flex-grow: 1;
        margin-left: 4px;
    }
    #container {
        border: 1px solid black;
        padding: 8px 16px;
        background-color: rgb(243, 227, 197);
        box-shadow: 0 0 16px black;
        margin: 32px 0;
        border-radius: 5px;
    }
</style>