const sol_charkey = (s1, s2) => {

  s1_array = Array.from(s1);
  s1_key = s1_array.sort().join("");

  s2_array = Array.from(s2);
  s2_key = s2_array.sort().join("");

  return s1_key === s2_key;
};

const sol_hashmap = (s1, s2) => {
  const count = {};
  for (let char of s1) {
    if (!(char in count)) {
      count[char] = 0;
    }
    count[char] += 1;
  }
  
  for (let char of s2) {
    if (count[char] === undefined) {
      return false;
    } else {
      count[char] -= 1;
    }
  }
  
  for (let char in count) {
    if (count[char] !== 0) {
      return false;
    }
  }
  
  return true;
};
