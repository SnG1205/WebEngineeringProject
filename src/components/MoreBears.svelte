<script lang="ts">
    let {data} = $props();
</script>

<section class="more_bears">
    <h3 tabindex="-1">More Bears</h3>
    {#each data.bears as bear}
        <div class="bear">
            <img src={bear.imageUrl} alt="Image of {bear.nameMatch}">
            <p><b>{bear.nameMatch}</b> ({bear.binomialMatch})</p>
            <p>Range: {bear.rangeMatch}</p>
        </div>
    {/each}
</section>

<style>
    h3 {
        font-family: 'Sonsie One', cursive;
        font-size: 2.2rem;
        color: #2a2a2a;
    }
    img {
        width:200px;
        height:auto;
    }
    p {
        font-family: 'Open Sans Condensed', sans-serif;
        color: #2a2a2a;
        font-size: 1.6rem;
        line-height: 1.5;
    }
</style>