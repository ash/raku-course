---
title: 'Solution: Стойността на π'
---

{% include menu.html %}

Програмата за отпечатване на стойността на π е достатъчно проста.

## Код

```raku
say π;
```

🦋 Можете да намерите пълния код във файла [pi.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/numbers/pi.raku).

## Резултат

Стартирайте програмата и вижте какво отпечатва:

```console
$ raku exercises/numbers/pi.raku
3.141592653589793
```

## Коментари

Raku ни предлага вградена константа, наречена `π`, което прави програмата тривиална. Въпреки това, разгледайте други опции за постигане на същото:

```raku
    π.say;
```

Или:

```raku
    pi.say;
```

Или:

```raku
    say pi;
```

{% include nav.html %}