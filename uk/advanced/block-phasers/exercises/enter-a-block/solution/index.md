---
title: 'Solution: Вхід у блок'
translations_gpt: true
---

{% include menu.html %}

Ось можливий розв'язок завдання.

## Код

```raku
for 1..2 {
    ENTER say '--entering';
    say "body $_";
}
```

🦋 Вихідний код можна знайти у файлі [enter-a-block.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/block-phasers/enter-a-block.raku).

## Вивід

```
--entering
body 1
--entering
body 2
```

## Коментарі

1. `ENTER` запускається щоразу, коли входять у блок, безпосередньо перед його тілом. Оскільки цикл входить у своє тіло один раз на кожну ітерацію, `--entering` друкується перед кожним рядком `body`.

1. У цьому полягає різниця між `ENTER` та `FIRST`: `FIRST` запустився б лише один раз для всього циклу, тоді як `ENTER` запускається при кожному вході.

{% include nav.html %}
