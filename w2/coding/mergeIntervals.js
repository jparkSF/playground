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
  intervals = intervals.sort((a, b) => a.start - b.start);
  console.log(intervals);
  let max = Number.MIN_SAFE_INTEGER;
  let merged = [];
  for (let interval of intervals) {

    if (merged.length == 0 || merged.slice(-1)[0][1] < interval.start) {
      merged.push([interval.start, interval.end]);
    }
    else {

      max = Math.max(interval.end, merged.slice(-1)[0][1]);

      merged[merged.length - 1] = [merged[merged.length - 1][0], max]

    }
    console.log(merged);
  }

  return merged;
};