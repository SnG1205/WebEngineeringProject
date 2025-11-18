<script lang="ts">
    let inputName = $state('');
    let inputComment = $state('');
    let comments: Comment[] = $state([{
        name: 'Bob Fossil',
            text: 'Oh I am so glad you taught me all about the big brown angry guys...'
    }]);

    const isEmpty = (text: string) => {
        return text.replace(/\s/g, '').length === 0;
    }

    const submit = () => {
        if(isEmpty(inputName) || isEmpty(inputComment)){
            alert('Fields must not be empty');
        } else{
            comments.push({name: inputName, text: inputComment})
            console.log(comments);
            inputName = '';
            inputComment = '';
        }
    }

    interface Comment {
        name: string,
        text: string
    }
</script>

<h2>Add comment</h2>
<form class="comment-form">
    <div class="flex-pair">
        <label for="name-field">Your name:</label>
        <input type="text" bind:value={inputName} name="name" id="name-field" aria-labelledby="name-field"
               placeholder="Enter your name">
    </div>
    <div class="flex-pair">
        <label for="comment-field">Your comment:</label>
        <input type="text" bind:value={inputComment} name="comment" id="comment-field" aria-labelledby="comment-field"
               placeholder="Enter your comment">
    </div>
    <div>
        <input type="button" onclick={submit} value="Submit comment">
    </div>
</form>
<h2 tabindex="-1">Comments</h2>
<ul class="comment-container">
    {#each comments as comment}
        <li>
            <p>{comment.name}</p>
            <p>{comment.text}</p>
        </li>
    {/each}
</ul>

<style>
    h2 {
        font-family: 'Sonsie One', cursive;
        font-size: 2rem;
        text-align: center;
        color: #2a2a2a;
    }

    h2:nth-of-type(2) {
        margin-bottom: 0;
    }

    p, input, li, label {
        font-family: 'Open Sans Condensed', sans-serif;
        color: #2a2a2a;
    }

    p, li {
        font-size: 1.6rem;
        line-height: 1.5;
    }

    .comment-form {
        margin-bottom: 3rem;
    }

    .comment-form .flex-pair {
        display: flex;
        padding: 0 3rem 1rem;
    }

    .comment-form input[type="button"] {
        width: 30%;
        display: block;
        margin: 0 auto;
        background: #333;
        border: 0;
        color: white;
    }

    .comment-form label {
        align-self: center;
        flex: 2;
        text-align: right;
        font-size: 1.6rem;
        line-height: 32px;
    }

    .comment-form input {
        margin-left: 1rem;
        flex: 6;
        font-size: 1.6rem;
        line-height: 32px;
    }

    .comment-container {
        margin-top: 0;
    }

    .comment-container li {
        list-style-type: none;
        display: flex;
    }

    .comment-container li p:nth-child(1) {
        flex: 1;
        font-weight: bold;
    }

    .comment-container li p:nth-child(2) {
        flex: 5;
    }
</style>