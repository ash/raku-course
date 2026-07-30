---
title: Die Konstante lesen
---

{% include menu.html %}

## Problem

Dir liegt ein Modul in einer Datei `Circle.rakumod` vor:

```raku
unit module Circle;

our $pi = 3.14;
```

Schreibe ein Programm, das dieses Modul mit `need` (nicht `use`) lädt und den Wert von `$pi` ausgibt. Denke daran, dass `need` keine Namen importiert, sodass du die Variable über den Modulnamen erreichst.

## Beispiel

```console
$ raku -I. read-pi.raku
3.14
```

## Lösung

✅ [Siehe die Lösung](solution)

{% include nav.html %}
