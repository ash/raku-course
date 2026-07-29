---
title: 'Тест — react'
translations_gpt:
---

{% include menu.html %}

Що надрукує наступна програма?

```raku
my @got;

react {
    whenever Supply.from-list(1, 2, 3, 4, 5) {
        @got.push($_);
        done if $_ == 3;
    }
}

say @got;
```

{:.quiz}
1 | [1 2 3]
0 | [1 2 3 4 5]
0 | [3]
0 | [4 5]

{% include quiz.html %}

<div class="extended-explanation">

Тіло `whenever` збирає кожне значення, але викликає `done`, щойно побачить `3`. `done` закриває блок `react`, тож потік полишають, і `4` та `5` ніколи не обробляються, а лишається `[1 2 3]`.

</div>

{% include nav.html %}
