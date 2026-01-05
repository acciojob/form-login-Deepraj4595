function format(string) {
  let res = "";
  for (let i = 0; i < string.length; i++) {
    if (
      (string.charCodeAt([i]) >= 65 && string.charCodeAt([i]) <= 90) ||
      (string.charCodeAt([i]) >= 97 && string.charCodeAt([i]) <= 122)
    ) {
      res += string[i];
    }
  }
  return res;
}

function getFormvalue() {
    //Write your code here
	let firstName = format(document.querySelector("input[name='fname']").value);
	let lastName = format(document.querySelector("input[name='lname']").value);
	let alertMsg = firstName + " " + lastName;
	alert(alertMsg);
}

