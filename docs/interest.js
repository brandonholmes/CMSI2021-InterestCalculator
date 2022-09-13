/*
Compound interest is calculated by multiplying the initial loan amount, or principal, 
by one plus the annual interest rate raised to the number of compound periods minus one.
This will leave you with the total sum of the loan including compound interest.

P( 1 + r/100)n - P
*/

const principalInput = document.querySelector("#principal")
const rateInput = document.getElementById("rate")
const compoundedInput = document.getElementById("compounded")
const yearsInput = document.getElementById("years")
const totalSpan = document.getElementById("total")
const earningsSpan = document.getElementById("earnings")

principalInput.addEventListener("input", calculate)
rateInput.addEventListener("input", calculate)
compoundedInput.addEventListener("input", calculate)
yearsInput.addEventListener("input", calculate)

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
