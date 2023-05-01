const keyboard = `
<div class="wrapper">
  <p class="title">Virtual keyboard</p>
  <textarea class="textarea" cols="20" rows="10"></textarea>
  <div class="keyboard">
    <div class="keyboard__row">
      <div class="key" data-key="Backquote"></div>
      <div class="key Digit1"></div>
      <div class="key Digit2"></div>
      <div class="key Digit3"></div>
      <div class="key Digit4"></div>
      <div class="key Digit5"></div>
      <div class="key Digit6"></div>
      <div class="key Digit7"></div>
      <div class="key Digit8"></div>
      <div class="key Digit9"></div>
      <div class="key Digit0"></div>
      <div class="key Minus"></div>
      <div class="key Equal"></div>
      <div class="key Backspace"></div>
    </div>
    <div class="keyboard__row">
      <div class="key Tab"></div>
      <div class="key KeyQ"></div>
      <div class="key KeyW"></div>
      <div class="key KeyE"></div>
      <div class="key KeyR"></div>
      <div class="key KeyT"></div>
      <div class="key KeyY"></div>
      <div class="key KeyU"></div>
      <div class="key KeyI"></div>
      <div class="key KeyO"></div>
      <div class="key KeyP"></div>
      <div class="key BracketLeft"></div>
      <div class="key BracketRight"></div>
      <div class="key Backslash"></div>
    </div>
    <div class="keyboard__row">
      <div class="key CapsLock"></div>
      <div class="key KeyA"></div>
      <div class="key KeyS"></div>
      <div class="key KeyD"></div>
      <div class="key KeyF"></div>
      <div class="key KeyG"></div>
      <div class="key KeyH"></div>
      <div class="key KeyJ"></div>
      <div class="key KeyK"></div>
      <div class="key KeyL"></div>
      <div class="key Semicolon"></div>
      <div class="key Quote"></div>
      <div class="key Enter"></div>
    </div>
    <div class="keyboard__row">
      <div class="key ShiftLeft"></div>
      <div class="key KeyZ"></div>
      <div class="key KeyX"></div>
      <div class="key KeyC"></div>
      <div class="key KeyV"></div>
      <div class="key KeyB"></div>
      <div class="key KeyN"></div>
      <div class="key KeyM"></div>
      <div class="key Comma"></div>
      <div class="key Period"></div>
      <div class="key Slash"></div>
      <div class="key ShiftRight"></div>
    </div>
    <div class="keyboard__row">
      <div class="key ControlLeft"></div>
      <div class="key MetaLeft"></div>
      <div class="key AltLeft"></div>
      <div class="key Space"></div>
      <div class="key AltRight"></div>
      <div class="key ArrowLeft"></div>
      <div class="Arrow-wrapper">
        <div class="key ArrowUp"></div>
        <div class="key ArrowDown"></div>
      </div>
      <div class="key ArrowRight"></div>
      <div class="key ControlRight"></div>
    </div>
  </div>
</div>`
const body = document.querySelector('body');
body.insertAdjacentHTML('afterbegin', keyboard);