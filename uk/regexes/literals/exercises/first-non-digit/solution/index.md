---
title: 'Розв''язання: Перший нецифровий символ'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
say '42abc' ~~ /\D/;
```

🦋 Вихідний код можна знайти у файлі [first-non-digit.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/literals/first-non-digit.raku).

## Вивід

```
｢a｣
```

## Коментарі

1. `\D` є протилежністю `\d`: він збігається з будь-яким символом, що не є цифрою.

1. Перші два символи є цифрами, тож збіг починається з `a`.

{% include nav.html %}
