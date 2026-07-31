---
title: 'Soluzione: Ordinare per due chiavi'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
my @people =
    { name => 'Anna', age => 30 },
    { name => 'Bob',  age => 25 },
    { name => 'Cara', age => 30 };

for @people.sort({ .<age>, .<name> }) -> %person {
    say "%person<name> (%person<age>)";
}
```

🦋 Trova il programma nel file [sort-by-two-keys.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/subs-functional/sort-by-two-keys.raku).

## Output

```
Bob (25)
Anna (30)
Cara (30)
```

## Commenti

1. Quando un blocco `.sort` restituisce una lista, Raku confronta per il primo elemento,
poi per il secondo — quindi `{ .<age>, .<name> }` ordina prima per età e usa il nome solo
per sciogliere le parità.

1. Anna e Cara condividono l'età `30`, quindi vengono ordinate alfabeticamente; Bob, più
giovane, viene per primo.

{% include nav.html %}
