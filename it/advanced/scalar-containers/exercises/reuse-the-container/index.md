---
title: Tipizzato o non tipizzato
translations_gpt:
---

{% include menu.html %}

## Problema

Dichiarate due variabili scalari affiancate: una non tipizzata `$untyped` e una tipizzata `Int` `$typed`. Fate il dump di entrambe con `dd` mentre sono ancora vuote, poi assegnate `42` a ciascuna e fate di nuovo il dump di entrambe. Osservate attentamente come `dd` descrive i due contenitori in modo diverso.

## Esempio

Il programma stampa (sullo standard error):

```
$untyped = Any
Int $typed = Int
$untyped = 42
Int $typed = 42
```

## Soluzione

✅ [Vedi la soluzione](solution)

{% include nav.html %}
