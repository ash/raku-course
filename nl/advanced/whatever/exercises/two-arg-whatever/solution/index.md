---
title: 'Oplossing: Een Whatever met twee argumenten'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
my $join = * ~ '-' ~ *;

say $join('a', 'b');
```

🦋 Je kunt de broncode vinden in het bestand [two-arg-whatever.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/whatever/two-arg-whatever.raku).

## Uitvoer

```
a-b
```

## Opmerkingen

1. De uitdrukking bevat twee sterren, dus Raku bouwt een `WhateverCode` die twee argumenten aanneemt — de eerste ster is het eerste argument, de tweede ster het tweede.

1. Bij het aanroepen van `$join('a', 'b')` worden de sterren op volgorde ingevuld, wat `'a' ~ '-' ~ 'b'` oplevert, oftewel `a-b`.

{% include nav.html %}
