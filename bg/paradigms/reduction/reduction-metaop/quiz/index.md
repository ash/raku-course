---
title: 'Тест — Метаоператорът за свиване'
translations_gpt:
---

{% include menu.html %}

Какво отпечатва следната програма?

```raku
say [min] 8, 3, 5, 1;
```

{:.quiz}
0 | 17
1 | 1
0 | 8
0 | 3

{% include quiz.html %}

<div class="extended-explanation">

`[min]` свива списъка с оператора `min`, сравнявайки елементите по двойки и запазвайки най-малкия. Най-малкото от `8, 3, 5, 1` е `1`.

</div>

{% include nav.html %}
