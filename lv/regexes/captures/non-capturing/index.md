---
title: Grupas bez tvēruma
translations_gpt:
---

{% include menu.html %}

Apaļās iekavas `( )` dara divus darbus uzreiz: tās _sagrupē_ raksturā daļu un _satver_ to `$0`, `$1` un tā tālāk. Dažreiz vēlaties tikai pirmo darbu — uztvert vairākus atomus kā vienu vienību —, netērējot tam tvēruma numuru. Tam izmantojiet kvadrātiekavas `[ ]`, kas grupē **bez** tveršanas.

Grupēšanai ir nozīme, tiklīdz piekabināt kvantoru. Kvantors saistās tikai ar atomu, kas ir tieši pirms tā, tāpēc zemāk redzamais raksturs atkārto tikai pēdējo burtu:

```raku
say 'abccc' ~~ / abc ** 3 /; # ｢abccc｣
```

Trīs reizes tika atkārtots tikai `c`. Ietiniet visu gabalu `[ ]`, lai atkārtotu to visu:

```raku
say 'abcabcabc' ~~ / [ abc ] ** 3 /; # ｢abcabcabc｣
```

Tagad `[ abc ]` ir viena vienība, un `** 3` attiecas uz grupu.

Tā kā `[ ]` neaizņem tvēruma vietu, numuri paliek rezervēti tām daļām, kas jums patiešām rūp. Salīdziniet vienkāršu atslēgas un vērtības sakritību:

```raku
if 'foo=42' ~~ / (\w+) '=' (\d+) / {
    say $0; # ｢foo｣
    say $1; # ｢42｣
}
```

Pieņemsim, ka pirms atslēgas var būt vārds, ko vēlaties izlaist. Sagrupējiet šo priedēkli ar `[ ]`, lai tas netraucētu numerāciju:

```raku
if 'the foo=42' ~~ / [ \w+ \s ]? (\w+) '=' (\d+) / {
    say $0; # ｢foo｣
    say $1; # ｢42｣
}
```

Neobligātais `[ \w+ \s ]?` sakrita ar `the `, taču nepieprasīja nevienu tvērumu, tāpēc `$0` joprojām ir atslēga un `$1` joprojām ir vērtība. Ja šo priedēkli būtu uzrakstījis ar `( )`, viss būtu pabīdījies: priedēklis kļūtu par `$0`, atslēga par `$1` un vērtība par `$2`.

Likums ir īss: izmantojiet `( )`, kad vēlaties paturēt sakritušo tekstu, un `[ ]`, kad vēlaties tikai sagrupēt. Abi veidi pieņem kvantorus un alternatīvas, un tieši tāpēc agrākā alternatīva `[ cat | dog ] house` izmantoja kvadrātiekavas — tai bija vajadzīga grupēšana, nevis vēl viens tvērums.

{% include nav.html %}
