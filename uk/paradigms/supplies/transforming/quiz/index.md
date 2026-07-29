---
title: 'Тест — Перетворення потоку значень'
translations_gpt:
---

{% include menu.html %}

Що надрукує наступна програма?

```raku
my @out;
Supply.from-list(1, 2, 3).map(* ** 2).tap(-> $v { @out.push($v) });
say @out;
```

{:.quiz}
0 | [1 2 3]
1 | [1 4 9]
0 | [2 4 6]
0 | 14

{% include quiz.html %}

<div class="extended-explanation">

`map(* ** 2)` дає новий потік, що підносить кожне значення до квадрата. Підключення збирає `1, 4, 9` у `@out`.

</div>

{% include nav.html %}
