var isValid = function (s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    let c = s.charAt(i);
    if (c != "(" && (c != "[") & (c != "{") && c != "}" && c != "]" && c != ")")
      continue;
    switch (c) {
      case "(":
        stack.push(")");
        break;
      case "[":
        stack.push("]");
        break;
      case "{":
        stack.push("}");
        break;
      default:
        if (c !== stack.pop()) {
          return false;
        }
    }
  }

  return stack.length === 0;
};

function myFunction() {
  s = document.getElementById("s").value;
  a = isValid(s);
  if (a === true) document.getElementById("ans").innerHTML = "Correct Brackets";
  else document.getElementById("ans").innerHTML = "Incorrect Brackets";
}
