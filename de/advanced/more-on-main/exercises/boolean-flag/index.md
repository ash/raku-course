---
title: Ein Befehlszeilen-Flag
translations_gpt:
---

{% include menu.html %}

## Problem

Ein benannter `Bool`-Parameter von `MAIN` wird zu einem Ein/Aus-**Flag**: Die Angabe von `--flag` setzt ihn auf `True`, und das Weglassen behaelt seinen Standardwert bei. Schreiben Sie ein Programm, dessen `MAIN` den Parameter `Bool :$shout = False` annimmt und `HELLO` ausgibt, wenn das Flag gesetzt ist, oder `hello` andernfalls.

## Beispiel

```console
$ raku boolean-flag.raku
hello

$ raku boolean-flag.raku --shout
HELLO
```

## Lösung

✅ [Siehe die Lösung](solution)

{% include nav.html %}
