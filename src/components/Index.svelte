<div class="header">
    <h1>Welcome to our wildlife website</h1>
</div>

<div class="nav">
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Our team</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Blog</a></li>
    </ul>

    <form class="search">
        <input aria-label="Search the website by text" type="search" name="q" placeholder="Search query">
        <input aria-label="Find by text query" type="submit" value="Go!">
    </form>
</div>

<main>
    <article>
        <h2 tabindex="0">The trouble with Bears</h2>
        <p>By Evan Wild</p>
        <p>Tall, lumbering, angry, dangerous. The real live bears of this world are proud, independent creatures, self-serving and always on the hunt for food.</p>
        <h3 tabindex="0">Types of bear</h3>
        <table aria-label="Comparison of wild and urban bears" role="table">
            <caption>Bear types: Difference of wild and urban lifestyles</caption>
            <thead>
            <tr tabindex="0">
                <th scope="col">Bear Type</th>
                <th scope="col">Coat</th>
                <th scope="col">Adult size</th>
                <th scope="col">Habitat</th>
                <th scope="col">Lifespan</th>
                <th scope="col">Diet</th>
            </tr>
            </thead>
            <tbody>
            <tr tabindex="0">
                <td>Wild</td>
                <td>Brown or black</td>
                <td>1.4 to 2.8 meters</td>
                <td>Woods and forests</td>
                <td>25 to 28 years</td>
                <td>Fish, meat, plants</td>
            </tr>
            <tr tabindex="0">
                <td>Urban</td>
                <td>North Face</td>
                <td>18 to 22</td>
                <td>Condos and coffee shops</td>
                <td>20 to 32 years</td>
                <td>Starbucks, sushi</td>
            </tr>
            </tbody>
        </table>

        <h3 tabindex="0">Habitats and Eating habits</h3>
        <p>Wild bears eat a variety of meat, fish, fruit, nuts, and other naturally growing ingredients...</p>
        <br><br>
        <img src="../../public/media/wild-bear.jpg" alt="Wild bear in forest">
        <br><br>
        <p>Urban (gentrified) bears on the other hand have largely abandoned the old ways...</p>
        <br><br>
        <img src="../../public/media/urban-bear.jpg" alt="Urban bear near buildings">
        <br><br>

        <h3 tabindex="0">Mating rituals</h3>
        <p>Bears are romantic creatures by nature...</p>
        <figure>
            <audio controls aria-describedby="bear-transcript">
                <source src="../../public/media/bear.mp3" type="audio/mp3">
                <source src="../../public/media/bear.ogg" type="audio/ogg">
                <p>It looks like your browser doesn't support HTML5 audio players.</p>
            </audio>

            <figcaption>
                <details id="bear-transcript">
                    <summary>Read transcript (Click to expand)</summary>
                    <p>This is not really an audio fact file about bears, but it is an audio file that you can transcribe.</p>
                </details>
            </figcaption>
        </figure>

        <aside>
            <h3 tabindex="0">About the author</h3>
            <p>Evan Wild is an unemployed plumber from Doncaster...</p>
        </aside>

        <section class="comments">
            <div>
                <button type="button" class="show-hide" aria-controls="comment-section" aria-expanded="false">
                    Show comments
                </button>
            </div>

            <div class="comment-wrapper">
                <add-comment-section></add-comment-section>
            </div>
        </section>

        <section class="more_bears">
            <h3 tabindex="0">More Bears</h3>
        </section>
    </article>

    <div class="secondary">
        <h2 tabindex="0">Related</h2>
        <ul>
            <li><a href="#">The trouble with Bees</a></li>
            <li><a href="#">The trouble with Otters</a></li>
            <li><a href="#">The trouble with Penguins</a></li>
            <li><a href="#">The trouble with Octopi</a></li>
            <li><a href="#">The trouble with Lemurs</a></li>
        </ul>
    </div>
</main>

<footer>
    <p>©Copyright by nobody (brother of somebody and anybody, member of Everybody family). All rights are NOT reserved.</p>
</footer>

<script type="module" src="../../modules/main.ts"></script>