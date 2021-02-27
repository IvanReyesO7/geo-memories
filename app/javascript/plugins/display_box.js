
const displayBox = () => {
  const commentLink = document.getElementById("show-link");
  if (commentLink){
    commentLink.addEventListener(("click"),(event)=> {
      const commentBox = document.getElementsByClassName("comm-box");
      commentBox[0].style.transition = "all 0.3s";
      commentBox[0].style.height = "250px";
      const cancelButton = document.getElementById("cancel-btn");
      cancelButton.addEventListener(("click"),(event) => {
        commentBox[0].style.height = "0px";
      });
    });  
  }
}

export {displayBox};