function normalizeLatinDigits(value) {
    return value
        .replace(/[०-९]/g, function (character) {
            return String('०१२३४५६७८९'.indexOf(character));
        })
        .replace(/[٫٬،]/g, '.')
        .replace(/[^0-9eE+.\-]/g, '');
}

document.querySelectorAll('input[type="number"]').forEach(function (input) {
    input.type = 'text';
    input.setAttribute('lang', 'en');
    input.setAttribute('dir', 'ltr');
    input.setAttribute('inputmode', 'decimal');
    input.classList.add('number-latin');
    input.value = normalizeLatinDigits(input.value);

    input.addEventListener('input', function () {
        const selectionStart = input.selectionStart;
        input.value = normalizeLatinDigits(input.value);

        if (typeof selectionStart === 'number') {
            input.setSelectionRange(selectionStart, selectionStart);
        }
    });
});
