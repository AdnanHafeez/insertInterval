/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */

let exists = (intervals, start, end) => {

  let found = false;
  intervals.forEach( (a) => {
    if(start >= a[0] && end <= a[1]) {
      //console.log("Interval Found");
      found = true;
    }
  })

  return found ? "Yes" : "No";

}

let checkInterval = function(allIntervals,intervals, newInterval) {

  intervals.push(newInterval);
  for(let k in allIntervals) {
    let temp = k.split(',');
    let start = parseInt(temp[0]);
    let end = parseInt(temp[1]);
    allIntervals[k] = exists(intervals,start,end);
  }
  console.log(allIntervals);
}

var insert = function(intervals, newInterval) {

  if (intervals.length === 0) return newInterval;
  if (newInterval.length === 0) return intervals;

  let start = intervals[0];
  let end = intervals[intervals.length - 1];

  let t1 = start[0];
  let t2 = end[1];

  if(newInterval[0] < t1) t1 = newInterval[0];
  if(newInterval[1] < t1) t1 = newInterval[1];

  if(newInterval[0] > t2) t2 = newInterval[0];
  if(newInterval[1] > t2) t2 = newInterval[1];

  // t1 should be the start of the interval and t2 the end of the interval
  let startofIntervals = t1;
  let intervalObj = {};
  while(startofIntervals < t2){
    intervalObj[new Array(startofIntervals,startofIntervals+1)] = "No";
    startofIntervals++;
  }

  let newintervalObj = checkInterval(intervalObj, intervals, newInterval);




  //console.log(intervalObj);
};
let intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]];
let newIntervals = [4,8];
insert(intervals,newIntervals);
