export default function add(a, b) {
  let i = a.length;
  let j = b.length;

  // 进位
  let carry = 0;
  // 结果
  let ret = '';
  while(i >= 0 || j >= 0)  {
    let x = 0;
    let y = 0;
    let sum;
    if (i >= 0) {
      x = a[i] - '0' // 转换成数字
      i--;
    }

    if (j >= 0) {
      y = b[j] - '0' // 转换成数字
      j--;
    }

    sum = x + y + carry;
    if (sum >= 10) {
      carry = 1
      sum -= 10
    } else {
      carry = 0;
    }

    // 0 + ''
    ret = sum + ret;
  }

  if (carry) {
    ret = carry + ret;
  }
  return ret
}

// test
// add ("999", "1")

