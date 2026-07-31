---
title: Rulado de testoj
---

{% include menu.html %}

Ununura testodosiero estas simple Raku-programo, do vi povas ruli ĝin rekte:

```
raku t/01-basic.rakutest
```

Ĝi presas sian TAP-eligon al la ekrano. Por pli ol unu aŭ du dosieroj, vi bezonas _testorulanton_, kiu rulas tutan dosierujon de testoj kaj resumas la rezultojn. La rulanto de Raku estas `prove6`:

```
prove6 t/
```

Tio rulas ĉiun testodosieron sub `t/` kaj raportas kiom da dosieroj kaj testoj sukcesis, kun unu ĝenerala sukceso/malsukceso ĉe la fino — multe pli facile legebla ol la kruda TAP el ĉiu dosiero.

Kiam distribuo havas `META6.json`, la modula ilo rulas ĝiajn testojn por vi:

```
zef test .
```

`zef test` trovas la dosierujon `t/`, rulas la testoserio kaj raportas la rezulton — kio estas ĝuste tio, kio aŭtomate okazas antaŭ ol distribuo estas instalita. Do testoj servas duoblan celon: vi rulas ilin dum evoluigo per `prove6`, kaj la ekosistemo rulas ilin por kontroli distribuon antaŭ ol iu ajn instalas ĝin.

> Testodosieroj estas nomataj kun la sufikso `.rakutest` (aŭ `.t`) kaj konvencie numeritaj, ekzemple `t/01-basic.rakutest`.

{% include nav.html %}
