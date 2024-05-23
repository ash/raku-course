---
title: Numeri rationales in Raku
---

{% include menu.html %}

Numeri rationales sunt proprietas singularis Raku. Typus datae `Rat` tales numeros repraesentat.

Interno, numeri rationales sunt fractiones cum duabus partibus integris: numerator et denominator. Ita, facile potes numeros ut 1/3 sine precisione amittere praesentare.

Sunt aliquot modi ad scribendum numerum `Rat` in programmate in Raku:

```raku
my $x = 1/2;
my $y = <2/3>;
```

Nota quod virgula hic est pars notationis. Non est operator divisionis, ita `1/2` non significat quod divides 1 per 2. In imprimendo, tamen, rationales monstrantur ut numeri decimales vel integri:

```raku
say 1/2; # 0.5
say 3/4; # 0.75
```

Pars lineae post symbolum `#` est commentarium et a compilatore ignoratur. Talia commentaria in cursu adhibebuntur ad ostendendum exitum programmatis.

## Forma decimale

Gravis est intellegere quod cum scribis numerum in forma decimali, e.g., `0.5`, Raku creat numerum `Rat` eo momento. Non est integer, sed nec est numerus puncti fluitantis (`float` vel `double` in aliis linguis). Est adhuc numerus rationalis!

Considera sequentem exemplum:

```raku
say 0.1 + 0.2 - 0.3;
```

Si lingua programmandi utitur arithmeticis puncti fluitantis pro his calculationibus, eventus non erit aequalis 0. Situs interretialis [0.30000000000000004.com](https://0.30000000000000004.com) dat exhaustivam enumerationem exemplorum ubi arithmetica puncti fluitantis non dat eventum expectatum.

Sed Raku imprimit exactum `0`. Hoc fit quia tractat numeros `0.1`, `0.2`, et `0.3` ut numeros rationales et eos servat ut `1/10`, `2/10`, et `3/10` interno. Exsequere ex linea mandatorum ut id confirmes:

```console
$ raku -e 'say 0.1 + 0.2 - 0.3'
0
```

## Forma Unicode

Etiam possibile est uti characteribus Unicode qui fractiones repraesentant, ut `½` vel `¼` vel `¾`. Forsitan, non semper facile est eos typis exprimere cum claviatura, sed hae fractiones sunt prorsus eadem valores ac versiones ASCII scriptas ut fractio vel ut numerus decimale:

`½` | `1/2` | `<1/2>` | `0.5`
`¼` | `1/4` | `<1/4>` | `0.25`
`¾` | `3/4` | `<3/4>` | `0.75`

Cum aliquibus fractionibus, ut `1/3`, pauciores optiones habes, `⅓` vel `<1/3>`, quia forma decimale infinitum numerum digitorum requireret.

{% include nav.html %}