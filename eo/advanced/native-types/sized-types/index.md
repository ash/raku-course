---
title: Grandecaj tipoj kaj superfluo
translations_gpt:
---

{% include menu.html %}

Krom la simpla `int`, Raku havas entjerojn kun fiksa bitlarĝo: `int8`, `int16`, `int32`, `int64` kaj iliajn sensignajn partnerojn `uint8`, `uint16`, `uint32`, `uint64`. La nombro indikas, kiom da bitoj la valoro okupas.

Fiksa larĝo signifas fiksan amplekson. `int8` enhavas valorojn de `-128` ĝis `127`; `uint8` enhavas `0` ĝis `255`. Ĉar la stokado ne povas kreski, transiri la supron ĉirkaŭvolvas al la malsupro — tio estas _superfluo_:

```raku
my int8 $i = 127;
$i++;
say $i; # -128
```

Aldoni unu al la plej granda `int8` ne produktas `128` (kiu ne konvenus); ĝi ĉirkaŭvolvas al la plej malgranda valoro, `-128`. Sensignaj tipoj ankaŭ ĉirkaŭvolvas:

```raku
my uint8 $u = 255;
$u++;
say $u; # 0
```

Tio estas la malo de normala `Int`, kiu simple kreskas tiel grande kiom necese kaj neniam superfluiĝas. La kompromiso estas la tuta celo de grandigitaj indiĝenaj tipoj: vi akceptas fiksan amplekson kontraŭ antaŭvidebla, kompakta, rapida stokado.

Uzu grandigitan indiĝenan tipon kiam vi konas la amplekson de viaj datumoj kaj volas la efikecon — ekzemple, bajtojn de binaraj datumoj en `uint8`-tabelo. Por ordinara aritmetiko, kie nombroj povas kreski senlime, restu ĉe `Int`.

{% include nav.html %}
