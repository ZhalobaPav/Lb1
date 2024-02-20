document.addEventListener('DOMContentLoaded', function () {
    const triangleForm = document.getElementById('triangle');
    triangleForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const side1 = parseFloat(document.getElementById('side1').value);
        const side2 = parseFloat(document.getElementById('side2').value);
        const side3 = parseFloat(document.getElementById('side3').value);

        const resultContainer = document.createElement('div');

        if (isValidTriangle(side1, side2, side3)) {
            resultContainer.textContent = 'Так, з цих сторін можна побудувати трикутник.';
        } else {
            resultContainer.textContent = 'Ні, з цих сторін не можна побудувати трикутник.';
        }

        const previousResult = document.getElementById('triangle-result');
        if (previousResult) {
            previousResult.remove();
        }

        resultContainer.id = 'triangle-result';
        triangleForm.appendChild(resultContainer);
    });

    function isValidTriangle(a, b, c) {
        return a + b > c && b + c > a && a + c > b;
    }
});