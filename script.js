function calculate() {
  const speed = parseFloat(document.getElementById("speed").value);
  const brakeType = document.getElementById("brakeType").value;
  const resultBox = document.getElementById("result");

  if (isNaN(speed) || speed <= 0) {
    resultBox.textContent = "Please enter a valid speed.";
    resultBox.classList.remove("hidden");
    return;
  }

  const g = 9.8;
  let mu;

  switch (brakeType) {
    case "dualABS": mu = 0.8; break;
    case "singleABS": mu = 0.7; break;
    case "disc": mu = 0.6; break;
    case "drum": mu = 0.45; break;
    default: mu = 0.6;
  }

  const speedMS = speed * 1000 / 3600;
  const distance = (speedMS * speedMS) / (2 * mu * g);

  resultBox.textContent = `Estimated braking distance: ${distance.toFixed(2)} meters`;
  resultBox.classList.remove("hidden");
}

function resetForm() {
  document.getElementById("speed").value = "";
  document.getElementById("brakeType").selectedIndex = 0;
  document.getElementById("result").textContent = "Your braking distance will appear here.";
  document.getElementById("result").classList.add("hidden");
}
