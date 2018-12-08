var checkInclusion = function (s1, s2) {
  if (s1 == '') return true;
  if (s2 == '') return false;
  let missing = s1.length;
  let counts = {};
  for (let i = 0; i < missing; i++) {
    counts[s1[i]] = counts[s1[i]] ? counts[s1[i]] + 1 : 1;
  }
  let start = 0, end = 0;
  for (end = 0; end < s2.length; end++) {
    if (s2[end] in counts) {
      if (counts[s2[end]]-- > 0) {
        missing--;
      }
    }
    if (missing == 0) return true;
    if ((end - start) == (s1.length - 1)) {
      if (s2[start] in counts) {
        if (counts[s2[start]]++ >= 0) {
          missing++;
        }
      }
      start++;
    }
  }

  return false;

};