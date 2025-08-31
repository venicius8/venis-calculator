const input = document.getElementById("input") as HTMLInputElement;

function setInput(char: number | string): void {
  input.value += char;
  const mathRegex = /[0-9]+/;
  if (!mathRegex.test(input.value)) {
    input.value = input.value.slice(0, -1);
  }
}
