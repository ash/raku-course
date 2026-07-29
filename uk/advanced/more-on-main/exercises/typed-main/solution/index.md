---
title: 'Розв''язання: Типізований MAIN'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
sub MAIN(Int $n) {
    say $n * 2;
}
```

🦋 Вихідний код можна знайти у файлі [typed-main.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/more-on-main/typed-main.raku).

## Вивід

```console
$ raku typed-main.raku 5
10

$ raku typed-main.raku abc
Usage:
  typed-main.raku <n>
```

## Коментарі

1. Обмеження `Int` означає, що слово з командного рядка має виглядати як ціле число. Отримавши `5`, воно зв'язується з `$n`, і тіло виводить `10`.

1. Отримавши `abc`, значення не може стати `Int`, тож сигнатура не збігається. Raku не виконує тіла — він натомість виводить згенероване повідомлення про використання, даючи вам перевірку аргументів без жодних ручних перевірок.

{% include nav.html %}
