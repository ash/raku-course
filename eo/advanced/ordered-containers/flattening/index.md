---
title: Platigo kaj ero-igo
translations_gpt:
---

{% include menu.html %}

Kiam vi metas unu tabelon en alian, Raku _ne_ aŭtomate kunfandas iliajn elementojn. Ekzamenu la jenan programon:

```raku
my @a = 1, 2, 3;
my @b = 4, 5;
my @c = @a, @b;

say @c.elems; # 2
say @c;       # [[1 2 3] [4 5]]
```

La tabelo `@c` havas nur du elementojn: la tabelojn `@a` kaj `@b`. Raku konservas ĉiun ujon kiel unuopan eron anstataŭ disverŝi ĝian enhavon en la eksteran tabelon. La samo okazas por valoro metita inter aliajn:

```raku
my @a = 1, 2, 3;
my @d = 0, @a, 99;
say @d; # [0 [1 2 3] 99]
```

Kiam vi efektive volas unu solan platan sekvencon, petu ĝin eksplicite per la rutino `flat`:

```raku
my @a = 1, 2, 3;
my @b = 4, 5;

say flat(@a, @b);       # (1 2 3 4 5)
say flat(@a, @b).elems; # 5
```

## Ero-igo

Foje vi volas la malon: protekti ujon kontraŭ platigo, eĉ ene de `flat`. La konstruo `$(...)` _ero-igas_ sian argumenton — ĝi markas la rezulton kiel unuopan eron. Komparu la antaŭan ekzemplon kun ĉi tiu:

```raku
my @a = 1, 2, 3;
my @b = 4, 5;

say flat($(@a), @b); # ([1 2 3] 4 5)
```

Ĉi tie `$(@a)` konservas `@a` kiel unu elementon, dum `@b` ankoraŭ estas platigita en siajn du valorojn. Jen denove la ideo de la sigelo `$`: `$` signifas «traktu ĉi tion kiel unu solan aĵon».

{% include nav.html %}
