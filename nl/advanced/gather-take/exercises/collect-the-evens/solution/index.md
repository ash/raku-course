---
title: 'Solution: Elk getal herhalen'
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de opgave.

## Code

```raku
my @result = gather for 1..4 -> $n {
    take $n for 1..$n;
};

say @result;
```

🦋 Je kunt de broncode vinden in het bestand [collect-the-evens.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/gather-take/collect-the-evens.raku).

## Uitvoer

```
[1 2 2 3 3 3 4 4 4 4]
```

## Opmerkingen

1. Niets dwingt een enkele `take` per iteratie af. Hier voert de binnenste `take $n for 1..$n` `take` een verschillend aantal keren uit bij elke doorgang, wat precies de flexibiliteit is die `gather`/`take` krachtiger maakt dan een gewone `map`.

1. De buitenste lus gebruikt met opzet een benoemde variabele `-> $n`. Als we de binnenste lus met `$_` zouden schrijven, zou de binnenste `for` `$_` opnieuw binden aan zijn eigen teller, en zouden we de teller nemen in plaats van het huidige getal.

1. `gather` verzamelt eenvoudigweg elke waarde die genomen is, in volgorde, dus `@result` bevat uiteindelijk `1`, dan twee `2`'s, dan drie `3`'s, dan vier `4`'s.

{% include nav.html %}
