document.addEventListener("DOMContentLoaded", () => {
    const expenseForm = document.getElementById("expense-form");
    const expenseList = document.getElementById("expense-list");
    const totalExpenses = document.getElementById("total-expenses");

    let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
    let totalExpenseAmount = expenses.reduce((sum, expense) => sum + expense.amount, 0);

    // Load existing expenses
    function loadExpenses() {
        expenseList.innerHTML = "";
        expenses.forEach((expense, index) => {
            const expenseItem = document.createElement("li");
            expenseItem.innerHTML = `
          ${expense.name} (${expense.category}) - ₹${expense.amount.toFixed(2)}
          <button data-index="${index}" class="delete-expense">X</button>
        `;
            expenseList.appendChild(expenseItem);
        });
        totalExpenses.textContent = totalExpenseAmount.toFixed(2);
    }

    // Add expense
    expenseForm?.addEventListener("submit", (event) => {
        event.preventDefault();
        const name = document.getElementById("expense-name").value;
        const amount = parseFloat(document.getElementById("expense-amount").value);
        const category = document.getElementById("expense-category").value;

        if (!name || isNaN(amount) || !category) {
            alert("Fill all fields!");
            return;
        }

        expenses.push({ name, amount, category });
        totalExpenseAmount += amount;
        localStorage.setItem("expenses", JSON.stringify(expenses));
        loadExpenses();
        expenseForm.reset();
    });

    // Delete expense
    expenseList?.addEventListener("click", (event) => {
        if (event.target.classList.contains("delete-expense")) {
            const index = event.target.dataset.index;
            totalExpenseAmount -= expenses[index].amount;
            expenses.splice(index, 1);
            localStorage.setItem("expenses", JSON.stringify(expenses));
            loadExpenses();
        }
    });

    loadExpenses();
});
