---
title: Normaj fluoj
translations_gpt:
---

{% include menu.html %}

Ĉiu programo havas tri _normajn fluojn_, kiuj konektas ĝin al ĝia medio: norman eligon, norman erarfluon kaj norman enigon. Raku disponigas ilin per tri specialaj variabloj: `$*OUT`, `$*ERR` kaj `$*IN`.

Vi skribadis al norma eligo la tutan tempon: `say` kaj `print` sendas sian tekston al `$*OUT`.

```raku
say 'Hello'; # iras al norma eligo
```

Diagnozaj kaj eraraj mesaĝoj estas tenataj aparte, sur norma erarfluo, por ke ili ne miksiĝu en la veran eligon de la programo. La rutino `note` skribas tien:

```raku
note 'Something looks wrong'; # iras al norma erarfluo
```

Ĉi tiu apartigo estas utila, ĉar la du fluoj povas esti redirektitaj sendepende — ekzemple, vi povas konservi la eligon de programo en dosieron dum vi ankoraŭ vidas ĝiajn erarmesaĝojn sur la ekrano.

Vi ankaŭ povas skribi al la fluoj rekte. Ĉiu el `$*OUT` kaj `$*ERR` estas _tenilo_ kun siaj propraj metodoj `say` kaj `print`:

```raku
$*OUT.say('a normal line');
$*ERR.say('a diagnostic line');
```

La tria fluo, `$*IN`, estas norma enigo. Vi renkontis ĝin nerekte per `prompt`, kiu legas linion el ĝi. Ni revenos al legado de enigo, kiam ni rigardos [dosiertenilojn](/eo/oop/file-handles), ĉar `$*IN` estas tenilo same kiel malfermita dosiero.

{% include nav.html %}
