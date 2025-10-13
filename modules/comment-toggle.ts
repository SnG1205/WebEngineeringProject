export const commentToggle = (): void => {
  const showHideBtn: HTMLButtonElement = document.querySelector('.show-hide');
  const commentWrapper: HTMLDivElement =
    document.querySelector('.comment-wrapper');
  let isHidden = true;

  commentWrapper.style.display = 'none';

  showHideBtn.onclick = () => {
    if (isHidden) {
      showHideBtn.textContent = 'Hide comments';
      commentWrapper.style.display = 'block';
      isHidden = !isHidden;
    } else {
      showHideBtn.textContent = 'Show comments';
      commentWrapper.style.display = 'none';
      isHidden = !isHidden;
    }
  };
};
