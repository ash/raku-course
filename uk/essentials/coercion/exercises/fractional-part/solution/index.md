---
title: 'Solution: Дробова частина'
---

{% include menu.html %}

Щоб отримати дробову частину числа, можна відняти цілу частину, яку можна отримати, перетворивши число на `Int`.

## Код

Можливе рішення показано нижче:

```raku
my $n = 15.8972;
say $n - $n.Int;
```

🦋 Знайдіть програму у файлі [fractional-part.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/coercion/fractional-part.raku).

## Вивід

```console
$ raku exercises/coercion/fractional-part.raku
0.8972
```

## Коментар

Спробуйте ту ж програму з від'ємними числами, наприклад:

```raku
my $n = -15.8972;
say $n - $n.Int;
```

У цьому випадку результат також має бути правильним:

```console
$ raku exercises/coercion/fractional-part.raku
-0.8972
```

{% include nav.html %}