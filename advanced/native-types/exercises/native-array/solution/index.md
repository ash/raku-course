---
title: The solution of ’A native array‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my uint8 @bytes = 100, 200, 255;
say @bytes.sum;
```

🦋 You can find the source code in the file [native-array.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/native-types/native-array.raku).

## Output

```
555
```

## Comments

1. Putting the sized native type `uint8` before the `@` array declares an array where every element is stored as a single unsigned byte — the compact layout that suits binary data.

1. The wrap-around limit applies to each *element* (`0..255`), not to the result of summing them. `.sum` boxes the total into an ordinary `Int`, so `100 + 200 + 255` gives the full `555`.

{% include nav.html %}
