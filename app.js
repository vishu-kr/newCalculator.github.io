let input = document.getElementById("input");
let output = document.getElementById("output");
function calculate(data) {
  switch (data) {
    case "AC":
      input.innerHTML = "";
      output.innerHTML = 0;
      break;
    case "C":
      input.innerHTML = input.innerHTML.substring(
        0,
        input.innerHTML.length - 1
      );
      output.innerHTML =
        eval(input.innerHTML) === undefined ? 0 : eval(input.innerHTML);
      break;
    case "=":
      output.innerHTML = eval(input.innerHTML);
      
      break;
    default:
      input.innerHTML += data;
  }
}





