---
title: Multi-functions
---

{% include menu.html %}

Raku implementat _multiplicem distributionem_ secundum functionis signaturam. Permittit creare functiones quae nomen communicant sed diversos generum inputorum habent. Utere `multi` declaratore pro singulis variantibus functionis.

```raku
multi sub add(Int $x, Int $y) { $x + $y }
multi sub add(Str $x, Str $y) { $x ~ $y }
```

(Bene est omittere `sub` post `multi`.)

Si duas variantes eiusdem functionis habes, compilator multiplicem distributionem facit secundum argumenta quae in vocatione functionis videt. Compara sequentes duas vocationes:

```raku
say add(10, 20); # 30
say add('10', '20'); # 1020
```

Prima vocatio functionem cum parametris integris excitat, dum secunda vocatio alteram variantem functionis quae duos chordas exspectat currit.

## Literales parametri

Casu interessante pro multi-functionibus est habere variantes quae valores literales ut parametros habent. Considera sequentes duas variantes:

```raku
multi sub f(42) {say 'Hoc est responsum'}
multi sub f($x) {say "$x non est responsum"}
```

Prima varians solum curritur cum functionem cum exacto valore 42 vocas. In aliis casibus, secunda varians adhibetur. Ordo in quo hae functiones definiuntur non refert.

```raku
f(10); # 10 non est responsum
f(42); # Hoc est responsum
```

{% include nav.html %}