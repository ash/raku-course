---
title: Über den äußeren Bereich schließen
translations_gpt:
---

{% include menu.html %}

## Problem

Eine verschachtelte Unterroutine ist ein *Closure*: Sie kann die Variablen der Unterroutine sehen, die sie enthält. Schreiben Sie eine Unterroutine `greet($name)`, die einen verschachtelten Helfer `message` definiert, der **keine** Argumente entgegennimmt. Der Helfer gibt `"Hello, $name!"` zurück und liest `$name` direkt aus dem umgebenden `greet`. Geben Sie innerhalb von `greet` aus, was `message` zurückgibt, und rufen Sie `greet('Anna')` auf.

## Beispiel

Das Programm gibt aus:

```
Hello, Anna!
```

## Lösung

✅ [Siehe die Lösung](solution)

{% include nav.html %}
