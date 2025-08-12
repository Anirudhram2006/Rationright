document.addEventListener("DOMContentLoaded", function () {
  const screens = {
    login: document.getElementById("screen-login"),
    delivery: document.getElementById("screen-delivery"),
    action: document.getElementById("screen-action")
  };

  const btnScan = document.getElementById("btnScan");
  const btnPlay = document.getElementById("btnPlay");
  const btnNext = document.getElementById("btnNext");
  const btnAccept = document.getElementById("btnAccept");
  const btnReject = document.getElementById("btnReject");
  const status = document.getElementById("status");
  const btnSync = document.getElementById("btnSync");
  const btnView = document.getElementById("btnView");
  const queueList = document.getElementById("queueList");

  let offlineQueue = JSON.parse(localStorage.getItem("offlineQueue") || "[]");

  function showScreen(name) {
    Object.values(screens).forEach(s => s.classList.remove("active"));
    screens[name].classList.add("active");
  }

  btnScan.addEventListener("click", () => {
    alert("Fingerprint scanned successfully! (Simulated)");
    showScreen("delivery");
  });

  btnPlay.addEventListener("click", () => {
    let msg = new SpeechSynthesisUtterance("Rice, 5 kilograms for Mr. Kumar");
    speechSynthesis.speak(msg);
  });

  btnNext.addEventListener("click", () => {
    showScreen("action");
  });

  btnAccept.addEventListener("click", () => {
    status.textContent = "Delivery Accepted ✔";
    status.style.color = "green";
    saveOffline("Accepted");
  });

  btnReject.addEventListener("click", () => {
    status.textContent = "Delivery Rejected ✖";
    status.style.color = "red";
    saveOffline("Rejected");
  });

  btnSync.addEventListener("click", () => {
    if (offlineQueue.length === 0) {
      alert("No data to sync.");
    } else {
      alert(`Synced ${offlineQueue.length} records to server (simulated).`);
      offlineQueue = [];
      localStorage.setItem("offlineQueue", JSON.stringify(offlineQueue));
    }
  });

  btnView.addEventListener("click", () => {
    if (queueList.classList.contains("hidden")) {
      queueList.classList.remove("hidden");
      queueList.innerHTML = "<strong>Offline Queue:</strong><br>" +
        (offlineQueue.length ? offlineQueue.map((q, i) => `${i + 1}. ${q}`).join("<br>") : "No records.");
    } else {
      queueList.classList.add("hidden");
    }
  });

  function saveOffline(action) {
    offlineQueue.push(`${new Date().toLocaleString()}: ${action}`);
    localStorage.setItem("offlineQueue", JSON.stringify(offlineQueue));
  }
});
// JS placeholder
