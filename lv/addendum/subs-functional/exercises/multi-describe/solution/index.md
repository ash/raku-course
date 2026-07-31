---
title: 'Risinājums: Apraksts pēc tipa'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
multi describe(Int $x) { "integer $x" }
multi describe(Str $x) { "string $x" }
multi describe(@x)     { "list of {@x.elems}" }

say describe(42);
say describe('hi');
say describe([1, 2, 3]);
```

🦋 Atrodiet programmu failā [multi-describe.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/subs-functional/multi-describe.raku).

## Izvade

```
integer 42
string hi
list of 3
```

## Komentāri

1. Katrs `multi` dod vienu `describe` versiju ar citu parametra tipu.
Raku izvēlas atbilstošo kandidātu pēc argumenta tipa.

1. Paraksts `@x` atbilst sarakstam, tāpēc masīvs tiek nosūtīts trešajam
kandidātam, kas paziņo tā garumu.

{% include nav.html %}
