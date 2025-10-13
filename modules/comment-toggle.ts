export const commentToggle = () => {
    const showHideBtn = document.querySelector('.show-hide') as HTMLButtonElement;
    const commentWrapper = document.querySelector('.comment-wrapper') as HTMLDivElement;
    let isHidden = true;

    commentWrapper.style.display = 'none';

    showHideBtn.onclick = () => {
        if (isHidden) {
            showHideBtn.textContent = 'Hide comments';
            commentWrapper.style.display = 'block';
            isHidden = !isHidden
        } else {
            showHideBtn.textContent = 'Show comments';
            commentWrapper.style.display = 'none';
            isHidden = !isHidden
        }
    };
}

