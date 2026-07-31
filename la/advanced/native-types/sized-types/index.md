---
title: Typi cum magnitudine et superfluentia
translations_gpt:
---

{% include menu.html %}

Praeter simplicem `int`, Raku integros latitudinis bitorum fixae habet: `int8`, `int16`, `int32`, `int64`, et eorum socios non signatos `uint8`, `uint16`, `uint32`, `uint64`. Numerus indicat quot bitos valor occupat.

Latitudo fixa significat ambitum fixum. `int8` valores a `-128` ad `127` continet; `uint8` continet `0` ad `255`. Quia repositorium crescere non potest, transire ultra summum ad imum circumvolvitur — hic est _superfluxus_:

```raku
my int8 $i = 127;
$i++;
say $i; # -128
```

Unum addere ad maximum `int8` non producit `128` (quod non caperet); circumvolvitur ad minimum valorem, `-128`. Typi non signati quoque circumvolvuntur:

```raku
my uint8 $u = 255;
$u++;
say $u; # 0
```

Hoc contrarium est normalis `Int`, qui simpliciter tam magnus crescit quantum opus est et numquam superfluit. Hoc compromissum est totum propositum nativorum dimensorum: ambitum fixum acceptas pro repositorio praedictabili, compacto, celeri.

Typum nativum dimensum adhibe cum ambitum datorum tuorum cognoscis et efficientiam vis — exempli gratia, bytes datorum binariorum in indice `uint8`. Pro arithmetica ordinaria ubi numeri sine limite crescere possunt, `Int` adhibe.

{% include nav.html %}
