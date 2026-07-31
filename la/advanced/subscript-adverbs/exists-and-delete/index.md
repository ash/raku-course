---
title: Exists et delete
---

{% include menu.html %}

Adverbium `:exists` subscriptum in quaestionem vertit: estne valor sub hac clave vel indice? Valorem Booleanum reddit sine ullo valore obtento:

```raku
my %h = apple => 1, pear => 2;

say %h<apple>:exists; # True
say %h<plum>:exists;  # False
```

Hic est rectus modus clavem probandi, quia simplex lectio `%h<plum>` vel valorem indefinitum redderet, vel, secundum data, differentiam inter "absentem" et "praesentem sed indefinitum" celaret.

Adverbium `:delete` introitum removet et valorem quem continebat reddit:

```raku
my %h = apple => 1, pear => 2;

say %h<apple>:delete; # 1
say %h.keys;          # (pear)
say %h;               # {pear => 2}
```

Introitus `apple` ablatus est, et valor deletus `1` redditur ut eo uti possis.

Ambo adverbia etiam in ordinibus operantur, per indicem:

```raku
my @a = 10, 20, 30;

say @a[1]:exists; # True
say @a[5]:exists; # False

say @a[1]:delete; # 20
say @a[1]:exists; # False
```

Si scire vis quomodo ordo post medium item deletum appareat, hic est responsio:

```raku
say @a; # [10 (Any) 30]
```

Itaque una et constans notatio tibi permittit continentia quaerere et in loco mutare, potius quam methodos separatas adhibere.

{% include nav.html %}
