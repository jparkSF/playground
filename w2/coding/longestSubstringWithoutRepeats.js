var lengthOfLongestSubstring = function (s) {
  max = 0
  hash = {}

  let left = 0
  let right = 0

  while (left < s.length && right < s.length) {
    if (!hash[s[right]]) {
      hash[s[right]] = true
      right += 1
    } else {
      delete hash[s[left]]
      left += 1
    }

    max = Math.max(max, right - left)
  }

  return max

};