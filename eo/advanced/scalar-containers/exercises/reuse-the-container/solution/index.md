---
title: 'Solvo: Tipita aŭ netipita'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

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

🦋 Vi povas trovi la fontkodon en la dosiero [reuse-the-container.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/scalar-containers/reuse-the-container.raku).

## Eligo

```
$untyped = Any
Int $typed = Int
$untyped = 42
Int $typed = 42
```

## Komentoj

1. `dd` raportas la du ujojn malsame. Por la netipita ĝi presas nur `$untyped`, dum por la tipita ĝi antaŭmetas la deklaritan tipon: `Int $typed`. Tiu prefikso estas ĝuste la diferenco, kiun faras deklarita tipo.

1. Ankaŭ la malplenaj valoroj diferencas. Netipita ujo komenciĝas ĉe la nuda nedifinita valoro `Any`, dum tipita ujo komenciĝas ĉe la nedifinita valoro de *sia* tipo, `Int`.

1. Post kiam ambaŭ ricevas `42`, la valoroj aspektas same, sed `$typed` ankoraŭ portas sian tipon kaj rifuzus ne-entjeran valoron — malsame ol `$untyped`, kiu akceptas ion ajn.

{% include nav.html %}
