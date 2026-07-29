---
title: 'Тест — whenever и done'
translations_gpt:
---

{% include menu.html %}

Что выведет следующая программа?

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

Первый `whenever` добавляет `1`, затем `2` — и на `2` вызывает `done`. Принципиально важно, что
`done` завершает **весь блок `react`**, а не только свой `whenever`: остаток первого supply (`3`)
и *весь второй supply* (`10, 20`) отсекаются, так и не будучи доставленными. Поэтому в `@out`
остаётся лишь `[1 2]`. Если бы `done` заглушал только собственный поток, вы увидели бы
`[1 2 10 20]`, — но один `done` останавливает сразу все реакции.

</div>

{% include nav.html %}
