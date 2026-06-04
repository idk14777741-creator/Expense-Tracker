let expenses = [];
let prefix = [];
function addExpense() {
    let val =
        Number(document.getElementById("expenseInput").value
        );

    if (val === 0) {
        alert("Please enter a valid expense amount.");
        return;
    }
    expenses.push(val);
    buildprefix();
    document.getElementById("list").innerHTML =
        expenses.join(", ");
    document.getElementById("expenseInput").value = "";
}
function buildprefix() {
    prefix = [];
    prefix[0] = expenses[0];
    for (let i = 1; i < expenses.length; i++) {
        prefix[i] =
            prefix[i - 1] + expenses[i];
    }
}
function findTotal() {
    let l = Number(document.getElementById("l").value);
    let r = Number(document.getElementById("r").value);
    if (l < 1 || r > expenses.length || l > r) {
        alert("Please enter valid indices for l and r.");
        return;
    }
    let ans;
    if (l === 1) {
        ans = prefix[r - 1];
    }
    else {
        ans = prefix[r - 1] - prefix[l - 2];
    }
    let box =
        document.getElementById("output");
    box.className = "result";
    let label = "";
    if (ans < 200) {
        label = "Low Spending....Noice";
        box.classList.add("Green");
    } else if (ans < 500) {
        label = "Medium Spending....Be Careful";
        box.classList.add("Yellow");
    }
    else {
        label = "High Spending....Chill Out";
        box.classList.add("Red");

    }
    box.innerHTML =
        `Total Expense from index ${l} to ${r} is: ${ans}<br><br><span class="label">${label}</span>     `;
}