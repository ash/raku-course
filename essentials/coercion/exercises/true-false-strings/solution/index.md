---
title: Solution of ‘True and False strings’
---

{% include menu.html %}

This exercise is similar to [the previous one](../../true-false-numbers), but this time, the task is a bit trickier. There are more ’suspect’ strings that can be treated as `False`. Let us explore them.

```raku
say ?'';

say ?' ';
say ?'        ';

say ?"\n";

say ?'0';
say ?'0.0';
```

From all of these, only the empty string is cast as `False`. All other strings, even those that contain only spaces or an explicit character `0`, become `True`.

🦋 You can find the full program with the above example in the file [true-false-strings.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/coercion/true-false-strings.raku).

{% include nav.html %}
