---
title: Passare subroutine
translations_gpt:
---

{% include menu.html %}

Per accettare una subroutine come parametro, dichiarala con il sigillo `&`. Dentro il corpo puoi poi chiamarla per nome:

```raku
sub apply(&f, $x) {
    f($x);
}

say apply(* + 3, 10); # 13
```

Il parametro `&f` riceve un pezzo di codice, e `f($x)` lo chiama. Qui abbiamo passato `* + 3`, un'espressione _Whatever_ che significa «aggiungi tre a qualunque cosa ti venga data», quindi `apply(* + 3, 10)` calcola `13`.

Puoi passare altrettanto facilmente una subroutine con nome, riferendoti a essa con il sigillo `&` così che venga passata invece di essere chiamata:

```raku
sub double($n) { $n * 2 }

sub apply(&f, $x) {
    f($x);
}

say apply(&double, 5); # 10
```

È esattamente così che funzionano `map` e `grep`: sono subroutine che prendono un'altra subroutine — il tuo blocco — e la applicano a ogni elemento. Scrivere subroutine tue che prendono codice le rende altrettanto flessibili.

{% include nav.html %}
