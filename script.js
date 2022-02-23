let usersWord =""; 

function updateWord(element){
    usersWord = element.value; 

    console.log(usersWord); 
}

const addToList = () => {
    //Target the div in HTML by the ID "list"
    let even = document.getElementById("even");

    let odd = document.getElementById("odd");

    let newListItem = document.createElement('div');

    newListItem.innerText = usersWord; 

    if(usersWord.length % 2 === 0){
        even.appendChild(newListItem); 
    } else {
        odd.appendChild(newListItem); 
    }
}

function deleteEverything () {

    usersWord ="";
    even.innerText="";
    odd.innerText=""; 
}
