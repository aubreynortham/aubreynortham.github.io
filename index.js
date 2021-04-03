// console sauce
const style = "font-size: 20px;" +
  "background: #355C7D;" +
  "background: -webkit-linear-gradient(to right, #C06C84, #6C5B7B, #355C7D);" +
  "background: linear-gradient(to right, #C06C84, #6C5B7B, #355C7D);" +
  "color: white;" +
  "text-align: center;" +
  "padding: 10px 15px;" +
  "width: 100%;" +
  "border-radius: 32px;";
const text = "%cnothing to see here 👀";
console.log(text, style);

// video controls
const controlVideo = (el) => {
  const video = document.getElementById("theVid");
  if (video) {
    if (video.paused) {
      video.play();
      video.style.filter = 'none';
      el.innerHTML = 'enough clouds thx';
    } else {
      video.pause();
      video.style.filter = 'invert(0.8)';
      el.innerHTML = 'more clouds plz';
    }
  }
};
