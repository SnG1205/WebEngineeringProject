<script lang="ts">
    import {searchHighlighter} from '../../modules/search';

    let searchQuery = $state('');
</script>

<div class="nav">
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Our team</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Blog</a></li>
    </ul>

    <form class="search">
        <input aria-label="Search the website by text" type="search" bind:value={searchQuery} placeholder="Search query">
        <input aria-label="Find by text query" type="button" onclick={() => searchHighlighter(searchQuery)} value="Go!">
    </form>
</div>

<style>
    li {
        font-family: 'Open Sans Condensed', sans-serif;
        color: #2a2a2a;
        font-size: 1.6rem;
        line-height: 1.5;
    }
    .nav {
        height: 50px;
        background-color: #8FFF8F;
        display: flex;
        padding: 1% 0;
        margin-bottom: 10px;
    }
    .nav ul {
        padding: 0;
        list-style-type: none;
        flex: 2;
        display: flex;
    }

    .nav li {
        display: inline;
        text-align: center;
        flex: 1;
    }

    .nav a {
        display: inline-block;
        font-size: 2rem;
        text-transform: uppercase;
        text-decoration: none;
        color: #242424;
    }

    .nav .search {
        flex: 1;
        display: flex;
        align-items: center;
        height: 100%;
        padding: 0 2em;
    }

    .search input {
        font-size: 1.6rem;
        height: 32px;
    }

    .search input[type="search"] {
        flex: 3;
    }

    .search input[type="button"] {
        flex: 1;
        margin-left: 1rem;
        background: #333;
        border: 0;
        color: white;
    }
    .highlight { background-color: yellow; color: black; }
</style>
