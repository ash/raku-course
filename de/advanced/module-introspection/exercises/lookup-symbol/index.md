---
title: Ein Symbol nachschlagen
---

{% include menu.html %}

## Problem

Neben dem Auflisten der Namen eines Packages kannst du einen Namen dynamisch erreichen, indem du ihn als Schlüssel im Stash des Packages verwendest. Dir liegt ein Modul `Circle.rakumod` vor:

```raku
unit module Circle;

our $pi = 3.14;
```

Schreibe ein separates Programm, das das Modul lädt und den Wert von `$pi` ausgibt, indem es ihn im Stash mit `Circle::{'$pi'}` nachschlägt — nicht mit dem qualifizierten `$Circle::pi`.

## Beispiel

Wenn das Programm mit dem Modul im Suchpfad ausgeführt wird, gibt es aus:

```console
$ raku -I. lookup.raku
3.14
```

## Lösung

✅ [Siehe die Lösung](solution)

{% include nav.html %}
