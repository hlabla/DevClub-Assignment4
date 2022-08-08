console.log("Moodle+ successfully loaded!");
const login_element = document.querySelector("div.loginpanel")// Fill the selector for the login element in ""
let login_text = login_element.innerText;
let question = login_text.split("\n")[4]
let answer = ""; // Use if conditions to parse the question and calculate the answer. Make cases for all types of captcha asked

const arr = question.split(" ")
if(arr[1]=="add"){
  answer = String(Number(arr[2])+Number(arr[4]))
}
if(arr[1]=="subtract"){
  answer = String(Number(arr[2])-Number(arr[4]))
}
if(arr[2]=="first"){
  answer = arr[4]
}
else{
  answer = arr[5]
}
const captcha_input_element = document.querySelector("#valuepkg3"); // Fill the selector for the captcha input element in ""
captcha_input_element.value = answer;
