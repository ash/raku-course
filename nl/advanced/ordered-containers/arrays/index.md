---
title: Arrays
---

{% include menu.html %}

Een array is een geordende container waarvan de elementen zelf scalar containers zijn.

```raku
my @array = 100, 200, 300;
my @letters = 'a', 'b', 'c';
```

De `@` sigil geeft aan dat zo'n variabele zich gedraagt als een `Positional` object, zodat je het kunt subscripten om individuele elementen te benaderen:

```raku
say @array[1];   # 200
say @letters[2]; # c
```

Omdat elk element een scalar container is, kun je er een nieuwe waarde aan toekennen, precies zoals je zou doen met een losstaande scalar variabele:

```raku
my @array = 100, 200, 300;
@array[0] = 10;
say @array; # [10 200 300]
```

Je kunt ook een waarde van een ander type toekennen, bijvoorbeeld:

```raku
my @array = 100, 200, 300;
@array[0] = 'ten';
say @array; # [ten 200 300]
```

Dit is wat arrays _muteerbaar_ maakt: elke plek is een container die een nieuwe waarde kan ontvangen. Zoals je in het volgende onderwerp zult zien, gedragen [lists](/nl/advanced/ordered-containers/lists) zich anders.

{% include nav.html %}
