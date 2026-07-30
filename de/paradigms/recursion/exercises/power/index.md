---
title: Übung ’Potenz‘
translations_gpt:
---

{% include menu.html %}

## Aufgabe

Schreiben Sie eine rekursive Subroutine `power($base, $exp)`, die `$base` durch Multiplizieren in die Potenz `$exp` erhebt — ohne den Operator `**` zu verwenden. Der Grundfall ist `$exp == 0`, was `1` ergibt; andernfalls ist die Antwort `$base` mal `power($base, $exp - 1)`. Geben Sie `power(2, 10)` aus.

## Beispiel

Das Programm gibt aus:

```
1024
```

## Lösung

✅ [Siehe die Lösung](solution)

{% include nav.html %}
