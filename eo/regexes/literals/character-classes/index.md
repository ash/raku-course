---
title: Signoklasoj
translations_gpt:
---

{% include menu.html %}

Ofte vi volas kongruigi ne unu fiksitan signon sed ajnan signon el aro. Tia aro nomiĝas _signoklaso_ kaj estas skribata inter `<[` kaj `]>`:

```raku
say 'grey' ~~ / gr <[ae]> y /; # ｢grey｣
say 'gray' ~~ / gr <[ae]> y /; # ｢gray｣
```

La klaso `<[ae]>` kongruas kun unu signo, kiu estas aŭ `a` aŭ `e`, do ambaŭ literumoj de la koloro kongruas.

Ene de la krampoj vi povas listigi _intervalon_ per du punktoj:

```raku
say 'a1b2' ~~ / <[0..9]> /; # ｢1｣
```

`<[0..9]>` kongruas kun ajna unu cifero; la unua cifero en la ĉeno estas `1`.

Por kongruigi ajnan signon, kiu **ne** estas en la aro, metu minussignon tuj post la malferma krampo:

```raku
say 'stop!' ~~ / <-[a..z]> /; # ｢!｣
```

Ĉi tie `<-[a..z]>` kongruas kun la unua signo, kiu ne estas minusklo, kio estas la krisigno.

Vi povas kombini plurajn pecojn en unu klaso. Ekzemple, `<[a..z A..Z 0..9]>` kongruas kun litero aŭ cifero. La spacoj tie estas nur por legebleco — kiel ĉie en regulesprimo, spacoj ene de `<[…]>` estas ignorataj, do `<[a..zA..Z0..9]>` estas ekzakte la sama klaso.

{% include nav.html %}
