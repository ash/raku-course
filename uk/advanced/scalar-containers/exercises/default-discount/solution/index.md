---
title: 'Розв''язання: Типова знижка'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
my $discount is default(0);
say $discount;

$discount = 15;
say $discount;
```

🦋 Вихідний код можна знайти у файлі [default-discount.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/scalar-containers/default-discount.raku).

Звісно, простішим розв'язанням було б безпосередньо ініціалізувати змінну нулем:

```raku
my $discount = 0;
say $discount;

$discount = 15;
say $discount;
```

## Вивід

```
0
15
```

## Коментарі

1. Трейт `is default(0)` дає контейнеру значення, до якого можна вдатися, доки йому нічого не присвоєно. Читання змінної повертає `0`, і, на відміну від неоголошеного типового значення, це не породжує попередження про _uninitialized value_.

1. Після присвоєння контейнер містить `15`, і типове значення більше не відіграє жодної ролі.

{% include nav.html %}
