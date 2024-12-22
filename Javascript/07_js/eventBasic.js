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
// document.getElementById("images").addEventListener("click", function (e) {
//   console.log("clicked inside the ul");
// });
// document.getElementById("owl").addEventListener("click", function (e) {
//   console.log("Owl clicked");
//   e.stopPropagation();
// });

// document.getElementById("google").addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log("clicked Google");
//   e.stopPropagation();
// });
// attachEvent
//type, timestamp, defaultprevented
//target, toElement, srcElement,currentTarget
//clientX, clientY, screenX, screenY
//altkey, ctrlkey, shiftkey, keycode

document.querySelector("#images").addEventListener("click", function (e) {
  console.log(e.target.parentNode);
  if (e.target.tagName === "IMG") {
    console.log(e.target.id);
    let removeIt = e.target.parentNode;
    removeIt.remove();
  }
});
