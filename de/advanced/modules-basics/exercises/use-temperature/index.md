---
title: Den Konverter verwenden
---

{% include menu.html %}

## Problem

Dir liegt ein Modul in einer Datei `Temperature.rakumod` vor:

```raku
unit module Temperature;

sub c-to-f($c) is export {
    $c * 9/5 + 32
}
```

Schreibe ein separates Programm, das dieses Modul verwendet, um eine Celsius-Temperatur — als Kommandozeilenargument übergeben — in Fahrenheit umzurechnen und das Ergebnis auszugeben.

## Beispiel

```console
$ raku -I. temperature.raku 100
212
```

## Lösung

✅ [Siehe die Lösung](solution)

{% include nav.html %}
