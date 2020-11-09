let thumbsUp = document.getElementsByClassName("spanLike");
for(i=0;i<thumbsUp.length;i++)
thumbsUp[i].onclick=like;

function like(){ 
    let count = this.getElementsByTagName("input")[0].value;
    count++;
    this.getElementsByTagName("input")[0].value = count;
    // let span= document.getElementsByClassName("likes");
    this.nextElementSibling.innerText = count+" likes";
}

