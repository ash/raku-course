---
title: Tipoj de Raku-operatoroj
translations_gpt:
---

{% include menu.html %}

Vi jam uzis multajn operatorojn — `+`, `~`, `++` kaj tiel plu. En Raku, operatoroj estas klasifikitaj laŭ tio, _kie_ ili sidas rilate al siaj operandoj. Koni la kategoriojn helpas poste, kiam vi difinas proprajn operatorojn.

## `prefix`

Prefiksa operatoro venas _antaŭ_ unu sola operando:

```raku
my $x = 5;
say -$x; # -5
say ?$x; # True
```

Ĉi tie `-` negas la nombron kaj `?` transformas valoron en ĝian Boolean valoron.

## `infix`

Infiksa operatoro sidas _inter_ du operandoj. La plej multaj el la konataj aritmetikaj kaj ĉenaj operatoroj estas infiksaj:

```raku
say 3 + 4;       # 7
say 'a' ~ 'b';   # ab
```

Infiksa operatoro ne ĉiam estas interpunkcia simbolo — ĝi povas esti vorto. La operatoro `gcd`, kiun vi renkontis ĉe [entjeroj](/eo/advanced/integers), ekzemple, estas infiksa operatoro skribata kiel nomo inter siaj du operandoj:

```raku
say 12 gcd 18;   # 6
```

## `postfix`

Postfiksa operatoro venas _post_ unu sola operando:

```raku
my $x = 5;
$x++;
say $x; # 6
```

## `circumfix` kaj `postcircumfix`

Ĉirkaŭfiksa operatoro _ĉirkaŭas_ sian operandon. La rektaj krampoj, kiuj konstruas tabelon, estas ĉirkaŭfiksa operatoro:

```raku
my @a = [1, 2, 3];
```

Post-ĉirkaŭfiksa operatoro ĉirkaŭas ion sed sekvas terminon. Subskribado estas post-ĉirkaŭfiksa operatoro — la `[1]` post `@a`:

```raku
my @a = 10, 20, 30;
say @a[1]; # 20
```

Ĉi tiuj nomoj — `prefix`, `infix`, `postfix`, `circumfix` kaj `postcircumfix` — estas la samaj vortoj, kiujn Raku uzas, kiam vi [deklaras novan operatoron](/eo/advanced/user-defined-operators), kiel vi vidos poste.

{% include nav.html %}
