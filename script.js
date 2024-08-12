const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", ( ) => {
  question.innerHTML = "Aaaaa, i like u too";
  gif.src = 
    "https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gif.webp";
});

noBtn.addEventListener("click", ( ) => {
  question.innerHTML = "No, you should like me"
  img.src =
    "https://raw.githubusercontent.com/Envyismee/img/main/FB_IMG_1721918073142.jpg"
  
});
