---
title: 'Розв''язання: Спільні елементи'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
my $a = set(<apple banana cherry>);
my $b = set(<banana cherry date>);

my $common = $a ∩ $b;
say $common.elems;
say 'apple' ∈ $common;
```

🦋 Вихідний код можна знайти у файлі [common-elements.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/sets-bags-mixes/common-elements.raku).

## Вивід

```
2
False
```

## Коментарі

1. Переріз `$a ∩ $b` сам є множиною — тут `{banana, cherry}`, — тож він має `2` елементи. Якщо вам більше до вподоби ASCII, пишіть `(&)` замість `∩`.

1. Оскільки переріз є множиною, їй можна поставити запитання про належність через `∈`. `apple` є лише в першій множині, тож у перерізі його немає, і перевірка повертає `False`.

{% include nav.html %}
