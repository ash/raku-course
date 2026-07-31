---
title: Nestitaj subrutinaj
translations_gpt:
---

{% include menu.html %}

Subprogramo povas esti difinita _ene de_ alia subprogramo. Nestita subprogramo estas normala subprogramo, sed ĝi estas videbla nur ene de la subprogramo, kiu enhavas ĝin.

```raku
sub outer {
    sub inner {
        say 'I am the inner subroutine';
    }

    inner;
}

outer;
```

La programo presas:

```
I am the inner subroutine
```

Ĉi tie `inner` estas deklarita ene de `outer`, kaj `outer` vokas ĝin. Tio funkcias, ĉar `inner` estas en la videbla amplekso tra la tuta korpo de `outer`.

Ekster `outer` tamen, la nomo `inner` ne ekzistas. La sekva programo malsukcesas kompili:

```raku
sub outer {
    sub inner { 42 }
}

inner; # error: Undeclared routine: inner
```

Nestado estas utila, kiam helpanta subprogramo estas bezonata de nur unu subprogramo. Konservi ĝin ene klaras, ke ĝi estas privata detalo, kaj malhelpas ĝin esti vokita de aliloke erare.

{% include nav.html %}
