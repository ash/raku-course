---
title: 'Розв''язання: Додайте два аргументи'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
sub MAIN($a, $b) {
    say $a + $b;
}
```

🦋 Вихідний код можна знайти у файлі [two-arguments.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/more-on-main/two-arguments.raku).

## Вивід

```console
$ raku two-arguments.raku 2 3
5
```

## Коментарі

1. Два позиційні параметри отримують два слова з командного рядка.

1. Аргументи командного рядка надходять як рядки, але оператор `+` перетворює їх на числа, тож `2` та `3` дають у сумі `5`.

{% include nav.html %}
