---
title: 'Quiz — Supplies'
---

{% include menu.html %}

What does the following program print?

```raku
my $out = '';
Supply.from-list('a', 'b', 'c').tap(-> $v { $out ~= $v.uc });
say $out;
```

{:.quiz}
1 | ABC
0 | abc
0 | a b c
0 | C

{% include quiz.html %}

<div class="extended-explanation">

The tap runs once for every value the supply emits. Each time, it upper-cases the value and appends it to `$out`, so `a`, `b`, `c` become `A`, `B`, `C`, joined into `ABC`. The block reacts to the whole stream, not just the last value — which is why the answer is not simply `C`.

</div>

{% include nav.html %}
