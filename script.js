// set keys

const KEYS = [
    { id: "Backquote", layoutEn: "`", layoutEnSymb: "~", layoutRu: "ё", layoutRuSymb: " " },
    { id: "Digit1", layoutEn: "1", layoutEnSymb: "!", layoutRu: "1", layoutRuSymb: "!" },
    { id: "Digit2", layoutEn: "2", layoutEnSymb: "@", layoutRu: "2", layoutRuSymb: '"' },
    { id: "Digit3", layoutEn: "3", layoutEnSymb: "#", layoutRu: "3", layoutRuSymb: "№" },
    { id: "Digit4", layoutEn: "4", layoutEnSymb: "$", layoutRu: "4", layoutRuSymb: ";" },
    { id: "Digit5", layoutEn: "5", layoutEnSymb: "%", layoutRu: "5", layoutRuSymb: "%" },
    { id: "Digit6", layoutEn: "6", layoutEnSymb: "^", layoutRu: "6", layoutRuSymb: ":" },
    { id: "Digit7", layoutEn: "7", layoutEnSymb: "&", layoutRu: "7", layoutRuSymb: "?" },
    { id: "Digit8", layoutEn: "8", layoutEnSymb: "*", layoutRu: "8", layoutRuSymb: "*" },
    { id: "Digit9", layoutEn: "9", layoutEnSymb: "(", layoutRu: "9", layoutRuSymb: "(" },
    { id: "Digit0", layoutEn: "0", layoutEnSymb: ")", layoutRu: "0", layoutRuSymb: ")" },
    { id: "Minus", layoutEn: "-", layoutEnSymb: "_", layoutRu: "-", layoutRuSymb: "_" },
    { id: "Equal", layoutEn: "=", layoutEnSymb: "+", layoutRu: "=", layoutRuSymb: "+" },
    { id: "Backspace", layoutEn: "BACKSPACE", layoutEnSymb: " ", layoutRu: "BACKSPACE", layoutRuSymb: " ", type: "functional", },
    { id: "Tab", layoutEn: "TAB", layoutEnSymb: " ", layoutRu: "TAB", layoutRuSymb: " ", type: "functional-tab", },
    { id: "KeyQ", layoutEn: "q", layoutEnSymb: " ", layoutRu: "й", layoutRuSymb: " " },
    { id: "KeyW", layoutEn: "w", layoutEnSymb: " ", layoutRu: "ц", layoutRuSymb: " " },
    { id: "KeyE", layoutEn: "e", layoutEnSymb: " ", layoutRu: "у", layoutRuSymb: " " },
    { id: "KeyR", layoutEn: "r", layoutEnSymb: " ", layoutRu: "к", layoutRuSymb: " " },
    { id: "KeyT", layoutEn: "t", layoutEnSymb: " ", layoutRu: "е", layoutRuSymb: " " },
    { id: "KeyY", layoutEn: "y", layoutEnSymb: " ", layoutRu: "н", layoutRuSymb: " " },
    { id: "KeyU", layoutEn: "u", layoutEnSymb: " ", layoutRu: "г", layoutRuSymb: " " },
    { id: "KeyI", layoutEn: "i", layoutEnSymb: " ", layoutRu: "ш", layoutRuSymb: " " },
    { id: "KeyO", layoutEn: "o", layoutEnSymb: " ", layoutRu: "щ", layoutRuSymb: " " },
    { id: "KeyP", layoutEn: "p", layoutEnSymb: " ", layoutRu: "з", layoutRuSymb: " " },
    { id: "BracketLeft", layoutEn: "[", layoutEnSymb: "{", layoutRu: "х", layoutRuSymb: " " },
    { id: "BracketRight", layoutEn: "]", layoutEnSymb: "}", layoutRu: "ъ", layoutRuSymb: " " },
    { id: "Backslash", layoutEn: "\\", layoutEnSymb: "|", layoutRu: "\\", layoutRuSymb: "/" },
    { id: "Delete", layoutEn: "DEL", layoutEnSymb: " ", layoutRu: "DEL", layoutRuSymb: " ", type: "functional-del", },
    { id: "CapsLock", layoutEn: "CAPS LOCK", layoutEnSymb: " ", layoutRu: "CAPS LOCK", layoutRuSymb: " ", type: "functional", },
    { id: "KeyA", layoutEn: "a", layoutEnSymb: " ", layoutRu: "ф", layoutRuSymb: " " },
    { id: "KeyS", layoutEn: "s", layoutEnSymb: " ", layoutRu: "ы", layoutRuSymb: " " },
    { id: "KeyD", layoutEn: "d", layoutEnSymb: " ", layoutRu: "в", layoutRuSymb: " " },
    { id: "KeyF", layoutEn: "f", layoutEnSymb: " ", layoutRu: "а", layoutRuSymb: " " },
    { id: "KeyG", layoutEn: "g", layoutEnSymb: " ", layoutRu: "п", layoutRuSymb: " " },
    { id: "KeyH", layoutEn: "h", layoutEnSymb: " ", layoutRu: "р", layoutRuSymb: " " },
    { id: "KeyJ", layoutEn: "j", layoutEnSymb: " ", layoutRu: "о", layoutRuSymb: " " },
    { id: "KeyK", layoutEn: "k", layoutEnSymb: " ", layoutRu: "л", layoutRuSymb: " " },
    { id: "KeyL", layoutEn: "l", layoutEnSymb: " ", layoutRu: "д", layoutRuSymb: " " },
    { id: "Semicolon", layoutEn: ";", layoutEnSymb: ":", layoutRu: "ж", layoutRuSymb: " " },
    { id: "Quote", layoutEn: "'", layoutEnSymb: '"', layoutRu: "э", layoutRuSymb: " " },
    { id: "Enter", layoutEn: "ENTER", layoutEnSymb: " ", layoutRu: "ENTER", layoutRuSymb: " ", type: "functional", },
    { id: "ShiftLeft", layoutEn: "SHIFT", layoutEnSymb: " ", layoutRu: "SHIFT", layoutRuSymb: " ", type: "functional", },
    { id: "KeyZ", layoutEn: "z", layoutEnSymb: " ", layoutRu: "я", layoutRuSymb: " " },
    { id: "KeyX", layoutEn: "x", layoutEnSymb: " ", layoutRu: "ч", layoutRuSymb: " " },
    { id: "KeyC", layoutEn: "c", layoutEnSymb: " ", layoutRu: "с", layoutRuSymb: " " },
    { id: "KeyV", layoutEn: "v", layoutEnSymb: " ", layoutRu: "м", layoutRuSymb: " " },
    { id: "KeyB", layoutEn: "b", layoutEnSymb: " ", layoutRu: "и", layoutRuSymb: " " },
    { id: "KeyN", layoutEn: "n", layoutEnSymb: " ", layoutRu: "т", layoutRuSymb: " " },
    { id: "KeyM", layoutEn: "m", layoutEnSymb: " ", layoutRu: "ь", layoutRuSymb: " " },
    { id: "Comma", layoutEn: ",", layoutEnSymb: "<", layoutRu: "б", layoutRuSymb: " " },
    { id: "Period", layoutEn: ".", layoutEnSymb: ">", layoutRu: "ю", layoutRuSymb: " " },
    { id: "Slash", layoutEn: "/", layoutEnSymb: "?", layoutRu: ".", layoutRuSymb: "," },
    { id: "ArrowUp", layoutEn: "\u02c4", layoutEnSymb: " ", layoutRu: "\u02c4", layoutRuSymb: " ", type: "functional-arrow", },
    { id: "ShiftRight", layoutEn: "SHIFT", layoutEnSymb: " ", layoutRu: "SHIFT", layoutRuSymb: " ", type: "functional", },
    { id: "ControlLeft", layoutEn: "CTRL", layoutEnSymb: " ", layoutRu: "CTRL", layoutRuSymb: " ", type: "functional-ctrl", },
    { id: "WindowsButton", layoutEn: "WIN", layoutEnSymb: " ", layoutRu: "WIN", layoutRuSymb: " ", type: "functional-win", },
    { id: "language", layoutEn: "ENG", layoutEnSymb: " ", layoutRu: "RUS", layoutRuSymb: " " },
    { id: "AltLeft", layoutEn: "ALT", layoutEnSymb: " ", layoutRu: "ALT", layoutRuSymb: " ", type: "functional-alt", },
    { id: "Space", layoutEn: "space", layoutEnSymb: " ", layoutRu: "space", layoutRuSymb: " ", type: "functional-space", },
    { id: "AltRight", layoutEn: "ALT", layoutEnSymb: " ", layoutRu: "ALT", layoutRuSymb: " ", type: "functional-alt", },
    { id: "ControlRight", layoutEn: "CTRL", layoutEnSymb: " ", layoutRu: "CTRL", layoutRuSymb: " ", type: "functional-ctrl", },
    { id: "ArrowLeft", layoutEn: "\u02c2", layoutEnSymb: " ", layoutRu: "\u02c2", layoutRuSymb: " ", type: "functional-arrow", },
    { id: "ArrowDown", layoutEn: "\u02c5", layoutEnSymb: " ", layoutRu: "\u02c5", layoutRuSymb: " ", type: "functional-arrow", },
    { id: "ArrowRight", layoutEn: "\u02c3", layoutEnSymb: " ", layoutRu: "\u02c3", layoutRuSymb: " ", type: "functional-arrow", },
  ];
  
