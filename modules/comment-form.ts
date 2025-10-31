export const displayCommentForm = (): void => {};

function isEmpty(text: string): boolean {
  return text.replace(/\s/g, '').length === 0;
}

customElements.define(
  'add-comment-section',
  class extends HTMLElement {
    constructor() {
      super();
      const shadowRoot = this.attachShadow({ mode: 'open' });
      const template = document.getElementById(
        'add-comment'
      ) as HTMLTemplateElement;
      const templateContent = template.content;
      shadowRoot.appendChild(templateContent);

      const form: HTMLFormElement | null =
        shadowRoot.querySelector('.comment-form');
      const list: HTMLUListElement | null =
        shadowRoot.querySelector('.comment-container');
      const nameField: HTMLInputElement | null =
        shadowRoot.querySelector('#name-field');
      const commentField: HTMLInputElement | null =
        shadowRoot.querySelector('#comment-field');

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
    }
  }
);
