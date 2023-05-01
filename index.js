import i18Obj from './translate.js';

const LANG = 'en';
const body = document.querySelector('body');

let language = localStorage.getItem('language') || LANG;
let textareaText = '';
let cursorPosition = 0;
let isCapsLocked = false;



function addContent() {
    const content = `<div class="keyboard__wrapper">
                          <textarea name="textarea" class="keyboard__textarea" autofocus></textarea>
                          <div class="keyboard__panel">
                              <div class="panel__row">
                                  <div class="panel__key letter symbol" data-i18="backquote" id='Backquote'>\`</div>
                                  <div class="panel__key digit" id="Digit1">1</div>
                                  <div class="panel__key digit" id="Digit2">2</div>
                                  <div class="panel__key digit" id="Digit3">3</div>
                                  <div class="panel__key digit" id="Digit4">4</div>
                                  <div class="panel__key digit" id="Digit5">5</div>
                                  <div class="panel__key digit" id="Digit6">6</div>
                                  <div class="panel__key digit" id="Digit7">7</div>
                                  <div class="panel__key digit" id="Digit8">8</div>
                                  <div class="panel__key digit" id="Digit9">9</div>
                                  <div class="panel__key digit" id="Digit0">0</div>
                                  <div class="panel__key symbol" id="Minus">-</div>
                                  <div class="panel__key symbol" id="Equal">=</div>
                                  <div class="panel__key panel__key_control middle backspace" id="Backspace">Backspace</div>
                              </div>
                              <div class="panel__row">
                                  <div class="panel__key panel__key_control tab" id="Tab">Tab</div>
                                  <div class="panel__key letter" data-i18="q" id="KeyQ">q</div>
                                  <div class="panel__key letter" data-i18="w" id="KeyW">w</div>
                                  <div class="panel__key letter" data-i18="e" id="KeyE">e</div>
                                  <div class="panel__key letter" data-i18="r" id="KeyR">r</div>
                                  <div class="panel__key letter" data-i18="t" id="KeyT">t</div>
                                  <div class="panel__key letter" data-i18="y" id="KeyY">y</div>
                                  <div class="panel__key letter" data-i18="u" id="KeyU">u</div>
                                  <div class="panel__key letter" data-i18="i" id="KeyI">i</div>
                                  <div class="panel__key letter" data-i18="o" id="KeyO">o</div>
                                  <div class="panel__key letter" data-i18="p" id="KeyP">p</div>
                                  <div class="panel__key letter symbol" data-i18="[" id="BracketLeft">[</div>
                                  <div class="panel__key letter symbol" data-i18="]" id="BracketRight">]</div>
                                  <div class="panel__key symbol" id="Backslash">\\</div>
                                  <div class="panel__key panel__key_control del" id="Delete">del</div>
                              </div>
                              <div class="panel__row">
                                  <div class="panel__key panel__key_control middle capslock" id="CapsLock">CapsLk</div>
                                  <div class="panel__key letter" data-i18="a" id="KeyA">a</div>
                                  <div class="panel__key letter" data-i18="s" id="KeyS">s</div>
                                  <div class="panel__key letter" data-i18="d" id="KeyD">d</div>
                                  <div class="panel__key letter" data-i18="f" id="KeyF">f</div>
                                  <div class="panel__key letter" data-i18="g" id="KeyG">g</div>
                                  <div class="panel__key letter" data-i18="h" id="KeyH">h</div>
                                  <div class="panel__key letter" data-i18="j" id="KeyJ">j</div>
                                  <div class="panel__key letter" data-i18="k" id="KeyK">k</div>
                                  <div class="panel__key letter" data-i18="l" id="KeyL">l</div>
                                  <div class="panel__key letter symbol" data-i18=";" id="Semicolon">;</div>
                                  <div class="panel__key letter symbol" data-i18="quotes" id="Quote">'</div>
                                  <div class="panel__key panel__key_control middle enter" id="Enter">Enter</div>
                              </div>
                              <div class="panel__row">
                                  <div class="panel__key panel__key_control middle shift" id="ShiftLeft">Shift</div>
                                  <div class="panel__key letter" data-i18="z" id="KeyZ">z</div>
                                  <div class="panel__key letter" data-i18="x" id="KeyX">x</div>
                                  <div class="panel__key letter" data-i18="c" id="KeyC">c</div>
                                  <div class="panel__key letter" data-i18="v" id="KeyV">v</div>
                                  <div class="panel__key letter" data-i18="b" id="KeyB">b</div>
                                  <div class="panel__key letter" data-i18="n" id="KeyN">n</div>
                                  <div class="panel__key letter" data-i18="m" id="KeyM">m</div>
                                  <div class="panel__key letter symbol" data-i18="comma" id="Comma">,</div>
                                  <div class="panel__key letter symbol" data-i18="period" id="Period">.</div>
                                  <div class="panel__key symbol" data-i18="slash" id="Slash">/</div>
                                  <div class="panel__key panel__key_control arrow-up arrow" id="ArrowUp">⇧</div>
                                  <div class="panel__key panel__key_control middle shift" id="ShiftRight">Shift</div>
                              </div>
                              <div class="panel__row">
                                  <div class="panel__key panel__key_control" id="CtrlLeft">Ctrl</div>
                                  <div class="panel__key panel__key_control" id="MetaLeft">Win</div>
                                  <div class="panel__key panel__key_control" id="AltLeft">Alt</div>
                                  <div class="panel__key big" id="Space"> </div>
                                  <div class="panel__key panel__key_control" id="AltRight">Alt</div>
                                  <div class="panel__key panel__key_control arrow" id="ArrowLeft">⇦</div>
                                  <div class="panel__key panel__key_control arrow" id="ArrowDown">⇩</div>
                                  <div class="panel__key panel__key_control arrow" id="ArrowRight">⇨</div>
                                  <div class="panel__key panel__key_control" id="CtrlRight">Ctrl</div>
                              </div>
                          </div>
                          <div class="keyboard__information">
                              <p data-i18="system">Made in Windows system</p>
                              <p data-i18="changing">Changing language by left Alt + Shift</p>
                          </div>
                      </div>`;

    body.insertAdjacentHTML('afterbegin', content);
}
addContent();

