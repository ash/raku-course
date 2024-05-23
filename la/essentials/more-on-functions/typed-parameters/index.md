---
title: Typed parameters of functions
---

{% include menu.html %}

Functiones parametri in Raku possunt typi restricti fieri. Hoc est valde simile [variabilibus typatis](/la/essentials/typed-variables/type-constraints/).

```raku
sub add(Int $x, Int $y) { $x + $y }
```

Functio nunc argumenta sua numerorum integri postulant.

```raku
say add(10, 20);
# say add(pi, e); # Error
```

Conatus transmittendi parameter cuiuslibet alterius generis quam `Int` est error temporis compilationis.

```
$ raku t.raku
===SORRY!=== Error while compiling t.raku
Calling add(Num, Num) will never work with declared signature (Int $x, Int $y)
at t.raku:5
------> say ⏏add(pi, e);
```

Nota quod Raku non convertet genera automatice etiam si possibile est in aliis casibus.

```raku
# say add('3', '4'); # Error
say '3' + '4'; # OK et est 7
```

%%tipblock
## Quomodo dicere si error est temporis compilationis
Si nuntius erroris incipit cum `===SORRY!=== Error while compiling`, significat errorem accidisse in tempore compilationis.
%%/tipblock

{% include nav.html %}