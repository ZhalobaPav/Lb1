document.addEventListener('DOMContentLoaded', function () {
    const countCharactersForm = document.getElementById('count-characters');
    countCharactersForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const text = document.getElementById('text').value;
        
        const totalCharacters = text.length;
        const charactersWithoutSpaces = text.replace(/\s/g, '').length;

        const resultContainer = document.createElement('div');
        resultContainer.innerHTML = `
            <p>З пробілами: ${totalCharacters} символів</p>
            <p>Без пробілів: ${charactersWithoutSpaces} символів</p>
        `;
        const previousResult = document.getElementById('count-characters-result');
        if (previousResult) {
            previousResult.remove();
        }
        resultContainer.id = 'count-characters-result';
        countCharactersForm.appendChild(resultContainer);
    });
});
