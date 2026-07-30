---
title: 'Solution: Mengenrabatt'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
multi sub price(Int $qty where $qty >= 10) { say 'bulk price' }
multi sub price(Int $qty)                  { say 'normal price' }

price(3);
price(25);
```

🦋 Den Quellcode finden Sie in der Datei [bulk-pricing.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/multiple-dispatch/bulk-pricing.raku).

## Ausgabe

```
normal price
bulk price
```

## Kommentare

1. Der erste Kandidat hat eine `where`-Klausel, die nur Mengen von 10 oder mehr akzeptiert, sodass der Aufruf `price(25)` dorthin geleitet wird.

1. Der zweite Kandidat hat keine Bedingung und dient als Auffangfall, sodass `price(3)` dort landet.

{% include nav.html %}
