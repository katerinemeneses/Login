/**
*  @project   Login Form v1.0
*  @author:   Jamshid Elmi
*  @created   2022-04-27 05:49:58
*  @modified  2022-04-27 05:49:58
*  @tutorial  https://youtu.be/ErvnupxlGcU
*/
const container = document.querySelector(".container");
const signInBtn = document.getElementById("signIn"); 
const signUpBtn = document.getElementById("signUp"); 

signInBtn.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

signUpBtn.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});