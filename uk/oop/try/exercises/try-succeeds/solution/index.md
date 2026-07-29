---
title: 'Розв''язання: Коли нічого не йде не так'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
my $r = try { 21 * 2 };

say $r.defined;
say $r;
```

🦋 Вихідний код можна знайти у файлі [try-succeeds.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/try/try-succeeds.raku).

## Вивід

```
True
42
```

## Коментарі

1. Коли блок `try` виконується без винятку, він просто обчислюється у значення блоку.

1. Тож `$r` містить `42`, а `$r.defined` дає `True`.

{% include nav.html %}
