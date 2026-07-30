---
title: Die Symbole auflisten
---

{% include menu.html %}

## Problem

Dir liegt ein Modul in der Datei `Circle.rakumod` vor, das zwei `our`-Variablen definiert:

```raku
unit module Circle;

our $pi = 3.14;
our $tau = 6.28;
```

Schreibe ein Programm, das das Modul verwendet und zuerst ausgibt, wie viele Namen im Package des Moduls definiert sind, und dann die Namen selbst in alphabetischer Reihenfolge.

## Beispiel

```console
$ raku -I. list.raku
2
($pi $tau)
```

## Lösung

✅ [Siehe die Lösung](solution)

{% include nav.html %}
