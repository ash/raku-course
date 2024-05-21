---
title: Решение на 'Булеви таблици’
---

{% include menu.html %}

Ето една възможна програма, която отпечатва всички резултати от булеви операции.

## Код

```raku
say 'True && True е ', True && True; 
say 'True && False е ', True && False;
say 'False && True е ', False && True;
say 'False && False е ', False && False;

say 'True || True е ', True || True; 
say 'True || False е ', True || False;
say 'False || True е ', False || True;
say 'False || False е ', False || False;

say 'True ^^ True е ', True ^^ True; 
say 'True ^^ False е ', True ^^ False;
say 'False ^^ True е ', False ^^ True;
say 'False ^^ False е ', False ^^ False;
```

🦋 Можете да намерите пълния код във файла [tables.raku](https://github.com/ash/raku-course/blob/master/exercises/booleans/tables.raku).

## Резултат

Стартирайте програмата и тя ще отпечата следната таблица.

```console
$ raku tables.raku
True && True е True
True && False е False
False && True е False
False && False е False
True || True е True
True || False е True
False || True е True
False || False е False
True ^^ True е Nil
True ^^ False е True
False ^^ True е True
False ^^ False е False
```

## Коментари

Забележете, че поради по-високия приоритет на булевите операции, не е необходимо да ги поставяте в скоби. Това обаче не е така, ако използвате конкатенация на низове:

```raku
say 'True && True е ' ~ (True && True);
```

Алтернативно, можете да използвате [интерполация на код](/bg/essentials/strings/code-interpolation).

{% include nav.html %}