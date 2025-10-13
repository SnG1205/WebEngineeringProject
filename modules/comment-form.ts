export const displayCommentForm=  () => {
    const form: HTMLFormElement = document.querySelector('.comment-form');
    const list: HTMLUListElement = document.querySelector('.comment-container');
    let nameField: HTMLInputElement = document.querySelector('#name');
    let commentField: HTMLInputElement = document.querySelector('#comment');

    form.onsubmit = (e) => {
        e.preventDefault();

        const listItem = document.createElement('li');
        let namePara = document.createElement('p');
        let commentPara = document.createElement('p');
        const nameValue = nameField.value;
        const commentValue = commentField.value;

        namePara.textContent = nameValue;
        commentPara.textContent = commentValue;

        console.log(nameValue);
        if(!isEmpty(nameValue) && !isEmpty(commentValue)){
            list.appendChild(listItem);
            listItem.appendChild(namePara);
            listItem.appendChild(commentPara);
        }
        else{
            console.log("Fields must not be empty")
        }

        nameField.value = '';
        commentField.value = '';
    };
}

function isEmpty(text: string){
    return (text.replace(/\s/g, '').length === 0)
}