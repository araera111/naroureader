var readCount = 0;
var convertedText = [];
var convertButton = document.getElementById('js-button');
convertButton.addEventListener('click', function () {
    var textareaValue = getValue('text-area');
    var splitArray = stringSpritArray(textareaValue);
    var deleteNullArray = deleteNull(splitArray);
    convertedText = deleteNullArray;
    console.log(convertedText);
}, false);
var nextButton = document.getElementById('js-next-button');
var backButton = document.getElementById('js-back-button');
nextButton.addEventListener('click', function () {
    console.log(readCount);
    var showArea = document.getElementById('js-show-area');
    showTextLine(readCount, showArea);
}, false);
backButton.addEventListener('click', function () {
    console.log(readCount);
    var showArea = document.getElementById('js-show-area');
    showBeforeTextLine(readCount, showArea);
}, false);
var showTextLine = function (index, showArea) {
    document.querySelector('#js-show-area').innerHTML = '';
    if (readCount >= convertedText.length) {
        showArea.insertAdjacentHTML('afterbegin', '最終行です！　これ以上進めません');
        readCount = convertedText.length + 1;
    }
    else {
        showArea.insertAdjacentHTML('afterbegin', convertedText[index]);
        readCount++;
    }
};
var showBeforeTextLine = function (index, showArea) {
    document.querySelector('#js-show-area').innerHTML = '';
    if (readCount <= 1) {
        showArea.insertAdjacentHTML('afterbegin', 'これ以上戻れません！');
        readCount = 0;
    }
    else {
        showArea.insertAdjacentHTML('afterbegin', convertedText[index - 2]);
        readCount--;
    }
};
var deleteNull = function (splitArray) {
    return splitArray.filter(Boolean);
};
var stringSpritArray = function (textareaValue) {
    return textareaValue.split(/\r\n|\r|\n/);
};
var getValue = function (id) {
    return document.getElementById(id).value;
};
