---
title: Introspekto kun `WHAT`
---

{% include menu.html %}

Eblas vidi la tipon de datumoj en variablo vokante la metodon `WHAT` sur ĝi:

```raku
my $n = 42;
my $s = '42';
say $n.WHAT; # (Int)
say $s.WHAT; # (Str)
```

La tipo estas presita en krampoj, kiel montrite en la komentoj. Ekzemple, `(Int)` aŭ `(Str)`.

Ne estas problemo voki metodon sur literalo mem. Ekzemple:

```raku
say 42.WHAT;      # (Int)
say (-1).WHAT;    # (Int)
say 'Hello'.WHAT; # (Str)
say True.WHAT;    # (Bool)
```

Rimarku, ke en la kazo de `-1`, ni metas la numeron en krampoj, ĉar `say -1.WHAT` provus nei la rezulton de `1.WHAT`, kio kondukas al escepto.

{% include nav.html %}