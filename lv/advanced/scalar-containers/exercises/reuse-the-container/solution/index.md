---
title: 'Risinājums: Tipizēts vai netipizēts'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my $untyped;
my Int $typed;

dd $untyped;
dd $typed;

$untyped = 42;
$typed = 42;

dd $untyped;
dd $typed;
```

🦋 Atrodiet programmu failā [reuse-the-container.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/scalar-containers/reuse-the-container.raku).

## Izvade

```
$untyped = Any
Int $typed = Int
$untyped = 42
Int $typed = 42
```

## Komentāri

1. `dd` abus konteinerus apraksta atšķirīgi. Tam, kam nav tipa, tā izdrukā tikai `$untyped`, bet tam, kam tips ir, priekšā liek deklarēto tipu: `Int $typed`. Tieši šis priekšlikums ir tā atšķirība, ko rada deklarēts tips.

1. Atšķiras arī tukšās vērtības. Konteiners bez tipa sākas ar kailo nedefinēto vērtību `Any`, turpretī konteiners ar tipu sākas ar *sava* tipa nedefinēto vērtību `Int`.

1. Pēc tam, kad abiem piešķirts `42`, vērtības izskatās vienādas, taču `$typed` joprojām nes savu tipu un noraidītu vērtību, kas nav vesels skaitlis, — atšķirībā no `$untyped`, kas pieņem jebko.

{% include nav.html %}
