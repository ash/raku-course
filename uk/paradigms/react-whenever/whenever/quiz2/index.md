---
title: 'Тест — whenever і done'
translations_gpt:
---

{% include menu.html %}

Що надрукує наступна програма?

```raku
my @out;

react {
    whenever Supply.from-list(1, 2, 3) {
        @out.push($_);
        done if $_ == 2;
    }
    whenever Supply.from-list(10, 20) {
        @out.push($_);
    }
}

say @out;
```

{:.quiz}
1 | [1 2]
0 | [1 2 10 20]
0 | [1 2 3 10 20]
0 | [10 20]

{% include quiz.html %}

<div class="extended-explanation">

Перший `whenever` кладе `1`, потім `2` — і на `2` викликає `done`. Вирішальний момент у тому, що `done` завершує **увесь блок `react`**, а не лише свій `whenever`: решту першого потоку (`3`) і *весь другий потік* (`10, 20`) відтято ще до доставляння. Тож `@out` містить самі `[1 2]`. Якби `done` глушив лише власний струмінь, ви побачили б `[1 2 10 20]` — але один `done` спиняє всі реакції одразу.

</div>

{% include nav.html %}
