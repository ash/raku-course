---
title: The solution of ’A whole word‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
say 'this is fine' ~~ /<< is >>/;
```

🦋 You can find the source code in the file [whole-word.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/anchors/whole-word.raku).

## Output

```
｢is｣
```

## Comments

1. The `<<` and `>>` anchors require a word boundary on each side of `is`.

1. The letters `is` also sit inside `this`, but there they have no word boundary on the left, so the engine skips that occurrence and matches the standalone word `is` instead.

1. Both candidates print the same `｢is｣`, so how do you know which one actually matched? Change the `is` hidden inside `this` — for example, turn the string into `'thus is fine'`. The output is still `｢is｣`, unchanged, proving that occurrence was never the match. Now change the standalone word instead (say, `'this it fine'`) and the match disappears (`Nil`). You can also ask the match where it starts: `('this is fine' ~~ /<< is >>/).from` returns `5`, the position of the standalone `is`, not `2`.

{% include nav.html %}
