---
title: 'Solution: Принтиране на серия от числа'
---

{% include menu.html %}

Има повече от един начин за решаване на дадения проблем.

## Код 1

Първото решение е по-раку-стично и компактно.

```raku
my $begin = prompt 'Начало: ';
my $end = prompt 'Край: ';

.say for $begin .. $end;
```

🦋 Намерете програмата във файла [series-of-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/positionals/series-of-numbers.raku).

## Код 2

Второто възможно решение може да използва оператора `loop`.

```raku
my $begin = prompt 'Начало: ';
my $end = prompt 'Край: ';

loop (my $n = $begin; $n <= $end; $n++) {
    say $n;
}
```

🦋 Намерете програмата във файла [series-of-numbers-loop.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/positionals/series-of-numbers-loop.raku).

Както виждате, първият вариант е значително по-кратък и по-изразителен.

## Дискусия

В първия вариант на програмата е използвана [постфиксната форма на цикъла `for`](/bg/essentials/loops/postfix-for). Във втората програма е избран цикъл `loop`.

## Изход

Въведете двете числа в конзолата и стартирайте програмата. И двата варианта произвеждат същия изход.

```console
$ raku exercises/positionals/series-of-numbers.raku
Начало: 15
Край: 19
15
16
17
18
19
```

{% include nav.html %}