---
title: Die Reihenfolge der ENDs
---

{% include menu.html %}

## Problem

Ein Programm kann mehr als einen `END`-Phaser haben. Wenn das der Fall ist, werden sie in **umgekehrter** Reihenfolge ausgeführt, wie sie geschrieben wurden — der zuletzt deklarierte wird zuerst ausgeführt (Last in, First out).

Schreibe zwei `END`-Phaser, wobei der erste `first END` und der zweite `second END` ausgibt, gefolgt von einem einfachen `say 'body'`. Sage die Ausgabereihenfolge vorher und reproduziere sie.

## Beispiel

Das Programm gibt aus:

```
body
second END
first END
```

## Lösung

✅ [Siehe die Lösung](solution)

{% include nav.html %}
