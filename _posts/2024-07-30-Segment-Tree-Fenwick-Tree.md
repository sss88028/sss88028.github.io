---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: algorithm_fenwick_tree
title: Fenwick tree leetcode 相關題目

# post specific
# if not specified, .name will be used from _data/owner/[language].yml
author:
# multiple category is not supported
category: Algorithm
# multiple tag entries are possible
tags: [Algorithm, Programming]
# thumbnail image for post
img: ":Algorithm/Algorithm.jpg"
# disable comments on this page
#comments_disable: true

# publish date
date: 2024-07-30 12:16:00 +0800
# seo
# if not specified, date will be used.
#meta_modify_date: 2022-02-10 08:11:06 +0900
# check the meta_common_description in _data/owner/[language].yml
#meta_description: ""

# optional
# please use the "image_viewer_on" below to enable image viewer for individual pages or posts (_posts/ or [language]/_posts folders).
# image viewer can be enabled or disabled for all posts using the "image_viewer_posts: true" setting in _data/conf/main.yml.
#image_viewer_on: true
# please use the "image_lazy_loader_on" below to enable image lazy loader for individual pages or posts (_posts/ or [language]/_posts folders).
# image lazy loader can be enabled or disabled for all posts using the "image_lazy_loader_posts: true" setting in _data/conf/main.yml.
#image_lazy_loader_on: true
# exclude from on site search
#on_site_search_exclude: true
# exclude from search engines
#search_engine_exclude: true
# to disable this page, simply set published: false or delete this file
#published: false
---

<!-- outline-start -->

Fenwick Tree 解題整理

<!-- outline-end -->

