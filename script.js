document.getElementById('submitButton').addEventListener('click', function() {
    const mathInput = document.getElementById('mathInput');
    const englishInput = document.getElementById('englishInput');
    
    const mathScore = parseFloat(mathInput.value);
    const englishScore = parseFloat(englishInput.value);

    if (!mathScore || !englishScore) {
        alert("Please enter valid scores for both Math and English.");
        return;
    }

    const tableBody = document.querySelector('#gradeTable tbody');
    const rowCount = tableBody.rows.length + 1;

    // Calculate row average
    const rowAverage = ((mathScore + englishScore) / 2).toFixed(2);

    // Create a new row
    const newRow = tableBody.insertRow();
    newRow.innerHTML = `
        <td>${rowCount}</td>
        <td>${mathScore}</td>
        <td>${englishScore}</td>
        <td>${rowAverage}</td>
    `;

    // Clear input fields
    mathInput.value = '';
    englishInput.value = '';

    // Update averages
    updateAverages();
});

function updateAverages() {
    const tableBody = document.querySelector('#gradeTable tbody');
    let totalMath = 0;
    let totalEnglish = 0;
    let rowCount = 0;

    for (let row of tableBody.rows) {
        totalMath += parseFloat(row.cells[1].innerText);
        totalEnglish += parseFloat(row.cells[2].innerText);
        rowCount++;
    }

    const mathAvg = (totalMath / rowCount).toFixed(2);
    const englishAvg = (totalEnglish / rowCount).toFixed(2);
    const overallAvg = ((totalMath + totalEnglish) / (2 * rowCount)).toFixed(2);

    document.getElementById('mathAverage').innerText = mathAvg;
    document.getElementById('englishAverage').innerText = englishAvg;
    document.getElementById('overallAverage').innerText = overallAvg;
}