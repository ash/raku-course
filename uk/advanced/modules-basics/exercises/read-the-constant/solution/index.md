---
title: 'Розв''язання: Прочитайте сталу'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

Програма `read-pi.raku`:

```raku
need Circle;

say $Circle::pi;
```

🦋 Обидва файли з вихідним кодом можна знайти в каталозі [exercises/advanced/modules-basics/read-the-constant](https://github.com/ash/raku-course/tree/master/exercises/advanced/modules-basics/read-the-constant).

## Вивід

```console
$ raku -I. read-pi.raku
3.14
```

## Коментарі

1. `need Circle` завантажує модуль, але не імпортує жодних імен, тож голий `$pi` не був би розпізнаний.

1. До змінної `our` дістаються через ім'я модуля, записане як `$Circle::pi`.

{% include nav.html %}
