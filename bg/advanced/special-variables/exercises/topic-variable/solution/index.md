---
title: 'Solution: Тематичната променлива'
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
for 'apple', 'fig', 'cherry' {
    say "$_ has {.chars} letters";
}
```

🦋 Можете да намерите пълния код във файла [topic-variable.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/special-variables/topic-variable.raku).

## Резултат

```
apple has 5 letters
fig has 3 letters
cherry has 6 letters
```

## Коментари

1. Цикълът `for` задава тематичната променлива `$_` на всеки елемент последователно, така че блокът се изпълнява три пъти, като `$_` е равна на `'apple'`, после `'fig'`, после `'cherry'`.

1. Вътре в низа `$_` интерполира текущата дума, а извикването с водеща точка `.chars` — съкратено от `$_.chars` — дава нейната дължина. И двете се отнасят до една и съща тема, затова броят винаги съответства на думата на реда.

{% include nav.html %}
