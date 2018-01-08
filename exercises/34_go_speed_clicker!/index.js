const clickBtn = document.getElementById("click-button");
const showCount = document.getElementById("show-count");

let clickCount = JSON.parse(localStorage.getItem("clickCount")) || 0;

showCount.innerHTML = clickCount;

let addToCount = () => {
    clickCount++;
    localStorage.setItem("clickCount", JSON.stringify(clickCount));
    showCount.innerHTML = clickCount;
}

clickBtn.onclick = addToCount;