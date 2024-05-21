---
title: Variabele interpolatie in Raku strings
---

{% include menu.html %}

Heb je in de vorige secties al opgemerkt dat de strings soms tussen enkele aanhalingstekens stonden en soms tussen dubbele aanhalingstekens? Het verschil is cruciaal.

Natuurlijk kun je dubbele aanhalingstekens gebruiken als je met minimale inspanning een enkele aanhalingsteken in de string wilt plaatsen:

```raku
say "O'Henry";
```

Overigens is het nog steeds beter om een juiste apostrof te gebruiken in plaats van een enkele aanhalingsteken, aangezien [Raku goed is met Unicode](../../on-unicode).

```raku
say 'O’Henry';
```

Maar de echte kracht van dubbele aanhalingstekens is hun vermogen om variabelen te _interpoleren_ en—zoals we snel zullen zien—code uit te voeren! Bekijk het volgende programma:

```raku
my $name = 'Karl';
say "Hallo, $name!";
```

Zoals je zou verwachten, print het programma `Hallo, Karl!`. De naam van de `$name` variabele (samen met zijn sigil `$`) werd vervangen door de waarde van de variabele.

De variabele werd geïnterpoleerd met de waarde die de variabele op het moment van interpolatie had, dus als je de inhoud van `$name` verandert en het opnieuw interpoleert, wordt de nieuwe waarde vervangen. Laten we het testen:

```raku
my $name = 'Karl';
say "Hallo, $name!";

$name = 'Anna';
say "Hallo, $name!";
```

Dezelfde string genereert deze keer verschillende berichten:

    Hallo, Karl!
    Hallo, Anna!

{% include nav.html %}