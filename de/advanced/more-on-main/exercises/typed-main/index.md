---
title: Ein typisiertes MAIN
translations_gpt:
---

{% include menu.html %}

## Problem

Eine Typbeschränkung auf einem `MAIN`-Parameter wird ebenfalls geprüft, bevor der Körper ausgeführt wird. Schreiben Sie ein Programm, dessen `MAIN` einen einzelnen `Int $n` annimmt und `$n` verdoppelt ausgibt. Wenn das Argument keine gültige Ganzzahl ist, passt die Signatur nicht, und Raku gibt stattdessen die Verwendungsmeldung aus — Sie erhalten die Validierung kostenlos.

## Beispiel

```console
$ raku typed-main.raku 5
10

$ raku typed-main.raku abc
Usage:
  typed-main.raku <n>
```

## Lösung

✅ [Siehe die Lösung](solution)

{% include nav.html %}
