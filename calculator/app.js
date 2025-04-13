let display = document.querySelector(".ipt input"),
  useript = document.querySelectorAll(" button");

useript.forEach((ele) => {
  ele.onclick = () => {
    if (ele.value == "enter") {
      start();
    } else if (ele.value == "backspace") {
      display.value = display.value.slice(0, -1);
    } else {
      display.value += ele.value;
    }
  };
});

function start() {
  let operator;
  if (display.value.includes("-")) {
    operator = "-";
  }
  if (display.value.includes("+")) {
    operator = "+";
  }
  if (display.value.includes("*")) {
    operator = "*";
  }
  if (display.value.includes("/")) {
    operator = "/";
  }

  if (operator) {
    let splits = display.value.split(operator),
      num1 = Number(splits[0]),
      num2 = Number(splits[1]),
      result = 0;

    // console.log(num1, "slipts", num2);

    if (operator == "-") {
      result = num1 - num2;
    } else if (operator == "+") {
      result = num1 + num2;
    } else if (operator == "*") {
      result = num1 * num2;
    } else if (operator == "/") {
      result = num1 / num2;
    }
    display.value = result;
  } else {
    alert("error");
  }
}
