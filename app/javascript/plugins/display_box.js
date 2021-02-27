
const displayBox = () => {
  const commentLink = document.getElementById("show-link");
  if (commentLink){
    commentLink.addEventListener(("click"),(event)=> {
      const commentBox = document.getElementsByClassName("comm-box");
      commentBox[0].style.height = "250px";
    });  
  }
}

export {displayBox};