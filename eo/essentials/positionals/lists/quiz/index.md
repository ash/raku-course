---
title: Kvizo 2 — Listo kaj skalaro vs. listo kaj aro
---

{% include menu.html %}

Estas listoj ĉe la dekstra flanko en la subaj asignoj. Objektoj de kiu tipo la variabloj tenas?

### 1

```raku
my $x = (100, 200, 300);
my @x = (100, 200, 300);

say $x.WHAT;
say @x.WHAT;
```

Elektu la ĝustajn respondojn:

{:.quiz-select}
(Listo) | La tipo de `$x` estas&nbsp; (: (Aro), (Int), (Listo) :)
(Aro) | La tipo de `@x` estas&nbsp; (: (Aro), (Int), (Listo) :)

## 2*

Jen pli komplika kazo. Ne zorgu se vi ne komprenas ĝin nun. Ni revenos al ĉi tiu temo en la dua parto de la kurso.

```raku
my $x = [100, 200, 300];
my @x = [100, 200, 300];

say $x.WHAT;
say @x.WHAT;
```

Elektu la ĝustajn respondojn:

{:.quiz-select}
(Aro) | La tipo de `$x` estas&nbsp; (: (Aro), (Int), (Listo) :)
(Aro) | La tipo de `@x` estas&nbsp; (: (Aro), (Int), (Listo) :)

{% include quiz.html %}

{% include nav.html %}