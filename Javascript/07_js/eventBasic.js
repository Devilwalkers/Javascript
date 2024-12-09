// document.getElementById('owl').onclick =function(){
//     alert("owl clicked")
// }
//new approach
// document.getElementById("owl").addEventListener(
//   "click",
//   function (e) {
//     console.log(e);
//   }.false
// );
// Event propogation
document.getElementById("images").addEventListener("click", function (e) {
    console.log("clicked inside the ul");
  }.false);
document.getElementById("owl").addEventListener("click", function (e) {
  console.log("Owl clicked");
}.false);

// attachEvent
//type, timestamp, defaultprevented
//target, toElement, srcElement,currentTarget
//clientX, clientY, screenX, screenY
//altkey, ctrlkey, shiftkey, keycode
