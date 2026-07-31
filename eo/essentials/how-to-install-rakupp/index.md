---
title: Kiel instali Raku++ 🆕
translations_gpt:
---

{% include menu.html %}

Raku++ estas distribuata per sia deponejo en GitHub, [github.com/ash/rakupp](https://github.com/ash/rakupp). Instali ĝin donas al vi unu solan rulebladosieron nomatan `rakupp`.

## Binaraĵoj

Pretaj binaraĵoj de la nuna eldono disponeblas por Vindozo, macOS kaj Linukso. Elŝutu tiun por via operaciumo el la eldona paĝo de la deponejo — estas nenio alia por agordi, ĉar Raku++ havas neniun apartan virtualan maŝinon por instali.

## Konstruado el la fontkodo

Ĉar Raku++ estas skribita en C++, vi ankaŭ povas konstrui ĝin mem el la fontkodo en la deponejo. La deponejo klarigas, kiujn ilojn vi bezonas kaj kiel kompili ĝin.

## Versiaj numeroj

Vi povas kontroli, kiun version vi havas, per la opcio `--version`:

```console
$ rakupp --version
Raku++ (rakupp) 1.5.2 — a Raku interpreter and compiler in C++ (implements Raku 6.d, with 6.e features)
```

La linio diras al vi la eldonon de Raku++ mem (`1.5.2`) kaj kiun version de la lingvo Raku ĝi celas (`6.d`, kun kelkaj funkcioj de `6.e`). Komparu tion kun la versia mesaĝo de Rakudo en la [paĝo pri instalado de Rakudo](/eo/essentials/how-to-install-rakudo) por vidi, kiel la du kompililoj raportas sin.

{% include nav.html %}
