---
title: 'Solution: Тройно отрицание'
---

{% include menu.html %}

Програмата, показана в задачата, няма да се компилира и изисква малка корекция. Ето правилният и работещ вариант (добавено пространство за разделяне на `!` и `!!`):

## Код

```raku
my $value = False;
say ! !!$value;
```

🦋 Можете да намерите пълния код във файла [triple-negation.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/booleans/triple-negation.raku).

## Резултат

Програмата отпечатва обърната булева стойност, както вероятно сте очаквали:

```console
$ raku triple-negation.raku
True
```

## Коментари

Беше малко неочаквано, че програмата с три удивителни знака не се компилира:

```console
$ raku triple-negation.raku
===SORRY!=== Error while compiling /Users/ash/raku-course/exercises/booleans/triple-negation.raku
Two terms in a row
at /Users/ash/raku-course/exercises/booleans/triple-negation.raku:2
------> say !!!⏏$value;
    expecting any of:
        infix
        infix stopper
        postfix
        statement end
        statement modifier
        statement modifier loop
```

Допълнителното пространство решава този проблем. Но не попадайте в друга клопка. Разгледайте следната програма:

```raku
my $value = False;
say !!! $value;
```

Тази програма се компилира, но завършва със следното съобщение:

```console
$ raku triple-negation.raku
False
    in block <unit> at exercises/booleans/triple-negation.raku line 2
```

Това се случва, защото `!!!` е специален оператор за маркиране на част от кода като временен код. Ако програмата достигне до тази точка, тя се прекратява и отпечатва съобщението, което в нашия случай беше текущата стойност на променливата `$value`. Вижте 📖 [документацията](https://docs.raku.org/routine/!!!) за повече подробности.

{% include nav.html %}