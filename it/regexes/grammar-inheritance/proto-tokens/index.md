---
title: Token proto e alternative
translations_gpt:
---

{% include menu.html %}

A volte un concetto ha più forme — un numero potrebbe essere un intero o un decimale. Potresti scrivere un'alternativa con `|`, ma le grammatiche offrono un modo più ordinato: un _proto token_ con varianti con nome.

Dichiara il token ombrello come `proto token`, poi scrivi ogni variante come `token nome:sym<etichetta>`:

```raku
grammar Number {
    token TOP { <number> }

    proto token number {*}
    token number:sym<int>   { \d+ }
    token number:sym<float> { \d+ '.' \d+ }
}

say Number.parse('42').defined;   # True
say Number.parse('3.14').defined; # True
```

La riga `proto token number {*}` dice «un `number` è una delle varianti qui sotto». Ogni variante porta un'etichetta `:sym<…>` che la nomina. Quando la grammatica ha bisogno di un `<number>`, prova le varianti e, con il riconoscimento del token più lungo, sceglie quella che calza — `int` per `42`, `float` per `3.14`.

I proto token si leggono meglio di una lunga catena di alternative con `|`, e le etichette `:sym<…>` danno a ogni caso un nome su cui potrai agire più tardi, quando attacchi un significato all'analisi. Sono il modo idiomatico di esprimere «uno di questi generi» in una grammatica.

{% include nav.html %}
