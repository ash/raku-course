---
title: 'Solvo: Eligo kaj eraroj'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my @data = 3, 5, 7;

my $sum = 0;
for @data -> $n {
    $sum += $n;
    $*ERR.say("running total: $sum");
}

$*OUT.say($sum);
```

🦋 Vi povas trovi la fontkodon en la dosiero [output-and-error.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/standard-streams/output-and-error.raku).

## Eligo

Sur la ekrano ambaŭ fluoj aperas — la kurantaj sumoj, poste la fina rezulto:

```
running total: 3
running total: 8
running total: 15
15
```

Se norma erarfluo estas forĵetita, nur la vera eligo restas:

```
$ raku output-and-error.raku 2>/dev/null
15
```

## Komentoj

1. `$*OUT` kaj `$*ERR` estas la teniloj por norma eligo kaj norma erarfluo. Ĉiu havas sian propran metodon `say`.

1. Ĉiu paso de la buklo aldonas la sekvan nombron kaj skribas la kurantan sumon al `$*ERR`; nur la fina sumo iras al `$*OUT`. Sur la ekrano la progreso kaj la rezulto aspektas similaj, sed ili vojaĝas tra malsamaj fluoj — kial redirekti norman erarfluon per `2>/dev/null` lasas nur la finan `15`.

{% include nav.html %}
