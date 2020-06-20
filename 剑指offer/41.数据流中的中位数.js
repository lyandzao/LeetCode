/**
 * initialize your data structure here.
 */
/**
 * 思路1：暴力法，直接排序查找
 * 思路2：大顶堆，小顶堆
 * 我要吐了，fuck algorithm
 */
var MedianFinder = function () {
  this.data = [];
};

MedianFinder.prototype.addNum = function (num) {
  if (!this.data.length) {
    this.data.push(num)
    return
  }
  let l = 0, r = this.data.length - 1
  while (l <= r) {
    let mid = (l + r) >> 1
    if (num > this.data[mid]) {
      l = mid + 1
    } else if (num < this.data[mid]) {
      r = mid - 1
    } else {
      this.data.splice(mid, 0, num)
      return
    }
  }
  this.data.splice(r + 1, 0, num)
};

MedianFinder.prototype.findMedian = function () {
  const length = this.data.length;
  if (!length) {
    return null;
  }
  const mid = Math.floor((length - 1) / 2);
  if (length % 2) {
    return this.data[mid];
  }
  return (this.data[mid] + this.data[mid + 1]) / 2;
};
