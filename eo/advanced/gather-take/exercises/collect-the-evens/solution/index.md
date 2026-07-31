---
title: 'Solvo: Ripeti ĉiun nombron'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my @result = gather for 1..4 -> $n {
    take $n for 1..$n;
};

say @result;
```

🦋 Vi povas trovi la fontkodon en la dosiero [collect-the-evens.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/gather-take/collect-the-evens.raku).

## Eligo

```
[1 2 2 3 3 3 4 4 4 4]
```

## Komentoj

1. Nenio devigas unu solan `take` por ripeto. Ĉi tie la interna `take $n for 1..$n` rulas `take` malsaman nombron da fojoj ĉe ĉiu paso, kio estas ĝuste la fleksebleco, kiu faras `gather`/`take` pli potenca ol simpla `map`.

1. La ekstera buklo intence uzas nomitan variablon `-> $n`. Se ni skribus la internan buklon per `$_`, la interna `for` rebindus `$_` al sia propra nombrilo, kaj ni prenus la nombrilon anstataŭ la aktualan nombron.

1. `gather` simple kolektas ĉiun valoron, kiu estis prenita, laŭ ordo, do `@result` fine enhavas `1`, poste du `2`-ojn, poste tri `3`-ojn, poste kvar `4`-ojn.

{% include nav.html %}
