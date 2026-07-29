---
title: 'Тест — Потоки значень'
translations_gpt:
---

{% include menu.html %}

Що надрукує наступна програма?

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

Підключення виконується на кожне значення, яке видає потік. Щоразу воно переводить значення у верхній регістр і дописує до `$out`, тож `a`, `b`, `c` стають `A`, `B`, `C` й зливаються в `ABC`. Блок реагує на весь потік, а не лише на останнє значення, — саме тому відповіддю є не просто `C`.

</div>

{% include nav.html %}
