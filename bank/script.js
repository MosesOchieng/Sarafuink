// Selector
const logBtn = document.getElementById("logBtn");
const logArea = document.getElementById("login-area");
const transactionArea = document.getElementById("transaction");
// Login Handler
logBtn.addEventListener("click", () => {
logArea.style.display = "none";
transactionArea.style.display = "block";
});
// Deposit Button Handler
let depositBtn = document.getElementById('deopBtn');
depositBtn.addEventListener('click',()=>{
let currentDeposit = document.getElementById('currentDepoValue').innerText;
let currentDepositNum = parseFloat(currentDeposit);
let depositValue = document.getElementById('depoInput').value;
let depositValueNum = parseFloat(depositValue);
let total = currentDepositNum + depositValueNum;
document.getElementById('currentDepoValue').innerText = total;
let currentBalance = document.getElementById('currentBalance').innerText;
let currentBalanceNum = parseFloat(currentBalance);
let currentNewBalance = depositValueNum  + currentBalanceNum;
document.getElementById('currentBalance').innerText = currentNewBalance;
document.getElementById('depoInput').value ="";
})

let withdrawBtn = document.getElementById('withdrawBtn');


withdrawBtn.addEventListener('click' , () => {
let withInput = document.getElementById('withInput').value;
let withInputNum = parseFloat(withInput);
let currentWith = document.getElementById('currentWithValue').innerText;
let currentWithNum = parseFloat(currentWith);
let totalWith = withInputNum + currentWithNum;
document.getElementById('currentWithValue').innerText = totalWith;



document.getElementById('withInput').value = "";
})