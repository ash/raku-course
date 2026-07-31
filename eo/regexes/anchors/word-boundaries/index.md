---
title: Vortlimoj
translations_gpt:
---

{% include menu.html %}

Kongruigi `cat` sukcesas ene de `category`, ĉar la tri literoj vere estas tie. Ofte tio ne estas, kion vi volas — vi celas la tutan vorton `cat`. Ankro de _vortlimo_ solvas tion.

* `<<` kongruas ĉe la **maldekstra** rando de vorto (la komenco de vorto)
* `>>` kongruas ĉe la **dekstra** rando de vorto (la fino de vorto)

Envolvu vorton en ĉi tiujn ankrojn por kongrui kun ĝi nur kiel kompleta vorto:

```raku
say 'the cat sat' ~~ /<< cat >>/;    # ｢cat｣
say so 'category'  ~~ /<< cat >>/;   # False
```

En `category` ne estas vortlimo tuj post `cat`, do la ankrita ŝablono malsukcesas — ĝuste la konduto, kiun ni volis.

Vortlimo sidas inter vorta signo (`\w`) kaj nevorta signo, do ĝi mem konsumas nenion; kiel `^` kaj `$`, ĝi nur asertas pozicion.

La du ankroj ankaŭ povas esti skribitaj per la citilaj signoj `«` kaj `»`, se vi preferas ilin. Ili kondutas ekzakte kiel `<<` kaj `>>`:

```raku
say 'the cat sat' ~~ /« cat »/;  # ｢cat｣
say so 'category'  ~~ /« cat »/;  # False
```

{% include nav.html %}
