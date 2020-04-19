const replaceSomeNumbers = wholeNum => {
  //For an edge case, if a num is not an integer
  if (!Number.isInteger(wholeNum)) return `${wholeNum} is not an integer! Please put an integer/whole number`;
  let result = [];
  let i = 1;
  //Loop
  while (i <= wholeNum) {
    let data = "";
    const byTwo = divisbleBy2(i); //Returns "yu" if true
    const byThree = divisbleBy3(i); //Returns "gi" if true
    const byFive = divisbleBy5(i); //Returns "ho" if true
    if (byTwo) { //Check if there "yu"
      if (data.length > 0) { //Check if there is already data - "yu" or "gi" or "ho" or the combination
        data += "-" + byTwo; // Add - to concatenate
      } else {
        data = byTwo; //No need to concatenate
      }
    }
    if (byThree) {
      if (data.length > 0) { // Check if there is already data - "yu" or "gi" or "ho" or the combination
        data += "-" + byThree; // Add - to concatenate
      } else {
        data = byThree; // No need to concatenate
      }
    }
    if (byFive) {
      if (data.length > 0) { // Check if there is already data - "yu" or "gi" or "ho" or the combination
        data += "-" + byFive; // Add - to concatenate
      } else {
        data = byFive; // No need to concatenate
      }
    }

    if (data.length > 0) { //Check if there is data
      result.push(data);
    } else {
      result.push(i);
    }
    i++;
  }

  console.log(result);
  return result;
};

const divisbleBy2 = num => num % 2 === 0 && "yu";
const divisbleBy3 = num => num % 3 === 0 && "gi";
const divisbleBy5 = num => num % 5 === 0 && "oh";


replaceSomeNumbers(100);
replaceSomeNumbers(578);