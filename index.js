
const heartBtn = document.querySelectorAll(".fa-heart");
const heartCount = document.querySelector("section button:first-child"); 
let favCount = 0;

const coinBtn = document.querySelectorAll("section button")[1]; 
let coins = 100;

const copyBtnDisplay = document.querySelectorAll("section button")[2]; 
let copyCount = 0;

const historySection = document.querySelector("aside");
const historyList = document.createElement("div");
historyList.className = "p-4 space-y-2";
historySection.appendChild(historyList);

const clearBtn = historySection.querySelector("button");

heartBtn.forEach((heart) => {
  heart.addEventListener("click", () => {
    favCount++;
    heartCount.innerHTML = `${favCount} <span><img src="./assets/heart.png" class="w-[20px] md:w-[25px]"/></span>`;
    heart.classList.toggle("text-red-500");
  });
});

const copyButtons = document.querySelectorAll(".fa-copy");
copyButtons.forEach((copyIcon) => {
  copyIcon.parentElement.addEventListener("click", (e) => {
    const card = e.target.closest(".card");
    const number = card.querySelector("h1").innerText;

    // Copy to clipboard
    navigator.clipboard.writeText(number).then(() => {
      alert(`Copied hotline: ${number}`);
      copyCount++;
      copyBtnDisplay.innerText = `${copyCount} Copy`;
    });
  });
});


const callButtons = document.querySelectorAll(".fa-phone");
callButtons.forEach((phoneIcon) => {
  phoneIcon.parentElement.addEventListener("click", (e) => {
    const card = e.target.closest(".card");
    const serviceName = card.querySelector("h2").innerText;
    const number = card.querySelector("h1").innerText;

    if (coins < 20) {
      alert("Not enough coins! Please recharge.");
      return;
    }

    // Deduct coins
    coins -= 20;
    coinBtn.innerHTML = `${coins} <span><img src="./assets/coin.png" class="w-[30px]"/></span>`;

    // Alert message
    alert(`Calling ${serviceName} at ${number}`);

    // Add to history with time
    const callTime = new Date().toLocaleTimeString();
    const historyItem = document.createElement("div");
    historyItem.className =
      "p-2 border rounded-lg bg-gray-50 flex justify-between items-center";
    historyItem.innerHTML = `
      <div>
        <p class="font-bold">${serviceName}</p>
        <p class="text-sm text-gray-600">${number}</p>
      </div>
      <span class="text-xs text-gray-500">${callTime}</span>
    `;
    historyList.appendChild(historyItem);
  });
});


clearBtn.addEventListener("click", () => {
  historyList.innerHTML = "";
});

