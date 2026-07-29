---
title: 'Solution: Сравнете `say` и `put`'
---

{% include menu.html %}

## Код

Ето едно от възможните решения:

```raku
my Int $i = 42;
say $i;
put $i;

my Rat $r = 3/4;
say $r;
put $r;

my Num $n = 3e4;
say $n;
put $n;

my Str $s = 'Raku';
say $s;
put $s;

my @a = <this is an array>;
# say @a.WHAT;
say @a;
put @a;

my List $l = <this is a list>;
# say $l.WHAT;
say $l;
put $l;

my %h = A => 'alpha', B => 'beta';
say %h;
put %h;
```

За по-голяма увереност, можете също да отпечатате типа на променливата, например както е показано за масиви и списъци, за да се уверите, че сте създали променлива от желания тип.

🦋 Намерете програмата във файла [compare-say-and-put.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/built-in-functions-for-printing/compare-say-and-put.raku).

## Изход

Изходът на програмата, показана по-горе, е показан по-долу.

```console
$ raku exercises/built-in-functions-for-printing/compare-say-and-put.raku
42
42
0.75
0.75
30000
30000
Raku
Raku
[this is an array]
this is an array
(this is a list)
this is a list
{A => alpha, B => beta}
A	alpha
B	bета
```

## Коментари

Чрез разглеждане на изхода на програмата, можете ясно да видите, че няма разлика при отпечатване на прости типове данни като числа и низове. За агрегатни типове данни, `say` произвежда малко по-шумен изход в сравнение с `put`. От друга страна, за хешове, `put` ги отпечатва като таблица в сравнение с един ред на `say`.

Разликата между формата на изхода се определя от това как методите `Str` и `gist` са имплементирани за съответния тип. Ще говорим повече за това по-късно в курса.

{% include nav.html %}