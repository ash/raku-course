---
title: Reduktaj metaoperatoroj
translations_gpt:
---

{% include menu.html %}

Redukta meta-operatoro estas skribata kiel ordinara operatoro ĉirkaŭita de kvadrataj krampoj, ekzemple `[+]` aŭ `[*]`. Ĝi prenas liston da valoroj kaj enmetas la operatoron inter ĉiun paron, reduktante la tutan liston al unu valoro.

Ekzemple, `[+]` sumigas ĉiujn elementojn de listo:

```raku
my @data = 3, 5, 7, 9, 11;
say [+] @data; # 35
```

La konstruo `[+] @data` egalas al mane skribi la operatoron:

```raku
say 3 + 5 + 7 + 9 + 11; # 35
```

Ajna taŭga infiksa operatoro funkcias same. Per `[*]` vi ricevas la produkton de la listo, do apliki ĝin al la gamo `1..$n` estas oportuna maniero kalkuli faktorialon:

```raku
my $n = 5;
say [*] 1..$n; # 120
```

Ĉi tie la gamo `1..$n` produktas la nombrojn de 1 ĝis 5, kaj `[*]` multobligas ilin: `1 * 2 * 3 * 4 * 5`, kio estas _5!_.

Ĉenkunigo ankaŭ funkcias. La redukto `[~]` kunigas liston da ĉenoj en unu:

```raku
my @strings = <neun hundert fünf und zwanzig>;
say [~] @strings; # neunhundertfünfundzwanzig
```

Eĉ komparaj operatoroj estas redukteblaj. `[<]` raportas ĉu la valoroj estas en strikte kreskanta ordo:

```raku
say [<] 1, 2, 3; # True
```

## Triangula redukto

Se vi metas retrokliniĝon ene de la krampoj, vi ricevas _triangulan_ redukton, kiu konservas ĉiujn intermediajn rezultojn anstataŭ nur la finan:

```raku
say [\+] 1..5; # (1 3 6 10 15)
```

Ĉiu elemento de la rezulto estas parta sumo: `1`, poste `1+2`, poste `1+2+3`, kaj tiel plu ĝis la sumo de la tuta listo.

{% include nav.html %}
