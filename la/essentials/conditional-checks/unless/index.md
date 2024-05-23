---
title: Using unless
---

{% include menu.html %}

Omnes condiciones Boolean facile negari possunt cum [`!` operator](/la/essentials/booleans/operations#negation). Tamen, in quibusdam casibus, negatio explicita expressionem graviorem et minus legibilem facit. In his casibus, `unless` amicus esse potest.

Blockum `unless` exequitur cum eius condicio `False` est.

```raku
my $broken = False;

# ...Aliquid potest $broken ad Verum hic ponere...
    
unless $broken {
    dic "Noli sollicitari!";
    dic "Esto laetus!";
}
```

Compara duas variantes eiusdem programmatis:

Cum `if` et negatione:

```raku
if !$broken { . . . }
```

Cum `unless`:

```raku
unless $broken { . . . }
```

Habens alternativas, semper eligere potes quod tibi melius videtur in praesenti situ.

Nota quod `unless` non potest sequi ab `else` aut `elsif` blockis. In hoc casu, sola via est uti `if`.

{% include nav.html %}