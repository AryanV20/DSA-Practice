var link1 = document.getElementById('leftbutton1')
var link2 = document.getElementById('leftbutton2')
var link3 = document.getElementById('leftbutton3')
var link4 = document.getElementById('rightbutton1')
var link5 = document.getElementById('rightbutton2')

//list of questions
var questions1 = [
	"https://leetcode.com/problems/set-matrix-zeroes/",
	"https://leetcode.com/problems/pascals-triangle/",
	"https://leetcode.com/problems/next-permutation/",
	"https://leetcode.com/problems/maximum-subarray/",
	"https://leetcode.com/problems/sort-colors/",
	"https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
	"https://leetcode.com/problems/rotate-image/",
	"https://leetcode.com/problems/merge-intervals/",
	"https://leetcode.com/problems/merge-sorted-array/",
	"https://leetcode.com/problems/find-the-duplicate-number/",
    "https://www.interviewbit.com/problems/repeat-and-missing-number-array/",
    "https://www.codingninjas.com/codestudio/problems/count-inversions_615",
    "https://leetcode.com/problems/reverse-linked-list/",
    "https://leetcode.com/problems/middle-of-the-linked-list/",
    "https://leetcode.com/problems/merge-two-sorted-lists/",
    "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
    "https://leetcode.com/problems/add-two-numbers/",
    "https://leetcode.com/problems/delete-node-in-a-linked-list/",
    "https://leetcode.com/problems/palindrome-linked-list/",
    "https://leetcode.com/problems/linked-list-cycle/",
    "https://leetcode.com/problems/intersection-of-two-linked-lists/",
    "https://leetcode.com/problems/reverse-nodes-in-k-group/",
    "https://leetcode.com/problems/linked-list-cycle-ii/",
    "https://practice.geeksforgeeks.org/problems/flattening-a-linked-list/1",
    "https://leetcode.com/problems/single-element-in-a-sorted-array/",
    "https://leetcode.com/problems/search-in-rotated-sorted-array/",
    "https://leetcode.com/problems/median-of-two-sorted-arrays/",
    "https://www.geeksforgeeks.org/searching-array-adjacent-differ-k/",
    "https://www.geeksforgeeks.org/permute-two-arrays-sum-every-pair-greater-equal-k/",
    "https://www.geeksforgeeks.org/find-common-elements-three-sorted-arrays/"
    
];

var questions2 = [
	"https://leetcode.com/problems/reverse-words-in-a-string/",
	"https://leetcode.com/problems/longest-palindromic-substring/",
	"https://leetcode.com/problems/roman-to-integer/",
	"https://leetcode.com/problems/string-to-integer-atoi/",
	"https://leetcode.com/problems/longest-common-prefix/",
	"https://leetcode.com/problems/repeated-string-match/discuss/416144/Rabin-Karp-algorithm-C%2B%2B-implementation",
	"https://www.codingninjas.com/codestudio/problems/stack-implementation-using-array_3210209",
	"https://bit.ly/3KbIjIW",
	"https://leetcode.com/problems/implement-stack-using-queues/",
	"https://leetcode.com/problems/implement-queue-using-stacks/",
    "https://leetcode.com/problems/valid-parentheses/",
    "https://leetcode.com/problems/next-greater-element-ii/description/",
    "https://bit.ly/3nptF7k",
    "https://leetcode.com/problems/binary-tree-inorder-traversal/",
    "https://leetcode.com/problems/binary-tree-preorder-traversal/",
    "https://leetcode.com/problems/binary-tree-postorder-traversal/",
    "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
    "https://leetcode.com/problems/diameter-of-binary-tree/",
    "https://leetcode.com/problems/balanced-binary-tree/",
    "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/",
    "https://leetcode.com/problems/boundary-of-binary-tree/#",
    "https://leetcode.com/problems/populating-next-right-pointers-in-each-node/",
    "https://leetcode.com/problems/search-in-a-binary-search-tree/",
    "https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/",
    "https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/",
    "https://leetcode.com/problems/validate-binary-search-tree/",
    "https://practice.geeksforgeeks.org/problems/predecessor-and-successor/1",
    "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/",
    "https://practice.geeksforgeeks.org/problems/k-th-element-of-two-sorted-array1317/1",
    "https://bit.ly/3rj7Ib1"
];

