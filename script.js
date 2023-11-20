var textArea = document.getElementById('text');
textArea.addEventListener('input', function () {
    document.getElementById('count').textContent = this.value.length;
});

document.getElementById('reset').addEventListener('click', function() {
    document.getElementById('text').value = ''; // Clear the text area
    document.getElementById('count').textContent = '0'; // Reset character count
    // You may also want to clear other fields or reset any other relevant data
});


document.getElementById('split').addEventListener('click', function () {
    var text = textArea.value;
    var length = document.getElementById('length').value;
    var customSentence = document.getElementById('customSentence').value;
    var realPrompt = document.getElementById('realPrompt').value;
    var showParts = document.getElementById('showParts').checked;
    var output = document.getElementById('output');
    output.innerHTML = '';

    var sentences = text.match(/[^\.!\?]+[\.!\?]+/g);
    var parts = [];
    var part = '';

    for (var i = 0; i < sentences.length; i++) {
        if ((part + sentences[i]).length <= length) {
            part += sentences[i];
        } else {
            parts.push(part);
            part = sentences[i];
        }
    }

    parts.push(part);

    for (var i = 0; i < parts.length; i++) {
        (function (index) { // Use a closure to capture the value of i
            var div = document.createElement('div');
            div.className = 'part';
            div.textContent = parts[index] + (index < parts.length - 1 ? '\n\n' + customSentence : '\n\n\n' + realPrompt);
            var copy = document.createElement('div');
            copy.className = 'copy';
            copy.textContent = 'Copy';
            copy.addEventListener('click', function () {
                navigator.clipboard.writeText(parts[index] + (index < parts.length - 1 ? '\n\n' + customSentence : '\n\n\n' + realPrompt));
                this.style.backgroundColor = 'green';
                this.textContent = 'Copied!';
            });
            var lengthDiv = document.createElement('div');
            lengthDiv.className = 'length';
            lengthDiv.textContent =  (parts[index].length + (index < parts.length - 1 ? customSentence.length : realPrompt.length)) + ' characters';
            var copyLengthDiv = document.createElement('div');
            copyLengthDiv.appendChild(lengthDiv);
            copyLengthDiv.appendChild(copy);
            output.appendChild(copyLengthDiv);
            if (showParts) {
                output.appendChild(div);
            }
        })(i); // Pass i to the closure function
    }
});
