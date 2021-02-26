
const initHover = () => {
  const cards = document.querySelectorAll(".polaroidnew");
  if (cards){
    const Hover = (event) =>{
      const marker = document.getElementById(`marker-${event.currentTarget.id}`)
      marker.style.transition = "all 0.5s";
      marker.style.width = '50px';
      marker.style.height = '50px';
      };
    const HoverOut = (event) =>{
      const marker = document.getElementById(`marker-${event.currentTarget.id}`)
      marker.style.transition = "all 0.5s";
      marker.style.width = '25px';
      marker.style.height = '25px';
      };
    cards.forEach((card)=>{
      card.addEventListener("mouseover",Hover);
      card.addEventListener("mouseleave",HoverOut);
      });
    }
  }
  
  export { initHover };