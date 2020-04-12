/**
 * if the characters exist in the input string returns true otherwise false
 * Input inputString "i am your father"
 * Input labelString "iur"
 */
export default function doIt(inputString, labelString) {
  for (let i = 0, j = 0; i < inputString.length; i++) {
    if (inputString[i] === labelString[j]) {
      j++;
    }
    if (j === labelString.length) {
      return true;
    }
  }
  return false;
}
