---
title: 'Тест — gather і take'
translations_gpt:
---

{% include menu.html %}

Що надрукує наступна програма?

```raku
my @a = gather {
    for 1..5 {
        take $_ if $_ > 3;
    }
}

say @a;
```

{:.quiz}
0 | [1 2 3 4 5]
1 | [4 5]
0 | [1 2 3]
0 | [3 4 5]

{% include quiz.html %}

<div class="extended-explanation">

`take` виконується лише тоді, коли `$_ > 3`, тож до списку додаються самі `4` та `5`. Усе решта пропускається, і виходить `[4 5]`.

</div>

{% include nav.html %}
