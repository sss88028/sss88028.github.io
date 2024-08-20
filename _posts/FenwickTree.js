//let arr = Array.from({ length: 15 }, () => Math.floor(Math.random() * 20) - 5);
let arr = [10, -4, 12, 7, 10, 4, 2, 9, 9, 4, 14, 13, 13, -5, 6];

function UpdateBIT(tree, index, value) {
  while (index < tree.length) {
    tree[index] += value;
    let v1 = index;
    let v2 = -index;
    index += v1 & v2;
  }
}

function GetSumInner(tree, index) {
  let res = 0;
  while (index > 0) {
    res += tree[index];
    let v1 = index;
    let v2 = -index;
    index -= v1 & v2;
  }
  return res;
}

function GetSum(tree, from, to) {
  let r = GetSumInner(tree, to + 1);
  let l = GetSumInner(tree, from);
  let res = r - l;
  return res;
}

function BuildFenwickTree(arr) {
  let n = arr.length;
  let tree = Array(n + 1).fill(0);

  for (let i = 1; i <= n; ++i) {
    UpdateBIT(tree, i, arr[i - 1]);
  }

  return tree;
}

let tree = BuildFenwickTree(arr);

console.log(arr);
console.log(tree);
console.log(GetSum(tree, 0, 5));
console.log(GetSum(tree, 1, 5));
