---
title: 'Solution: Размяна на стойности'
---

{% include menu.html %}

В тази програма използваме елементи от синтаксиса на Raku от секцията за [скаларни променливи](/bg/essentials/scalar-variables).

## Код

```raku
my ($a, $b) = 10, 20;
($a, $b) = $b, $a;
say "$a, $b";
```

🦋 Можете да намерите изходния код във файла [swap.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/scalar-variables/swap.raku).

## Изход

Стартирайте програмата и потвърдете, че тя отпечатва стойностите в различен ред.

```console
$ raku exercises/scalar-variables/swap.raku
20, 10
```

## Коментари

Всички стъпки на тази програма (създаване на променлива и присвояване на стойности, размяна на стойностите и отпечатване) използват и двете променливи в една и съща конструкция. Най-интересното тук е начинът, по който променливите разменят своите стойности:

```raku
($a, $b) = $b, $a;
```

Обърнете внимание, че трябва да използвате скоби от лявата страна, но можете да ги добавите и от дясната страна:

```raku
($a, $b) = ($b, $a);
```

Какво се случва, ако пропуснете скобите?

```raku
$a, $b = $b, $a;
```

В този случай ще получите предупреждение, че `$a` от дясната страна не се използва:

```
$ raku exercises/scalar-variables/swap.raku
WARNINGS for /Users/ash/raku-course/exercises/scalar-variables/swap.raku:
Useless use of $a in sink context (lines 2, 2)
10, 20
```

Горният ред всъщност е еквивалентен на безполезно присвояване `$b = $b`. Лесно можете да го видите, ако промените стойностите от дясната страна, например:

```raku
$a, $b = 2 * $b, 3 * $a;
```

Тази програма отпечатва още повече предупреждения, но също така можете да видите, че само `$b` е променил своята стойност:

```
$ raku exercises/scalar-variables/swap.raku
WARNINGS for /Users/ash/raku-course/exercises/scalar-variables/swap.raku:
Useless use of "*" in expression "3 * $a" in sink context (line 2)
Useless use of $a in sink context (line 2)
10, 40
```

{% include nav.html %}