先來看看 2024 7/30 Leetcode 的每日題目 [1395. Count Number of Teams](https://leetcode.com/problems/count-number-of-teams)，這是一道 Medium 的題目。

## 題目 1395 敘述

<code>n</code> 名士兵站成一排。每個士兵都有一個獨一無二的評分 <code>rating</code>。

從中選出 <strong>3</strong> 個士兵組成一個作戰單位，規則如下：

- 從隊伍中選出 $index$ 分別為 <code>i</code>、<code>j</code>、<code>k</code> 的 3 名士兵，他們的評分分別為 <code>rating[i]</code>、<code>rating[j]</code>、<code>rating[k]</code>
- 作戰單位需滿足： <code>rating[i] < rating[j] < rating[k]</code> 或者 <code>rating[i] > rating[j] > rating[k]</code> ，其中 <code>0 <= i < j < k < n</code>

按上述條件返回組建的作戰單位的方案數。

說白了就是找出 3 個數一組<strong>嚴格遞增</strong>或<strong>嚴格遞減</strong>的組合數。

## 解法

選擇 $$ index $$ $$ i $$作為中間數，計算元素$$ rating[i] $$左邊<strong>小</strong>於它的個數$$ l $$與右邊<strong>大</strong>於它的個數$$ r $$；$$ l \times r $$，即為滿足<strong>嚴格遞增</strong>的結果。

而左邊<strong>大</strong>於$$ rating[i] $$的個數即為$$ (i - l) $$，右邊<strong>小</strong>於$$ rating[i] $$的個數即為$$ (n - i - 1 - r) $$，$$ (i - l) \times (n - i - 1 - r) $$即為滿足<strong>嚴格遞減</strong>的結果。

兩者再相加即為結果 $$ l \times r + (i - l) \times (n - i - 1 - r) $$。

#### 實作

#### C#

```C#
public class Solution
{
    public int NumTeams(int[] rating)
    {
        var n = rating.Length;
        var res = 0;
        for (var mid = 0; mid < n; ++mid)
        {
            var leftSmaller = 0;
            var rightLarger = 0;

            for (var left = mid - 1; left >= 0; --left)
            {
                if (rating[left] < rating[mid])
                {
                    leftSmaller++;
                }
            }

            for (var right = mid + 1; right < n; ++right)
            {
                if (rating[right] > rating[mid])
                {
                    rightLarger++;
                }
            }
            res += leftSmaller * rightLarger;

            var leftLarger = mid - leftSmaller;
            var rightSmaller = n - mid - 1 - rightLarger;

            res += leftLarger * rightSmaller;
        }
        return res;
    }
}
```

#### 分析

時間複雜度 $$ O(n^2) $$，對每個中間元素$$ rating[i] $$需要處理左邊跟右邊共$$ n - 1 $$個元素，總共處理$$ n \times (n - 1) $$次。

空間複雜度 $$ O(1) $$。

其中 $$ n $$ 為 $$ rating $$ 的長度。

那這道題目跟本文標題的 Fenwick Tree 有何關聯呢?

上面的解法看起來已經十分精煉了，但出題者的解答裡卻有一個更加美妙的方式，而要理解其作法需要先理解[315. Count of Smaller Numbers After Self](https://leetcode.com/problems/count-of-smaller-numbers-after-self/description/)，這是一道<strong>Hard</strong>的題目，一道 Medium 的題目為何需要先會解一道 Hard 的題目呢?那就先來看看這道 Hard 題目該如何解。

## 題目 315 敘述

給定一個整數數組 <code>nums</code>，返回一個整數數組 <code>counts</code>，其中 <code>counts[i]</code> 是在 <code>nums[i]</code> 右側的較小元素的數量。

## 思考

很簡單吧只要歷遍每個元素及其他之後的元素加到結果裡即可得到解了，但看下 Constraints $$ 1 <= nums.length <= 10^5 $$，很明顯 $$ O(n^2) $$ 的解法必定會超時。因此這裡就要使用上 Fenwick Tree 了。

## Fenwick Tree

Fenwick Tree 最常使用到的情況是<strong>計算陣列中的區間總和</strong>；下面給個例子

```
Input：arr = [2,5,3,4,1], range [[2, 3], [0, 2]]
Output：[ 7, 10 ]
Explanation：arr[2] + arr[3] = 7，arr[0] + arr[1] + arr[2] = 10。
```

一個常見的解法是先建立一個 Sum Array，再根據要計算總和的範圍直接得出結果。

```
arr =    [2, 5,  3,  4,  1]
       0  1  2   3   4   5
sum = [0, 2, 7, 10, 14, 15]
range [2, 3] = sum[4] - sum[2]
range [0, 2] = sum[3] - sum[0]
```

時間複雜度 $$ O(n + m) $$，建立<strong>sum</strong>所需時間為 $$ O(n) $$，每次找區間和為$$ O(1) $$，歷遍$$ range $$所需時間為 $$ O(m) $$。

空間複雜度 $$ O(n) $$。

其中 $$ n $$ 為 $$ arr $$ 的長度，$$ m $$ 為 $$ range $$ 的長度。

這樣看起來也頗快的啊?

但如果<strong>arr</strong>中的元素會一直更新，如[307. Range Sum Query - Mutable](https://leetcode.com/problems/range-sum-query-mutable/description/)，想想每次如果要更新<strong>arr</strong>中特定數量元素，那每次更新的耗時都是 $$ O(n) $$。

這時 Fenwick Tree 就可以發揮其作用。

Fenwick Tree 會建立一個長度為<strong>n + 1</strong>的陣列，這邊<strong>+ 1</strong>的目的是方便之後的 bit 操作；看下面的陣列範例這個 Tree 是怎麼建立的呢?

```
arr  = [   10, -4, 12,  7, 10,  4,  2,  9,  9,  4, 14, 13, 13, -5, 6]
tree = [0, 10,  6, 12, 25, 10, 14,  2, 50,  9, 13, 14, 40, 13,  8, 6]
```

- 將 index 第<strong>一</strong>位 1 元素的值直接搬進 Tree

![Fenwick Tree](:Algorithm/FenwickTree_Step001.png)

- 將 index 第<strong>二</strong>位 1 元素的與前 1 個元素相加後放進 Tree

![Fenwick Tree](:Algorithm/FenwickTree_Step002.png)

- 將 index 第<strong>三</strong>位 1 元素的與前 3 個元素相加後放進 Tree

![Fenwick Tree](:Algorithm/FenwickTree_Step003.png)

- 將 index 第<strong>四</strong>位 1 元素的與前 7 個元素相加後放進 Tree

![Fenwick Tree](:Algorithm/FenwickTree_Step004.png)
