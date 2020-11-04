let readCount: number = 0;
let convertedText: string[] = [];

const convertButton: HTMLElement = document.getElementById('js-button');
convertButton.addEventListener('click', () => {
  const textareaValue: string = getValue('text-area');
  const splitArray: string[] = stringSpritArray(textareaValue);
  const deleteNullArray: string[] = deleteNull(splitArray);
  convertedText = deleteNullArray;
  console.log(convertedText);
}, false);

const nextButton = document.getElementById('js-next-button');
const backButton = document.getElementById('js-back-button');

nextButton.addEventListener('click', () => {
  console.log(readCount);
  const showArea = document.getElementById('js-show-area');
  showTextLine(readCount, showArea);
}, false);

backButton.addEventListener('click', () => {
  console.log(readCount);
  const showArea = document.getElementById('js-show-area');
  showBeforeTextLine(readCount, showArea);
}, false);

const showTextLine = (index: number, showArea: HTMLElement) => {
  document.querySelector('#js-show-area').innerHTML = '';
  if (readCount >= convertedText.length) {
    showArea.insertAdjacentHTML('afterbegin', '最終行です！　これ以上進めません');
    readCount = convertedText.length + 1;
  } else {
    showArea.insertAdjacentHTML('afterbegin', convertedText[index]);
    readCount++;
  }

};

const showBeforeTextLine = (index: number, showArea: HTMLElement) => {
  document.querySelector('#js-show-area').innerHTML = '';
  if (readCount <= 1) {
    showArea.insertAdjacentHTML('afterbegin', 'これ以上戻れません！');
    readCount = 0;
  } else {
    showArea.insertAdjacentHTML('afterbegin', convertedText[index - 2]);
    readCount--;
  }
};
const deleteNull = (splitArray: string[]): string[] => {
  return splitArray.filter(Boolean);
};

const stringSpritArray = (textareaValue: string): string[] => {
  return textareaValue.split(/\r\n|\r|\n/);
};

const getValue = (id: string): string => {
  return (<HTMLInputElement>document.getElementById(id)).value;
};