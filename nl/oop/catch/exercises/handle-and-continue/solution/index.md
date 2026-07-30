---
title: 'Oplossing: Afhandelen en doorgaan'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
for <ok bad ok> -> $item {
    {
        die 'boom' if $item eq 'bad';
        say "processed $item";

        CATCH {
            default {
                say "skipped ($item): {.message}";
            }
        }
    }
}
```

🦋 Je kunt de broncode vinden in het bestand [handle-and-continue.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/catch/handle-and-continue.raku).

## Uitvoer

```
processed ok
skipped (bad): boom
processed ok
```

## Opmerkingen

1. De `CATCH`-faser zit binnen het blok per item, dus hij handelt een `die` af voor precies dat ene item. Omdat de exceptie daar afgehandeld wordt, ontsnapt ze nooit om de hele lus stil te leggen.

1. Dit is het typische gebruik van `CATCH` boven `try`: een mislukking in één iteratie wordt lokaal afgehandeld, en de lus gaat door naar het volgende item. Het middelste item mislukt, maar de twee `ok`-items worden gewoon verwerkt.

{% include nav.html %}
