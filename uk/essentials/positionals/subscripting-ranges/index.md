---
title: Підписка діапазонів
---

{% include menu.html %}

`Range` є позиційним типом даних. Як і в масивах, ви можете отримати доступ до його окремих елементів.

Наприклад, ось як ви можете вивести третій елемент у послідовності елементів, яку генерує діапазон:

```raku
my $r = 10..20;
say $r[3]; # 13
```

Важливо розуміти, що діапазони, на відміну від масивів, не обов'язково зберігають усі значення в пам'яті.

## Розмір

Щоб отримати розмір діапазону, використовуйте метод `elems`, як і з масивами.

```raku
my $r = 10..20;
say $r.elems; # 11
```

{% include nav.html %}