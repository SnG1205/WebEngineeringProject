<script>
    import AudioSection from "./components/AudioSection.svelte";
    import CommentsSection from "./components/CommentsSection.svelte";
    import HabitatsSection from "./components/HabitatsSection.svelte";
    import MoreBears from "./components/MoreBears.svelte";
    import Navigation from "./components/Navigation.svelte";
    import Secondary from "./components/Secondary.svelte";
    import Table from "./components/Table.svelte";
</script>

<main>
    <article>
        <Table />
        <HabitatsSection />
        <AudioSection />

        <aside>
            <h3 tabindex="-1">About the author</h3>
            <p>Evan Wild is an unemployed plumber from Doncaster...</p>
        </aside>

        <CommentsSection />
        <MoreBears />
    </article>

    <Secondary />
</main>

<footer>
    <p>©Copyright by nobody (brother of somebody and anybody, member of Everybody family). All rights are NOT reserved.</p>
</footer>

<style>
    * {
        font-family: Arial, sans-serif;
    }
    p, input, li {
        font-family: 'Open Sans Condensed', sans-serif;
        color: #2a2a2a;
    }

    p, li {
        font-size: 1.6rem;
        line-height: 1.5;
    }

    /* || header layout */

    div[class="nav"], article, footer {
        background-color: #8FFF8F;
    }

    article, footer {
        padding: 10px 30px;
    }

    article {
        margin-right: 10px;
    }

    div[class="nav"] {
        height: 50px;
        background-color: #8FFF8F;
        display: flex;
        padding: 1% 0;
        margin-bottom: 10px;
    }

    div[class="nav"] ul {
        padding: 0;
        list-style-type: none;
        flex: 2;
        display: flex;
    }

    div[class="nav"] li {
        display: inline;
        text-align: center;
        flex: 1;
    }

    div[class="nav"] a {
        display: inline-block;
        font-size: 2rem;
        text-transform: uppercase;
        text-decoration: none;
        color: #242424;
    }

    div[class="nav"] .search {
        flex: 1;
        display: flex;
        align-items: center;
        height: 100%;
        padding: 0 2em;
    }

    div[class="header"] {
        background-color: #444488;
        color: #E8E8E8;
    }

    div[class="header"] H1 {
        font-size: 4rem;
        text-align: center;
        color: white;
        text-shadow: 2px 2px 10px black;
        font-family: 'Sonsie One', cursive;
    }

    .search input {
        font-size: 1.6rem;
        height: 32px;
    }

    .search input[type="search"] {
        flex: 3;
    }

    .search input[type="submit"] {
        flex: 1;
        margin-left: 1rem;
        background: #333;
        border: 0;
        color: white;
    }

    main {
        display: flex;
    }

    article {
        flex: 5;
    }

    footer {
        margin-top: 10px;
    }
    .highlight { background-color: yellow; color: black; }
</style>