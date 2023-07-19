function isPalindrome(value) {
  let type = typeof value;
  if (type === "string") {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome(2));
