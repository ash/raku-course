---
title: make e made
translations_gpt:
---

{% include menu.html %}

Invece di estrarre i valori dall'albero a posteriori, puoi attaccare un valore a una corrispondenza **durante** l'analisi. Nel corpo di un token puoi incorporare un _blocco di codice_ — un `{ … }` interno scritto fra lo schema — che gira non appena il riconoscimento lo raggiunge. Dentro quel blocco, la funzione `make` conserva un valore sulla corrispondenza corrente:

```raku
grammar OneNum {
    token TOP    { <number> { make $<number>.Int } }
    token number { \d+ }
}
```

Quando `TOP` corrisponde, il blocco interno `{ make $<number>.Int }` gira — le graffe esterne sono solo il corpo del token — e conserva l'intero sulla corrispondenza. Lo rileggi dopo con `made` (o con il suo alias `.ast`):

```raku
say OneNum.parse('42').made; # 42
```

Poiché abbiamo conservato `$<number>.Int`, il valore restituito da `made` è un vero `Int` — il numero in sé, non l'oggetto match:

```raku
say OneNum.parse('42').made + 1; # 43
```

Nota che questo particolare `+ 1` darebbe `43` anche senza il `.Int`, dato che una corrispondenza si converte in numero a partire dalle sue cifre in aritmetica. Il senso di chiamare `.Int` è che il valore *conservato* **è** davvero un numero — ed è ciò che vuoi una volta che finisce in una struttura dati o viene passato oltre, invece della corrispondenza grezza.

Il valore conservato può essere qualunque cosa: un numero, una stringa, un array, un oggetto. Un token può anche combinare i valori prodotti dai suoi sottotoken. Per esempio, sommando due numeri catturati:

```raku
grammar Sum {
    token TOP { <a> '+' <b> { make $<a>.Int + $<b>.Int } }
    token a   { \d+ }
    token b   { \d+ }
}

say Sum.parse('2+3').made; # 5
```

`make` e `made` sono il ponte fra «ha corrisposto» ed «ecco il significato». Mettere i blocchi in linea funziona, ma mescola lo schema con la logica; la sezione successiva sposta quella logica in una [_classe di azioni_](/it/regexes/action-classes) separata.

{% include nav.html %}
