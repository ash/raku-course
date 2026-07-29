---
title: 'Розв''язання: Зберіть URL'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
my @parts = <http :// example .com>;

my $url = [~] @parts;
say $url;
say $url.chars;
```

🦋 Вихідний код можна знайти у файлі [concatenate-a-list.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/metaoperators/concatenate-a-list.raku).

## Вивід

```
http://example.com
18
```

## Коментарі

1. Масив записано за допомогою лапок із кутових дужок `<...>`, що рівносильно запису `'http', '://', 'example', '.com'`.

1. Метаоператор згортки `[~]` ставить оператор конкатенації рядків `~` між усіма елементами, тож `[~] @parts` склеює чотири частини в один рядок `http://example.com`.

1. Збереження результату в `$url` дозволяє використати його повторно: `$url.chars` далі повідомляє, що зібраний URL має довжину `18` символів.

{% include nav.html %}
