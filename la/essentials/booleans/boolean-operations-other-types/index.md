---
title: Boolean operations with other types
---

{% include menu.html %}

In sectione proxima, de conversione datae diversorum generum inter se loquemur. Sed antequam id faciamus, haec proprietas Raku notanda est. Cum operationes Booleanas ad chordas vel integros applicas, valores non convertuntur ad Booleanos, et eventus non est valor Booleanus. Considera sequentia exempla:

```raku
say 'Hello' && 'World'; # World
say 'Alpha' || 'Beta';  # Alpha
say 0 ^^ 42;            # 42
```

Legamus regulas 📖 [ex documentis](https://docs.raku.org/language/operators#Tight_AND_precedence):

* `&&` reddit primum argumentum quod in contextu Booleano Falsum aestimatur, alioquin reddit ultimum argumentum.
* `||` reddit primum argumentum quod in contextu Booleano Verum aestimatur, alioquin reddit ultimum argumentum.
* `^^` reddit argumentum Verum si unum (et solum unum) est. Reddit ultimum argumentum si omnia argumenta Falsa sunt. Reddit `Nil` cum plus quam unum argumentum verum est.

Nota nos modo occurrisse valore ‘nullum’ `Nil`.

{% include nav.html %}