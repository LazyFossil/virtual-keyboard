const keyboard = `
<div class="wrapper">
  <p class="title">Virtual keyboard</p>
  <textarea class="textarea" cols="20" rows="10"></textarea>
  <div class="keyboard">
    <div class="keyboard__row">
      <div class="key" data-key="Backquote"></div>
      <div class="key Digit1">1</div>
      <div class="key Digit2">2</div>
      <div class="key Digit3">3</div>
      <div class="key Digit4">4</div>
      <div class="key Digit5">5</div>
      <div class="key Digit6">6</div>
      <div class="key Digit7">7</div>
      <div class="key Digit8">8</div>
      <div class="key Digit9">8</div>
      <div class="key Digit0">0</div>
      <div class="key Minus">-</div>
      <div class="key Equal">=</div>
      <div class="key Backspace">backspace</div>
    </div>
    <div class="keyboard__row">
      <div class="key Tab">tab</div>
      <div class="key KeyQ">q</div>
      <div class="key KeyW">w</div>
      <div class="key KeyE">e</div>
      <div class="key KeyR">r</div>
      <div class="key KeyT">t</div>
      <div class="key KeyY">y</div>
      <div class="key KeyU">u</div>
      <div class="key KeyI">i</div>
      <div class="key KeyO">o</div>
      <div class="key KeyP">p</div>
      <div class="key BracketLeft">[</div>
      <div class="key BracketRight">]</div>
      <div class="key Backslash"></div>
    </div>
    <div class="keyboard__row">
      <div class="key CapsLock">caps</div>
      <div class="key KeyA">a</div>
      <div class="key KeyS">s</div>
      <div class="key KeyD">d</div>
      <div class="key KeyF">f</div>
      <div class="key KeyG">g</div>
      <div class="key KeyH">h</div>
      <div class="key KeyJ">j</div>
      <div class="key KeyK">k</div>
      <div class="key KeyL">l</div>
      <div class="key Semicolon">;</div>
      <div class="key Quote">'</div>
      <div class="key Enter">enter</div>
    </div>
    <div class="keyboard__row">
      <div class="key ShiftLeft">shift</div>
      <div class="key KeyZ">z</div>
      <div class="key KeyX">x</div>
      <div class="key KeyC">c</div>
      <div class="key KeyV">v</div>
      <div class="key KeyB">b</div>
      <div class="key KeyN">n</div>
      <div class="key KeyM">m</div>
      <div class="key Comma">,</div>
      <div class="key Period">.</div>
      <div class="key Slash">/</div>
      <div class="key ShiftRight">shift</div>
    </div>
    <div class="keyboard__row">
      <div class="key ControlLeft">ctrl</div>
      <div class="key MetaLeft">win</div>
      <div class="key AltLeft">alt</div>
      <div class="key Space"></div>
      <div class="key AltRight">alt</div>
      <div class="key ArrowLeft"><</div>
      <div class="Arrow-wrapper">
        <div class="key ArrowUp">︿</div>
        <div class="key ArrowDown">﹀</div>
      </div>
      <div class="key ArrowRight">></div>
      <div class="key ControlRight">ctrl</div>
    </div>
  </div>
</div>`
const body = document.querySelector('body');
body.insertAdjacentHTML('afterbegin', keyboard);