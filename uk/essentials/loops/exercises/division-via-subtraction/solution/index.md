---
title: 'Solution: Ділення через віднімання'
---

{% include menu.html %}

Ділення — це повторне віднімання. Програма має цикл `while`, який зменшує `$a` на значення `$b` і повторює це, поки поточне значення `$a` не стане меншим за `$b`. Змінна `$n` рахує кількість ітерацій, і це також є результатом, який нам потрібен.

## Код

Ось повна програма:

```raku
my $a = 175;
my $b = 25;

my $n = 0;
while $a >= $b {
    $a -= $b;
    $n++;
}

say $n;
```

🦋 Знайдіть програму у файлі [division-via-subtraction.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/loops/division-via-subtraction.raku).

## Вивід

Запустіть програму кілька разів. Почніть з наданих значень, які дають точне ціле число:

```console
$ raku exercises/loops/division-via-subtraction.raku
7
```

Також спробуйте, наприклад, змінити `$b` на `20` і переконайтеся, що результат правильний:

```console
$ raku exercises/loops/division-via-subtraction.raku
8
```

{% include nav.html %}