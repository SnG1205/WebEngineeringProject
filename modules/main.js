import { fetchBears } from "./wikipedia-api.js";
import { searchHighlighter } from "./search.js";
import { displayCommentForm } from "./comment-form.js";
import { commentToggle } from "./comment-toggle.js";

const init = async() => {
    searchHighlighter()
    displayCommentForm()
    commentToggle()
    await fetchBears();
}

document.addEventListener('DOMContentLoaded', init);