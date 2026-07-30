---
title: 'Oplossing: Een lus overleven'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
for 1, 2, 3 -> $n {
    if $n == 2 {
        die "bad: $n";
    }
    say "ok: $n";

    CATCH {
        default {
            say "caught: " ~ .message;
        }
    }
}
```

🦋 Je kunt de broncode vinden in het bestand [survive-a-loop.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/catch/survive-a-loop.raku).

## Uitvoer

```
ok: 1
caught: bad: 2
ok: 3
```

## Opmerkingen

1. De `CATCH`-faser handelt een exceptie af die binnen de body van de lus geworpen wordt, dus de `die` bij de tweede iteratie wordt gevangen in plaats van fataal te zijn.

1. Zodra de exceptie afgehandeld is, gaat de lus eenvoudigweg verder met de volgende waarde, en daarom wordt `ok: 3` toch afgedrukt.

{% include nav.html %}