const textarea = document.querySelector('.keyboard__textarea');
const keyboard = document.querySelector('.keyboard__panel');
const letters = document.querySelectorAll('.letter');
const digits = document.querySelectorAll('.digit');
const symbols = document.querySelectorAll('.symbol');
const shifts = document.querySelectorAll('.shift');
const shiftLeft = document.querySelector('#ShiftLeft');
const altLeft = document.querySelector('#AltLeft');
const data = document.querySelectorAll('[data-i18]');

function addText(text) {
    textareaText = textareaText.substring(0, cursorPosition) + text + textareaText.substring(cursorPosition);
    cursorPosition += text.length;
}

function changeTextarea() {
    textarea.textContent = textareaText;
    textarea.selectionStart = cursorPosition;
    textarea.focus();
}

function delText() {
    if (cursorPosition > 0) {
      textareaText = textareaText.substring(0, textarea.selectionStart - 1)
        + textareaText.substring(textarea.selectionEnd);
      cursorPosition -= 1;
    }
}

function delTextByDel() {
    textareaText = textareaText.substring(0, textarea.selectionStart)
      + textareaText.substring(textarea.selectionEnd + 1);
}

function toggleLowerCase(key) {
    if (isCapsLocked) {
      key.classList.remove('capslock_active');
      letters.forEach((l) => {
        const letter = l;
        letter.textContent = letter.textContent.toLowerCase();
      });
      isCapsLocked = false;
    } else if (!isCapsLocked) {
      letters.forEach((l) => {
        const letter = l;
        letter.textContent = letter.textContent.toUpperCase();
      });
      key.classList.add('capslock_active');
      isCapsLocked = true;
    }
}

function pressedKey(key) {
    if (key.classList.contains('panel__key') && !key.classList.contains('panel__key_control')) {
      addText(key.textContent);
    }
    if (key.classList.contains('arrow')) {
      addText(key.textContent);
    }
    if (key.classList.contains('capslock')) {
        toggleLowerCase(key);
    }
    if (key.classList.contains('enter')) {
      addText('\n');
    }
    if (key.classList.contains('tab')) {
      addText('\t');
    }
    if (key.classList.contains('backspace')) {
      delText();
    }
    if (key.classList.contains('del')) {
      delTextByDel();
    }
    changeTextarea();
}

textarea.addEventListener('click', () => {
    cursorPosition = textarea.selectionStart;
});

function makeTranslate() {
    data.forEach((el) => {
      const elem = el;
      elem.textContent = i18Obj[language][elem.dataset.i18];
    });
}
makeTranslate();
function saveToLocalStorage() {
    localStorage.setItem('language', language);
}

function changeLang() {
    if (language === 'ru') {
      language = 'en';
    } else if (language === 'en') {
      language = 'ru';
    }
    saveToLocalStorage();
    if (isCapsLocked) {
      data.forEach((el) => {
        const elem = el;
        elem.textContent = i18Obj[language][elem.dataset.i18].toUpperCase();
      });
    } else if (!isCapsLocked) {
      data.forEach((el) => {
        const elem = el;
        elem.textContent = i18Obj[language][elem.dataset.i18].toLowerCase();
      });
    }
}

