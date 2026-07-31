---
title: '`WHO` et `HOW`'
translations_gpt: '`WHO` et `HOW`'
---

{% include menu.html %}

Duo plura instrumenta introspectionis seriem complent: `HOW` et `WHO`.

## `HOW`

Omnis valor in Raku _metaobiecto_ sustinetur — obiecto quod scit quomodo typus valoris operatur. `HOW` (abbreviatio pro _Higher Order Workings_) illud metaobiectum reddit:

```raku
my $x = 42;
say $x.HOW.^name; # Perl6::Metamodel::ClassHOW
```

Metaobiecto iam per totum tempus usus es, fortasse sine animadversione. `.^` in `.^name` est vocatio methodi per `HOW` directa. Hae duae lineae aequivalentes sunt:

```raku
my $x = 42;
say $x.^name;        # Int
say $x.HOW.name($x); # Int
```

Ergo `$x.^name` est tantum brevior modus scribendi `$x.HOW.name($x)`. Nota obiectum iterum ut argumentum transmitti: metaobiectum ab omni valore typi _communicatur_, ergo meta-methodo dicitur de quo obiecto interrogetur. Forma `.^` hoc automatice pro te facit. (Pro `name` argumentum casu ignoratur, sed transmittere eum est forma correcta et generalis — aliquae meta-methodi eo utuntur.)

Idem ad alias meta-methodos quas invenire potes applicatur, sicut `.^methods`, quae methodos quibus valor respondet enumerat.

## `WHO`

`WHO` _fasciculum_ reddit cui nomen pertinet — tabulam symbolorum in illo spatio nominum definitorum:

```raku
say Int.WHO.^name; # Stash
```

`Stash` (tabula symbolorum in forma hash) utilis fit cum modulis operaris, ubi nomina quae modulus definit inspicere sinit. Ad eam in [sectione de introspectione modulorum](/la/advanced/module-introspection) redibimus; nunc satis est scire `WHO` exsistere et quid repraesentet.

{% include nav.html %}
