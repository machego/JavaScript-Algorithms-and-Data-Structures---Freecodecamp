function rot13(str) {
    // 65 -> 90 is A -> Z
    let result = ''
    for(let i = 0; i < str.length; i++) {
      let asciiCode = str[i].charCodeAt();
      // 90 <- 13 is 77
      if(asciiCode >= 65 && asciiCode <= 77) {
        result += String.fromCharCode(asciiCode + 13)
      } else if (asciiCode >= 78 && asciiCode <= 90) {
        result += String.fromCharCode(asciiCode - 13)
      } else {
        result += str[i]
      }
    }
    return result;
  }
  
  console.log(rot13("SERR PBQR PNZC")); // should decode to the string FREE CODE CAMP
  console.log(rot13("SERR CVMMN!")); // should decode to the string FREE PIZZA!
  console.log(rot13("SERR YBIR?")); // should decode to the string FREE LOVE?
  console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
  // should decode to the string THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
