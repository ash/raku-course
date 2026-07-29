---
title: 'Розв''язання: Типове значення контейнера'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
my $count is default(0);

say $count;
say $count.VAR.default;
```

🦋 Вихідний код можна знайти у файлі [container-default.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/introspection/container-default.raku).

## Вивід

```
0
0
```

## Коментарі

1. Трейт `is default(0)` дає контейнеру типове значення. Оскільки нічого не присвоєно, читання `$count` повертає це типове значення, тож перший рядок виводить `0`.

1. `.VAR.default` запитує в самого контейнера його оголошене типове значення, яке теж дорівнює `0`. Без цього трейта нетипізований контейнер мав би типовим значенням `(Any)`.

{% include nav.html %}
