---
title: 'Розв''язання: Занотуйте попередження'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
my $value = -3;

note 'Warning: the value is negative' if $value < 0;
say $value.abs;
```

🦋 Вихідний код можна знайти у файлі [note-a-warning.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/standard-streams/note-a-warning.raku).

## Вивід

```
Warning: the value is negative
3
```

## Коментарі

1. `note` надсилає попередження до стандартного потоку помилок, і лише тоді, коли значення справді від'ємне. `say` надсилає справжній результат — абсолютне значення `3` — до стандартного виводу.

1. Тримання діагностики у стандартному потоці помилок означає, що вона не забруднює справжнього виводу програми: відкидання стандартного потоку помилок через `2>/dev/null` лишає позаду саму лише `3`.

{% include nav.html %}
