for i = 1: n,
  swapped = false
for j = n: i + 1,
        if a[j] < a[j - 1],
  swap a[j, j - 1]
swapped = true
→ invariant: a[1..i] in final position
break if not swapped
end