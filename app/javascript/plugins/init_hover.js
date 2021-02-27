
const initHover = () => {
  const cards = document.querySelectorAll(".polaroidnew");
  if (cards){
    const Hover = (event) =>{
      const marker = document.getElementById(`marker-${event.currentTarget.id}`)
      marker.style.transition = "all 0.5s";
      marker.style.width = '100px';
      marker.style.height = '100px';
      marker.style.position="absolute";
      marker.style.zIndex = "1"
      };
    const HoverOut = (event) =>{
      const marker = document.getElementById(`marker-${event.currentTarget.id}`)
      marker.style.transition = "all 0.5s";
      marker.style.width = '25px';
      marker.style.height = '25px';
      marker.style.zIndex = "0"
      };
    cards.forEach((card)=>{
      card.addEventListener("mouseover",Hover);
      card.addEventListener("mouseleave",HoverOut);
      });
    }
  }
  
  export { initHover };