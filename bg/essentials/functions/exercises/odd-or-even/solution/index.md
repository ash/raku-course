---
title: 'Solution: Нечетно или четно'
---

{% include menu.html %}

Тялото на функцията е доста малко, което е валидна причина да се пропуснат както рутината `return`, така и точката и запетаята в края на реда.

## Код

Ето решението:

```raku
sub f($n) {
    $n %% 2 ?? 'Even' !! 'Odd'
}

say f(10);
say f(5);
say f(0);
say f(3);
```

🦋 Намерете програмата във файла [odd-or-even.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/functions/odd-or-even.raku).

## Изход

```console
$ raku exercises/functions/odd-or-even.raku
Even
Odd
Even
Odd
```

{% include nav.html %}