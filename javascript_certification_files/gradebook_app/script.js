function getAverage(arr) {
  let totalScore = 0;
  for(let score of arr) {
    totalScore += score;
  }
  return totalScore / arr.length;
}

function getGrade(score) {
  if (score === 100) {
    return "A+";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

function hasPassingGrade(score) {
    if (getGrade(score) !== "F") {
      return true;
    } else {
      return false;
    }
}

function studentMsg(arr, score) {
  if (hasPassingGrade(score)) {
    return `Class average: ${getAverage(arr)}. Your grade: ${getGrade(score)}. You passed the course.`
  }
  else {
    return `Class average: ${getAverage(arr)}. Your grade: ${getGrade(score)}. You failed the course.`
  }
  }