var questions3 = [
	"https://leetcode.com/problems/permutations/",
	"https://practice.geeksforgeeks.org/problems/subset-sums2234/1",
	"https://leetcode.com/problems/subsets-ii/",
	"https://leetcode.com/problems/combination-sum/",
	"https://leetcode.com/problems/combination-sum-ii/",
	"https://leetcode.com/problems/palindrome-partitioning/",
	"https://leetcode.com/problems/permutation-sequence/",
	"https://practice.geeksforgeeks.org/problems/n-meetings-in-one-room-1587115620/1",
	"https://practice.geeksforgeeks.org/problems/minimum-platforms-1587115620/1#",
	"https://leetcode.com/problems/kth-largest-element-in-an-array/",
    "https://www.codingninjas.com/codestudio/problems/min-heap_4691801?topList=striver-sde-sheet-problems&utm_source=striver&utm_medium=website",
    "https://www.interviewbit.com/problems/maximum-sum-combinations/",
    "https://practice.geeksforgeeks.org/problems/left-view-of-binary-tree/1",
    "https://practice.geeksforgeeks.org/problems/bottom-view-of-binary-tree/1",
    "https://practice.geeksforgeeks.org/problems/top-view-of-binary-tree/1",
    "https://practice.geeksforgeeks.org/problems/bit-difference/0",
    "https://practice.geeksforgeeks.org/problems/finding-the-numbers0215/1",
    "https://www.geeksforgeeks.org/sort-a-linked-list-of-0s-1s-or-2s/",
    "https://www.geeksforgeeks.org/remove-duplicates-from-an-unsorted-linked-list/",
    "https://leetcode.com/problems/valid-parentheses/",
    "https://www.geeksforgeeks.org/convert-sentence-equivalent-mobile-numeric-keypad-sequence/",
    "https://practice.geeksforgeeks.org/problems/kadanes-algorithm/0",
    "https://practice.geeksforgeeks.org/problems/minimum-number-of-jumps/0",
    "https://practice.geeksforgeeks.org/problems/row-with-max-1s0023/1",
    "https://www.geeksforgeeks.org/binary-search-tree-set-1-search-and-insertion/",
    "https://leetcode.com/problems/delete-node-in-a-bst/",
    "https://practice.geeksforgeeks.org/problems/minimum-element-in-bst/1",
    "https://www.geeksforgeeks.org/create-a-mirror-tree-from-the-given-binary-tree/",
    "https://practice.geeksforgeeks.org/problems/reverse-level-order-traversal/1",
    "https://practice.geeksforgeeks.org/problems/binary-tree-to-dll/1"
];

var questions4 = [
	"https://leetcode.com/problems/search-a-2d-matrix/",
	"https://leetcode.com/problems/powx-n/",
	"https://leetcode.com/problems/majority-element/",
	"https://leetcode.com/problems/majority-element-ii/",
	"https://leetcode.com/problems/unique-paths/",
	"https://leetcode.com/problems/reverse-pairs/",
	"https://leetcode.com/problems/rotate-list/description/",
	"https://leetcode.com/problems/3sum/",
	"https://leetcode.com/problems/trapping-rain-water/",
	"https://leetcode.com/problems/copy-list-with-random-pointer/",
    "https://www.interviewbit.com/problems/matrix-median/",
	"https://www.interviewbit.com/problems/allocate-books/",
	"https://www.spoj.com/problems/AGGRCOW/",
	"https://leetcode.com/problems/valid-anagram/",
	"https://www.interviewbit.com/problems/minimum-characters-required-to-make-a-string-palindromic/",
	"https://leetcode.com/problems/implement-strstr/",
	"https://leetcode.com/problems/count-and-say/",
	"https://leetcode.com/problems/compare-version-numbers/",
	"https://www.interviewbit.com/problems/nearest-smaller-element/",
	"https://leetcode.com/problems/lru-cache/",
    "https://leetcode.com/problems/min-stack/",
	"https://leetcode.com/problems/sliding-window-maximum/",
	"https://www.geeksforgeeks.org/merge-two-sorted-arrays-o1-extra-space/",
	"https://www.geeksforgeeks.org/find-duplicates-in-on-time-and-constant-extra-space/",
	"https://www.geeksforgeeks.org/check-reversing-sub-array-make-array-sorted/",
	"https://www.geeksforgeeks.org/make-array-elements-equal-minimum-cost/",
	"https://www.geeksforgeeks.org/a-product-array-puzzle/",
	"https://www.geeksforgeeks.org/count-triplets-with-sum-smaller-that-a-given-value/",
	"https://www.geeksforgeeks.org/maximum-sum-such-that-no-two-elements-are-adjacent/",
	"https://www.geeksforgeeks.org/majority-element/"
];

