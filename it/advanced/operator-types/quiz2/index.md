---
title: Quiz — Prefisso o postfisso
---

{% include menu.html %}

Hai visto `++` scritto *dopo* una variabile, come postfisso. Può anche essere scritto *prima*. A quale categoria appartiene `++` in `++$x`?

```raku
my $x = 5;
say ++$x;
```

{:.quiz}
1 | prefix
0 | postfix
0 | infix
0 | postcircumfix

{% include quiz.html %}

<div class="extended-explanation">

La categoria è determinata esclusivamente dalla *posizione*. Scritto prima del suo unico operando, `++$x` è un operatore **prefisso**: lo stesso identico `++` diventa postfisso quando viene scritto dopo, come in `$x++`. Entrambe le forme incrementano `$x`; quella prefissa restituisce il nuovo valore, quindi questo stampa `6`.

</div>

{% include nav.html %}
