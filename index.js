// code your solution here
function superbowlWin(array) {
    const winObject = array.find(obj => obj.result === "W");
    if (winObject) {
      return winObject.year;
    }
    return undefined;
  }