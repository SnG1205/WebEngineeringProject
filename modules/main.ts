import { displayCommentForm } from "./comment-form";
import { commentToggle } from "./comment-toggle";
import { searchHighlighter } from "./search";
import { fetchBears } from "./wikipedia-api";

const init = async() => {
    searchHighlighter()
    displayCommentForm()
    commentToggle()
    await fetchBears();
}

document.addEventListener('DOMContentLoaded', init);