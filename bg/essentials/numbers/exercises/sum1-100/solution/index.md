---
title: 'Solution: Сума на числа от 1 до 100'
---

{% include menu.html %}

За да изчислите сумата на целите числа от 1 до 100, разбира се, е възможно да добавите всички тези числа в едно дълго изразяване. Или да създадете цикъл (ще разгледаме цикли в следващите секции). Но най-доброто решение е да използвате добре познатата [формула](https://en.wikipedia.org/wiki/1_%2B_2_%2B_3_%2B_4_%2B_⋯):

<div class="formula"><img src="sum.png" style="height: 3.5em; width: auto" /></div>

С формулата решението става доста тривиално.

## Код

```raku
my $N = 100;
my $sum = $N * (1 + $N) / 2;
say "Сумата на числата от 1 до $N е $sum.";
```

🦋 Можете да намерите пълния код във файла [sum1-100.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/numbers/sum1-100.raku).

## Резултат

```console
$ raku exercises/numbers/sum1-100.raku 
Сумата на числата от 1 до 100 е 5050.
```

{% include nav.html %}