<script>
    import AudioSection from '../components/AudioSection.svelte';
    import CommentsSection from '../components/CommentsSection.svelte';
    import HabitatsSection from '../components/HabitatsSection.svelte';
    import MoreBears from '../components/MoreBears.svelte';
    import Navigation from '../components/Navigation.svelte';
    import Secondary from '../components/Secondary.svelte';
    import Table from '../components/Table.svelte';

    let {data} = $props();
</script>

<div class="header">
    <h1>Welcome to our wildlife website</h1>
</div>

<Navigation />

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
        <MoreBears {data}/>
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
    p {
        font-family: 'Open Sans Condensed', sans-serif;
        color: #2a2a2a;
    }

    p {
        font-size: 1.6rem;
        line-height: 1.5;
    }

    /* || header layout */

    article, footer {
        background-color: #8FFF8F;
    }

    article, footer {
        padding: 10px 30px;
    }

    article {
        margin-right: 10px;
    }

    .header {
        background-color: #444488;
        color: #E8E8E8;
    }

    .header h1 {
        font-size: 4rem;
        text-align: center;
        color: white;
        text-shadow: 2px 2px 10px black;
        font-family: 'Sonsie One', cursive;
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
</style>