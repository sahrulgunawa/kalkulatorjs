let currentInput = "0";
let historyList = [];

// Menampilkan angka yang diinput
function appendNumber(number) {
    if (currentInput === "0") {
        currentInput = number.toString();
    } else {
        currentInput += number.toString();
    }
    updateDisplay();
}

// Menampilkan operator yang dipilih
function appendOperator(operator) {
    currentInput += ` ${operator} `;
    updateDisplay();
}

// Menghitung hasil
function calculate() {
    try {
        const result = eval(currentInput);
        // Menambahkan hasil ke riwayat
        historyList.push(`${currentInput} = ${result}`);
        updateHistory();
        currentInput = result.toString();
    } catch (error) {
        currentInput = "Error";
    }
    updateDisplay();
}

// Menghapus tampilan
function clearDisplay() {
    currentInput = "0";
    updateDisplay();
}

// Mengubah tanda angka
function negate() {
    if (currentInput.startsWith('-')) {
        currentInput = currentInput.slice(1);
    } else {
        currentInput = '-' + currentInput;
    }
    updateDisplay();
}

// Memperbarui tampilan
function updateDisplay() {
    const display = document.getElementById("result");
    display.value = currentInput;
}

// Memperbarui riwayat
function updateHistory() {
    const historyListElement = document.getElementById("history-list");
    historyListElement.innerHTML = ""; // Bersihkan riwayat yang ada
    historyList.forEach((entry) => {
        const li = document.createElement("li");
        li.textContent = entry;
        historyListElement.appendChild(li);
    });
}

// Menghapus riwayat
function clearHistory() {
    historyList = [];
    updateHistory();
}

// Menampilkan atau menyembunyikan riwayat
function toggleHistory() {
    const history = document.getElementById("history");
    if (history.style.display === "none" || history.style.display === "") {
        history.style.display = "block"; // Tampilkan riwayat
    } else {
        history.style.display = "none"; // Sembunyikan riwayat
    }
}
