---
title: Nested arrays
---

{% include menu.html %}

Arrays can contain any other data, including other arrays. To delimit the borders of the nested arrays, use square brackets:

```raku
my @table = 
    [1, 2, 3, 4],
    [10, 20, 30, 40],
    [100, 200, 300, 400];
```

It is also possible to have one more pair of brackets for the top-level array. The next example shows the same data structure as before.

```raku
my @table = [
    [1, 2, 3, 4],
    [10, 20, 30, 40],
    [100, 200, 300, 400]
];
```

To access inner items, add as many indices as needed. A single pair of square brackets goes down one level deeper into the structure:

```raku
say @table[0][3]; # Prints 4
say @table[2][1]; # Prints 200 
```


{% include nav.html %}
