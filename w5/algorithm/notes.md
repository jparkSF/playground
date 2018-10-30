- Given an array of length N, with integer values between 0 and N (not including 0 or N), return any integer that appears in the array more than once, i.e.

<code>[ 1, 2, 3, 3, 4 ] => 3</code>

<code>[ 3, 1, 2, 2, 5, 5 ] => 2 or 5 (either is fine)</code>

<code>[ 0, 1, 2 ] => invalid input (can’t have 0) </code>

- For each number (K), multiply the value at index K by -1. If the value at that index is already negative, that is the duplicate value.


<code>[ 3, 1, 1, 2 ] => [ 3, 1, 1, -2 ]</code>

<code>[ 3, 1, 1, -2 ] => [ 3, -1, 1, -2 ]</code>

<code>[ 3, -1, 1, -2 ] => [ 3, -1, 1, -2 ] => return 1</code>