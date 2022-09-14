const principalInput = document.querySelector("#principal")
const rateInput = document.getElementById("rate")
const compoundedInput = document.getElementById("compounded")
const yearsInput = document.getElementById("years")
const totalSpan = document.getElementById("total")
const earningsSpan = document.getElementById("earnings")
const rateSpan = document.getElementById("rateSpan")
const helpButton = document.getElementById("helpButton")
const helpBox = document.getElementById("helpBox")
const closeButton = document.getElementById("closeButton")

principalInput.addEventListener("input", calculate)
rateInput.addEventListener("input", calculate)
compoundedInput.addEventListener("input", calculate)
yearsInput.addEventListener("input", calculate)
rateInput.addEventListener("input", updateRate)
helpButton.addEventListener("click", showHelp)
closeButton.addEventListener("click", hideHelp)

function hideHelp() {
  helpBox.style.display = "none"
}

function showHelp() {
  helpBox.style.display = "inline-block"
}

function updateRate() {
  const rate = Number(rateInput.value)
  rateSpan.textContent = rate + "%"
}

function calculate() {
  const principal = Number(principalInput.value)
  const rate = Number(rateInput.value)
  const compounded = Number(compoundedInput.value)
  const years = Number(yearsInput.value)

  const total = principal * (1 + rate / 100 / compounded) ** (compounded * years)
  const earnings = total - principal

  totalSpan.textContent = "$" + total.toFixed(2)
  earningsSpan.textContent = "$" + earnings.toFixed(2)
}