function unShiftSymb() {
    const [one, two, three, four, five, six, seven, eight, nine, zero] = digits;
    const [backquote,minus,equal,bracketleft,bracketright,backslash,semicolon,quote,comma,period,slash,] = symbols;
    one.textContent = '1';
    two.textContent = '2';
    three.textContent = '3';
    four.textContent = '4';
    five.textContent = '5';
    six.textContent = '6';
    seven.textContent = '7';
    eight.textContent = '8';
    nine.textContent = '9';
    zero.textContent = '0';
    minus.textContent = '-';
    equal.textContent = '=';
    if (language === 'en') {
      backquote.textContent = '`';
      bracketleft.textContent = '[';
      bracketright.textContent = ']';
      backslash.textContent = '\\';
      semicolon.textContent = ';';
      quote.textContent = "'";
      comma.textContent = ',';
      period.textContent = '.';
      slash.textContent = '/';
    } else if (language === 'ru') {
      backslash.textContent = '\\';
      slash.textContent = '.';
    }
}

function shiftSymb() {
    const [one, two, three, four, five, six, seven, eight, nine, zero] = digits;
    const [backquote,minus,equal,bracketleft,bracketright,backslash,semicolon,quote,comma,period,slash,] = symbols;
    if (language === 'en') {
      one.textContent = '!';
      two.textContent = '@';
      three.textContent = '#';
      four.textContent = '$';
      five.textContent = '%';
      six.textContent = '^';
      seven.textContent = '&';
      eight.textContent = '*';
      nine.textContent = '(';
      zero.textContent = ')';
      backquote.textContent = '~';
      minus.textContent = '_';
      equal.textContent = '+';
      bracketleft.textContent = '{';
      bracketright.textContent = '}';
      backslash.textContent = '|';
      semicolon.textContent = ':';
      quote.textContent = '"';
      comma.textContent = '<';
      period.textContent = '>';
      slash.textContent = '?';
    } else if (language === 'ru') {
      one.textContent = '!';
      two.textContent = '"';
      three.textContent = '№';
      four.textContent = ';';
      five.textContent = '%';
      six.textContent = ':';
      seven.textContent = '?';
      eight.textContent = '*';
      nine.textContent = '(';
      zero.textContent = ')';
      minus.textContent = '_';
      equal.textContent = '+';
      backslash.textContent = '/';
      slash.textContent = ',';
    }
}



function changeLetters() {
    if (isCapsLocked) {
      letters.forEach((l) => {
        const letter = l;
        letter.textContent = letter.textContent.toUpperCase();
      });
    } else if (!isCapsLocked) {
      letters.forEach((l) => {
        const letter = l;
        letter.textContent = letter.textContent.toLowerCase();
      });
    }
}

function pressKey(e) {
    const key = document.querySelector(`#${e.code}`);
    if (key) {
      if (key.classList.contains('panel__key')) {
        e.preventDefault();
      }
      if(key.classList.contains('capslock')){
        key.classList.toggle('capslock_active');
      }
      if (key.classList.contains('control_key')&& !key.classList.contains('capslock')) {
        key.classList.add('control_active');
      }
      if(!key.classList.contains('control_key')&& !key.classList.contains('capslock')) {
        key.classList.add('active');
      }
      if (key.classList.contains('shift') & !altLeft.classList.contains('active')) {
        shiftSymb();
        changeLetters();
      }
      pressedKey(key);
    }
    if (shiftLeft.classList.contains('active') && altLeft.classList.contains('active')) {
      changeLang();
    }
}

function upKey(key) {
    if (key.classList.contains('shift')) {
      if (isCapsLocked) {
        letters.forEach((l) => {
          const letter = l;
          letter.textContent = letter.textContent.toUpperCase();
        });
      } else if (!isCapsLocked) {
        letters.forEach((l) => {
          const letter = l;
          letter.textContent = letter.textContent.toLowerCase();
        });
      }
      unShiftSymb();
    }
  }

function unPressKey(e) {
    const key = document.querySelector(`#${e.code}`);
    if (key) {
      if (
        key.classList.contains('control_key')
        && !key.classList.contains('capslock')
      ) {
        key.classList.remove('control_active');
      }
      if (!key.classList.contains('capslock')) {
        key.classList.remove('active');
      }
      upKey(key);
    }
}

document.addEventListener('keydown', pressKey);
document.addEventListener('keyup', unPressKey);

shifts.forEach((shift) => shift.addEventListener('mousedown', () => {
    shiftSymb();
    changeLetters();
}));

shifts.forEach((shift) => shift.addEventListener('mouseup', (e) => {
    const key = e.target;
    upKey(key);
}));

function identifyKey(e) {
    const key = e.target;
    pressedKey(key);
}

keyboard.addEventListener('click', identifyKey);

