---
title: The solution of ’Dump the data structure‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my @data = 'Raku', [1, 2, 3], (key => 'value');

dd @data;
say "Structure: { @data.raku }";
```

🦋 You can find the source code in the file [dump-the-structure.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/dd/dump-the-structure.raku).

## Output

```
["Raku", [1, 2, 3], :key("value")]
Structure: ["Raku", [1, 2, 3], :key("value")]
```

## Comments

1. `dd @data` prints a code-like representation of the contents of the array. It goes to the standard error stream.

1. The `.raku` method returns the same representation as a string, which is then embedded into a normal message using code interpolation and printed with `say` to the standard output.

1. The two lines look the same here, but they travel through different output streams: the first comes from `dd` (standard error), the second from `say` (standard output). Compare the following:

```console
$ raku t.raku > /dev/null
["Raku", [1, 2, 3], :key("value")]

$ raku t.raku 2&> /dev/null
Structure: ["Raku", [1, 2, 3], :key("value")]
```

{% include nav.html %}
