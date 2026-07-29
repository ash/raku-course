---
title: 'Розв''язання: Зіставлення за типом'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
my $value = 3.14;

given $value {
    when Int { say 'integer' }
    when Rat { say 'rational' }
    when Str { say 'string' }
}
```

🦋 Вихідний код можна знайти у файлі [match-by-type.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/given-when/match-by-type.raku).

## Вивід

```
rational
```

## Коментарі

1. Коли значенням для зіставлення є тип, розумне зіставлення запитує, чи *належить топік до цього типу*. `3.14` не є `Int`, тож перший `when` пропускається.

1. Десятковий літерал на кшталт `3.14` у Raku є `Rat` (раціональним числом), тож другий `when` збігається, і програма виводить `rational`.

{% include nav.html %}
