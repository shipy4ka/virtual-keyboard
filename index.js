import i18Obj from './translate.js';

const body = document.querySelector('body');

function showContent() {
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
                                  <div class="panel__key panel__key_control" id="ControlLeft">Ctrl</div>
                                  <div class="panel__key panel__key_control" id="MetaLeft">Win</div>
                                  <div class="panel__key panel__key_control" id="AltLeft">Alt</div>
                                  <div class="panel__key big" id="Space"> </div>
                                  <div class="panel__key panel__key_control" id="AltRight">Alt</div>
                                  <div class="panel__key panel__key_control arrow" id="ArrowLeft">⇦</div>
                                  <div class="panel__key panel__key_control arrow" id="ArrowDown">⇩</div>
                                  <div class="panel__key panel__key_control arrow" id="ArrowRight">⇨</div>
                                  <div class="panel__key panel__key_control" id="ControlRight">Ctrl</div>
                              </div>
                          </div>
                          <div class="keyboard__information">
                              <p data-i18="system">Made in Windows system</p>
                              <p data-i18="changing">Changing language by Ctrl + Shift</p>
                          </div>
                      </div>`;

    body.insertAdjacentHTML('afterbegin', content);
  }
  showContent();

