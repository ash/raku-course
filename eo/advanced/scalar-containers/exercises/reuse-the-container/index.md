---
title: Tipita aŭ netipita
translations_gpt:
---

{% include menu.html %}

## Problemo

Deklaru du skalarajn variablojn unu apud la alia: netipitan `$untyped` kaj `Int`-tipitan `$typed`. Elĵetu ambaŭ per `dd` dum ili ankoraŭ estas malplenaj, poste atribuu `42` al ĉiu kaj elĵetu ambaŭ denove. Rigardu atente, kiel `dd` priskribas la du ujojn malsame.

## Ekzemplo

La programo presas (al la norma erarfluo):

```
$untyped = Any
Int $typed = Int
$untyped = 42
Int $typed = 42
```

## Solvo

✅ [Vidu la solvon](solution)

{% include nav.html %}
