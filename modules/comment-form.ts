export const displayCommentForm = (): void => {
  const form: HTMLFormElement = document.querySelector('.comment-form');
  const list: HTMLUListElement = document.querySelector('.comment-container');
  const nameField: HTMLInputElement = document.querySelector('#name');
  const commentField: HTMLInputElement = document.querySelector('#comment');

  form.onsubmit = (e) => {
    e.preventDefault();

    const listItem = document.createElement('li');
    const namePara = document.createElement('p');
    const commentPara = document.createElement('p');
    const nameValue = nameField.value;
    const commentValue = commentField.value;

    namePara.textContent = nameValue;
    commentPara.textContent = commentValue;

    console.log(nameValue);
    if (!isEmpty(nameValue) && !isEmpty(commentValue)) {
      list.appendChild(listItem);
      listItem.appendChild(namePara);
      listItem.appendChild(commentPara);
    } else {
      console.log('Fields must not be empty');
    }

    nameField.value = '';
    commentField.value = '';
  };
};

function isEmpty(text: string): boolean {
  return text.replace(/\s/g, '').length === 0;
}
