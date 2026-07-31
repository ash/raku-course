---
title: Restituire subroutine
translations_gpt:
---

{% include menu.html %}

Una subroutine può anche **restituire** una subroutine. Questo ti permette di costruire nuove funzioni al volo, su misura per gli argomenti che dai:

```raku
sub adder($n) {
    sub ($x) { $x + $n };
}

my &add5 = adder(5);
say add5(3); # 8
```

`adder(5)` costruisce e restituisce una subroutine anonima che aggiunge `5` al proprio argomento. La conserviamo in `&add5` e la chiamiamo come qualunque altra subroutine. Chiamare `adder(10)` darebbe un sommatore diverso che aggiunge dieci.

Nota che la subroutine restituita ricorda il valore di `$n` dalla chiamata che l'ha creata: `add5` conserva il suo `5` anche dopo che `adder` è terminata. Una subroutine che cattura valori dall'ambito in cui è stata creata si chiama [_chiusura_](/it/paradigms/closures), l'argomento della sezione successiva.

Restituire funzioni è un modo compatto di produrre famiglie di operazioni imparentate senza ripetersi: un'unica definizione di `adder` genera un numero illimitato di sommatori specifici.

{% include nav.html %}
