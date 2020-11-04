"use strict";
var convertButton = document.getElementById('js-button');
var novelText = [];
var novelBacklog = [];
convertButton.addEventListener('click', function () {
    var textareaValue = getValue('text-area');
    var splitArray = stringSpritArray(textareaValue);
    var deleteNullArray = deleteNull(splitArray);
    console.log(deleteNullArray);
    novelText = deleteNullArray;
}, false);
var nextButton = document.getElementById('js-next-button');
var backButton = document.getElementById('js-back-button');
nextButton.addEventListener('click', function () {
    var showArea = document.getElementById('js-show-area');
    console.log(novelText[0]);
    textLineShow(showArea, novelText[0]);
}, false);
backButton.addEventListener('click', function () {
    var showArea = document.getElementById('js-show-area');
    var a = novelBacklog.splice(-1);
    console.log(a[0]);
    textLineBackShow(showArea, a[0]);
}, false);
var textLineShow = function (showArea, text) {
    document.querySelector('#js-show-area').innerHTML = '';
    showArea.insertAdjacentHTML("afterbegin", text);
    novelText.splice(0, 1);
    novelBacklog.push(novelText[0]);
    console.log(novelText);
    console.log(novelBacklog);
};
var textLineBackShow = function (showArea, text) {
    document.querySelector('#js-show-area').innerHTML = '';
    showArea.insertAdjacentHTML("afterbegin", text);
    novelText.unshift(text);
    novelBacklog.splice(-1, 1);
    console.log(novelText);
    console.log(novelBacklog);
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
//# sourceMappingURL=index.js.map