var questions5 = [
	"https://leetcode.com/problems/binary-tree-inorder-traversal/",
	"https://bit.ly/3rlXpTX",
	"https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/",
	"https://www.interviewbit.com/problems/path-to-given-node/",
	"https://leetcode.com/problems/maximum-width-of-binary-tree/",
	"https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/",
	"https://practice.geeksforgeeks.org/problems/mirror-tree/1",
	"https://leetcode.com/problems/flatten-binary-tree-to-linked-list/",
	"https://leetcode.com/problems/binary-tree-maximum-path-sum/",
	"https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",
    "https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/",
	"https://leetcode.com/problems/symmetric-tree/",
	"https://www.codingninjas.com/codestudio/problems/ceil-from-bst_920464?source=youtube&campaign=Striver_Tree_Videos&utm_source=youtube&utm_medium=affiliate&utm_campaign=Striver_Tree_Videos",
	"https://www.codingninjas.com/codestudio/problems/floor-from-bst_920457?source=youtube&campaign=Striver_Tree_Videos&utm_source=youtube&utm_medium=affiliate&utm_campaign=Striver_Tree_Videos",
	"https://leetcode.com/problems/kth-smallest-element-in-a-bst/",
	"https://practice.geeksforgeeks.org/problems/kth-largest-element-in-bst/1",
	"https://leetcode.com/problems/two-sum-iv-input-is-a-bst/",
	"https://leetcode.com/problems/n-queens/",
	"https://leetcode.com/problems/sudoku-solver/",
	"https://practice.geeksforgeeks.org/problems/m-coloring-problem-1587115620/1#",
    "https://practice.geeksforgeeks.org/problems/rat-in-a-maze-problem/1",
	"https://www.codingninjas.com/codestudio/problems/merge-k-sorted-arrays_975379",
	"https://leetcode.com/problems/top-k-frequent-elements/",
	"https://leetcode.com/problems/find-median-from-data-stream/",
	"https://www.geeksforgeeks.org/find-minimum-number-of-coins-that-make-a-change/",
	"https://practice.geeksforgeeks.org/problems/fractional-knapsack-1587115620/1",
	"https://practice.geeksforgeeks.org/problems/n-meetings-in-one-room-1587115620/1",
	"https://leetcode.com/problems/longest-substring-without-repeating-characters/",
	"https://www.interviewbit.com/problems/subarray-with-given-xor/",
	"https://leetcode.com/problems/4sum/"
];



var today = new Date();

// Use the date to generate a random index for the question
var index1 = today.getDate() % questions1.length;
var index2 = today.getDate() % questions2.length;
var index3 = today.getDate() % questions3.length;
var index4 = today.getDate() % questions4.length;
var index5 = today.getDate() % questions5.length;

// Display the question on the webpage

link1.href = questions1[index1];
link2.href = questions2[index2];
link3.href = questions3[index3];
link4.href = questions4[index4];
link5.href = questions5[index5];
