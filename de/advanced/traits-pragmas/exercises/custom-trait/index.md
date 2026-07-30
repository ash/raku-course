---
title: Ein benutzerdefinierter Trait
translations_gpt:
---

{% include menu.html %}

## Problem

Ein benutzerdefiniertes Trait kann ein Argument entgegennehmen, nicht nur vorhanden oder abwesend sein. Schreiben Sie ein Trait `is role(...)`, das einen String akzeptiert und in einem Hash, der nach dem Namen der Subroutine geschlüsselt ist, die dieser Subroutine zugewiesene Rolle speichert.

Wenden Sie `is role('admin')` auf eine Subroutine `login` an und geben Sie dann die für `login` gespeicherte Rolle aus.

## Beispiel

Das Programm gibt aus:

```
admin
```

## Lösung

✅ [Siehe die Lösung](solution)

{% include nav.html %}
