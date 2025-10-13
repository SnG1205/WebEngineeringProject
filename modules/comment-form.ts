export const displayCommentForm=  () => {
    const form = document.querySelector('.comment-form') as HTMLFormElement;
    const list = document.querySelector('.comment-container') as HTMLUListElement;
    let nameField = document.querySelector('#name') as HTMLInputElement;
    let commentField = document.querySelector('#comment') as HTMLInputElement;

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