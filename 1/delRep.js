document.addEventListener('DOMContentLoaded', function () {
    const removeDuplicatesForm = document.getElementById('remove-duplicates');
    removeDuplicatesForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const datesInput = document.getElementById('dates').value;
        const datesArray = datesInput.split('\n').map(date => date.trim());

        const uniqueDates = removeDuplicates(datesArray);

        const resultContainer = document.createElement('div');
        resultContainer.textContent = 'Унікальні дати: ' + uniqueDates.join(', ');

        const previousResult = document.getElementById('remove-duplicates-result');
        if (previousResult) {
            previousResult.remove();
        }

        resultContainer.id = 'remove-duplicates-result';
        removeDuplicatesForm.appendChild(resultContainer);
    });

    function removeDuplicates(array) {
        return Array.from(new Set(array));
    }
});
