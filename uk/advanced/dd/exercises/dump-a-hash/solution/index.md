---
title: 'Розв''язання: Вивести дамп хеша'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
my %h = beta => 2, alpha => 1;
dd %h;
```

🦋 Вихідний код можна знайти у файлі [dump-a-hash.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/dd/dump-a-hash.raku).

## Вивід

```
{:alpha(1), :beta(2)}
```

## Коментарі

1. `dd` виводить хеш у формі, схожій на код, де кожна пара має вигляд `:ключ(значення)`.

1. Ключі виходять у відсортованому порядку — `alpha` перед `beta`, — хоча `beta` було записано першим.

{% include nav.html %}
