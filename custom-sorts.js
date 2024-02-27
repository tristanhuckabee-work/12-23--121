function ageSort(users) {
  return users.sort((a, b) => a.age - b.age);
}

function oddEvenSort(arr) {
  return arr.sort((a, b) => {
    if ( (a % 2) && !(b % 2)) return -1;
    if (!(a % 2) &&  (b % 2)) return 1;
    return a - b;
  })
}

function validAnagrams(s, t) {
  return s.split('').sort().join('') == t.split('').sort().join('');
}

function reverseBaseSort(arr) {
  return arr.sort((a, b) => {
    if (`${a}`.length > `${b}`.length) return -1;
    if (`${a}`.length < `${b}`.length) return 1;
    return a - b;
  })
}

function frequencySort(arr) {
  let count = {}
  arr.forEach(el => {
    if (count[el]) count[el]++
    else count[el] = 1;
  });

  return arr.sort((a, b) => {
    if (count[a] < count[b]) return -1;
    if (count[a] > count[b]) return 1;
    return b - a;
  })
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
