---
title: 'Тест — whenever'
translations_gpt:
---

{% include menu.html %}

Що надрукує наступна програма?

```raku
my @out;

react {
    whenever Supply.from-list(1, 2, 3) {
        @out.push($_ * 2);
    }
}

say @out;
```

{:.quiz}
0 | [1 2 3]
1 | [2 4 6]
0 | [6]
0 | 12

{% include quiz.html %}

<div class="extended-explanation">

Тіло `whenever` виконується для кожного значення, кладучи туди його подвоєння. Потік видає `1, 2, 3`, тож `@out` збирає `2, 4, 6`.

</div>

{% include nav.html %}
