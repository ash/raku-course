---
title: 'Risinājums: Pirmie septiņu reizinājumi'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
say (1..*).map(* * 7).head(5);
```

🦋 Atrodiet programmu failā [first-multiples-of-seven.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/lazy/first-multiples-of-seven.raku).

## Izvade

```
(7 14 21 28 35)
```

## Komentāri

1. `1..*` ir bezgalīgs diapazons; `.map(* * 7)` katru elementu slinki reizina ar septiņi.

1. `.head(5)` izvelk tikai pirmos piecus, tāpēc bezgalīgais avots nekad netiek aprēķināts līdz galam.

{% include nav.html %}
