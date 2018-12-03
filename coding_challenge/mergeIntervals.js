/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function (intervals) {
  let head = null
  let tail = null
  let res = []

  // sort each intervals by start
  let sorted = intervals.sort((a, b) => {
    return a.start - b.start
  })


  for (let i = 0; i < sorted.length; i++) {
    let currentInterval = sorted[i]

    if (head === null) {
      head = currentInterval.start
      tail = currentInterval.end
    }


    if (currentInterval.start <= tail && currentInterval.end > tail) {
      tail = currentInterval.end
    }

    if (currentInterval.start > tail) {
      res.push(new Interval(head, tail))
      head = currentInterval.start
      tail = currentInterval.end

    }

    if (i == sorted.length - 1) {
      res.push(new Interval(head, tail))
    }


  }

  return res
};


// Input: [[1, 3], [2, 6], [8, 10], [15, 18]]
// Output: [[1, 6], [8, 10], [15, 18]]
// Explanation: Since intervals[1, 3] and[2, 6] overlaps, merge them into[1, 6].

// Input: [[1, 4], [4, 5]]
// Output: [[1, 5]]
// Explanation: Intervals[1, 4] and[4, 5] are considered overlapping.