// create keyboard and set it's attributes and properties

const KEYBOARD = {

  attributes: {
    section: null,
    input: null,
    keys: [],
    keysContainer: null,
  },

  properties: {
    capsLock: false,
    shift: false,
    language: "eng",
    animation: true,
  },

  createKeys(keys, language) {
    keys.forEach((key) => {
      const keyboardElement = document.createElement("button");
      keyboardElement.setAttribute("type", "button");
      keyboardElement.classList.add("key");
      if (key.type === "functional") {
        keyboardElement.classList.add("key-medium", "key-functional");
      } else if (key.type === "functional-space") {
        keyboardElement.classList.add("key-large");
      } else if (key.type === "functional-ctrl") {
        keyboardElement.classList.add("key-ctrl");
      }
      if (language === "eng") {
        keyboardElement.setAttribute("value", key.layoutEn);
        keyboardElement.setAttribute("name", key.layoutEnSymb);
        keyboardElement.innerHTML = `<span>${key.layoutEnSymb} <br> ${key.layoutEn}</span>`;
      } else {
        keyboardElement.setAttribute("value", key.layoutRu);
        keyboardElement.setAttribute("name", key.layoutRuSymb);
        keyboardElement.innerHTML = `<span>${key.layoutRuSymb} <br> ${key.layoutRu}</span>`;
      }
      keyboardElement.id = key.id;
      this.attributes.keysContainer.append(keyboardElement);
    });
  },

  // language settings 

  changeLanguage() {
    if (this.properties.language === "eng") {
      this.properties.language = "rus";
    } else {
      this.properties.language = "eng";
    }
    this.createLanguageState();
    this.saveLanguage();
  },

  createLanguageState() {
    document.querySelectorAll(".key").forEach((element) => {
      element.remove();
    });
    this.createKeys(KEYS, this.properties.language);
    this.properties.shift = false;
  },

  saveLanguage() {
    sessionStorage.setItem("language", this.properties.language);
  },
  restoreLanguage() {
    if (sessionStorage.getItem("language")) {
      this.properties.language = sessionStorage.getItem("language");
    } else this.properties.language = "eng";
  },

  // creating and visualising keyboard

  createKeyboard() {

    // create elements
    const content = document.createElement("div");
    this.attributes.input = document.createElement("textarea");
    this.attributes.section = document.createElement("section");
    this.attributes.keysContainer = document.createElement("div");
    const description = document.createElement("p");
    description.innerText = `Раскладка клавиатуры соответствует ОС Windows. Переключение языка осуществляется комбинацией LEFT CTRL + ALT. При возникновении каких-либо вопросов прошу писать в телеграм @dmitry_chigrin или дискорд @ChigrinDmitry`;

    // add classes
    content.classList.add("content");
    this.attributes.input.classList.add("input");
    this.attributes.input.setAttribute("autofocus", "true");
    this.attributes.section.classList.add("container");
    this.attributes.keysContainer.classList.add("keyboard-keys");
    this.attributes.keysContainer.id = "keyboard";

    // append elements
    content.append(description);
    content.append(this.attributes.input);
    this.attributes.section.append(this.attributes.keysContainer);
    content.append(this.attributes.section);
    document.body.append(content);
  },

  // set keys functionality

  keyBackspace() {
    const pressBackspace = this.attributes.input;
    pressBackspace.value = pressBackspace.value.substring(0, pressBackspace.value.length - 1);
    this.attributes.input.focus();
  },

  keyDelete() {
    this.attributes.input.setRangeText(
      "",
      this.attributes.input.selectionStart,
      this.attributes.input.selectionEnd + 1,
      "start"
    );
  },

  switchRegister(nameProp) {
    this.properties[`${nameProp}`] = !this.properties[`${nameProp}`];
    this.makeUpperAndLower();
  },

  enterSpace(value) {
    this.attributes.input.value += value;
    this.attributes.input.focus();
  },

  pressKeyboard() {
    const pressEvent = new Set();
    this.attributes.keysContainer.addEventListener("mousedown", (event) => {
      this.addKeysParameters(
        event.target.id,
        event.target.value,
        event.target.name,
        event.target.name
      );
      
      pressEvent.add(event.target.id);
      if (pressEvent.has("AltLeft") && pressEvent.has("ControlLeft")) {
        this.changeLanguage();
      }
      if (this.properties.shift) {
        document.getElementById("ShiftLeft").classList.add("key_active");
      } else {
        document.getElementById("ShiftLeft").classList.remove("key_active");
      }
    });

    this.attributes.keysContainer.addEventListener("mouseup", (event) => {
      pressEvent.delete(event.target.id);
    });
  },
  
  animationButton(keyPress, animationIsTrue) {
    const keyAnim = document.getElementById(`${keyPress}`);
    if (animationIsTrue) {
      keyAnim.style.backgroundColor = "darkgray";
      keyAnim.style.boxShadow = "none";
      keyAnim.style.color = "white";
      keyAnim.style.transition = "all 300ms ease";
    } else {
      keyAnim.style.backgroundColor = "";
      keyAnim.style.boxShadow = "";
      keyAnim.style.color = "";
      keyAnim.style.transition = "";
    }
  },

  // interactions with physical keyboard

  materialKeyboard() {
    const pressEvent = new Set();
    document.addEventListener("keydown", (event) => {
      event.preventDefault();
      this.attributes.keys.forEach((key) => {
        if (event.code === key.id) {
          this.animationButton(event.code, this.properties.animation);
          KEYS.forEach((element) => {
            if (event.code === element.id) {
              let keyName = "";
              let keyNameSymb = "";
              if (this.properties.language === "eng") {
                keyName = element.layoutEn;
                keyNameSymb = element.layoutEnSymb;
              } else {
                keyName = element.layoutRu;
                keyNameSymb = element.layoutRuSymb;
              }
              this.addKeysParameters(event.code, keyName, keyNameSymb, key.name);
            }
          });
        }
      });
      pressEvent.add(event.code);
      if (pressEvent.has("AltLeft") && pressEvent.has("ControlLeft"))
        this.changeLanguage();
    });

    document.addEventListener("keyup", (event) => {
      this.attributes.keys.forEach((key) => {
        if (event.code === key.id) {
          this.animationButton(event.code, !this.properties.animation);
          if (event.code === "ShiftLeft" || event.code === "ShiftRight") {
            this.switchRegister("shift");
          }
        }
      });
      pressEvent.delete(event.code);
    });
  },

  addKeysParameters(buttonId, keyValue, keyNameSymb, keyName) {
    if (buttonId === "Tab") {
      this.enterSpace("    ");
    } else if (buttonId === "Space") {
      this.enterSpace(" ");
    } else if (buttonId === "Enter") {
      this.enterSpace("\n");
    } else if (buttonId === "Backspace") {
      this.keyBackspace();
    } else if (buttonId === "CapsLock") {
      this.switchRegister("capsLock");
      document
        .getElementById(`${buttonId}`)
        .classList.toggle("key-active", this.properties.capsLock);
    } else if (buttonId === "ShiftLeft" || buttonId === "ShiftRight") {
      this.switchRegister("shift");
    } else if (buttonId === "Delete") {
      this.keyDelete();
    } else if (buttonId === "language") {
      this.changeLanguage();
    } else if (!buttonId || buttonId === "keyboard") {
      this.attributes.input.value += "";
    } else {
      if (
        buttonId === "ControlLeft" ||
        buttonId === "ControlRight" ||
        buttonId === "AltLeft" ||
        buttonId === "AltRight"
      ) {
        this.attributes.input.value += "";
      } else if (this.properties.capsLock) {
        this.attributes.input.value += keyValue.toUpperCase();
      } else if (this.properties.shift) {
        if (keyName !== " ") this.attributes.input.value += keyNameSymb;
        else this.attributes.input.value += keyValue.toUpperCase();
      } else this.attributes.input.value += keyValue;
    }
  },

  makeUpperAndLower() {
    document.querySelectorAll(".key").forEach((element) => {
      const elemID = element.id.slice(0, 3);
      if (elemID === "Key") {
        if (KEYBOARD.properties.shift || KEYBOARD.properties.capsLock) {
          document.querySelector(`#${element.id}`).innerHTML = `<span> ${
            element.name
          } <br> ${element.value.toUpperCase()} </span> `;
        } else {
          document.querySelector(
            `#${element.id}`
          ).innerHTML = `<span> ${element.name} <br> ${element.value} </span> `;
        }
      }
    });
  },
};

  // start web-page

window.onload = () => {
    KEYBOARD.createKeyboard();
    KEYBOARD.restoreLanguage();
    KEYBOARD.createKeys(KEYS, KEYBOARD.properties.language);
    KEYBOARD.attributes.keys = KEYBOARD.attributes.keysContainer.querySelectorAll(".key");
    KEYBOARD.pressKeyboard();
    KEYBOARD.materialKeyboard();
  };