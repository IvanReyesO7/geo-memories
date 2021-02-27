import Avatars from '@dicebear/avatars';
import sprites from '@dicebear/avatars-male-sprites';

const generateAvatar = () => {
  const space = document.querySelectorAll(".comment-avatar");
  const spaceArr = Array.prototype.slice.call(space);
  if (spaceArr){
    spaceArr.forEach(element => {
      let options = {width: 50, height: 50, radius: 50, background: "purple"};
      let avatars = new Avatars(sprites, options);
      let svg = avatars.create(`${Math.floor((Math.random() * 200) + 1)}`);
      element.innerHTML = `${svg}`
    });  
  }
}

export {generateAvatar};