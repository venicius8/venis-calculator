const input = document.getElementById("input") as HTMLInputElement;

function setInput(char: number | string): void {
  const allowedChars = /^[0-9+\-*/^().%!π√]+$/;
  const mathStr = input.value.toString() + char.toString();

  if (allowedChars.test(mathStr)) {
    input.value += char;
  }
}

input.addEventListener("keydown", (e) => {
  const key = e.key;

  const allowedKeys = /^[0-9+\-*/^().%!π√=]$/;

  if (allowedKeys.test(key)) {
    e.preventDefault();
    setInput(key);
  } else {
    e.preventDefault();
  }
});

function equal() {
  // Replace eval*
  input.value = eval(input.value);
}
