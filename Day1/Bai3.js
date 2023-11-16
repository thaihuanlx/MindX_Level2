function findMostFrequentElement(arr) {
  let frequencyCounter = {};

  for (let i = 0; i < arr.length; i++) {
    if (frequencyCounter[arr[i]] === undefined) {
      frequencyCounter[arr[i]] = 1;
    } else {
      frequencyCounter[arr[i]]++;
    }
  }

  let maxFrequency = 0;
  let mostFrequentElement;

  for (const key in frequencyCounter) {
    if (frequencyCounter[key] > maxFrequency) {
      maxFrequency = frequencyCounter[key];
      mostFrequentElement = key;
    }
  }

  return {
    element: mostFrequentElement,
    frequency: maxFrequency,
  };
}

const array = [1, 2, 3, 5, 6, 4, 2, 1, 6, 3, 5, 3];
const result = findMostFrequentElement(array);

console.log(
  `Phần tử xuất hiện nhiều nhất là ${result.element} với số lần xuất hiện là ${result.frequency}`
);
