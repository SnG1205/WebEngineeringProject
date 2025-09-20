import { fetchBears } from "./wikipedia-api.js";
import { searchHighlighter } from "./search.js";
import { displayCommentForm } from "./comment-form.js";
import { commentToggle } from "./comment-toggle.js";

async function init() {
    searchHighlighter()
    displayCommentForm()
    commentToggle()
    await fetchBears();
}

document.addEventListener('DOMContentLoaded', init);