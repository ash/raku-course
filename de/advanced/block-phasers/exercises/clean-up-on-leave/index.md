---
title: Beim Verlassen aufräumen
---

{% include menu.html %}

## Problem

Die wahre Stärke von `LEAVE` liegt darin, dass er ausgeführt wird, *egal wie* der Block verlassen wird -- auch bei einem vorzeitigen `return`.

Schreibe eine Subroutine `work`, deren Rumpf mit einem `LEAVE`-Phaser beginnt, der `Cleanup` ausgibt. Gib dann, noch innerhalb der Subroutine, `Working` aus, führe sofort ein `return` aus und setze eine `say 'never reached'`-Zeile nach dem `return`. Rufe die Subroutine auf. Das vorzeitige `return` überspringt die letzte Zeile, aber `Cleanup` wird trotzdem ausgegeben.

## Beispiel

Das Programm gibt aus:

```
Working
Cleanup
```

## Lösung

✅ [Siehe die Lösung](solution)

{% include nav.html %}
