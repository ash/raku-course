---
title: Nekaptaj grupoj
translations_gpt:
---

{% include menu.html %}

Rondaj krampoj `( )` faras du laborojn samtempe: ili _grupigas_ parton de la ŝablono kaj ili _kaptas_ ĝin en `$0`, `$1` kaj tiel plu. Foje vi volas nur la unuan laboron — trakti plurajn atomojn kiel unu solan unuon — sen elspezi kaptonumeron por ĝi. Por tio, uzu rektajn krampojn `[ ]`, kiuj grupigas **sen** kapti.

Grupigo gravas tuj kiam vi alfiksas kvantoron. Kvantoro ligiĝas nur al la atomo tuj antaŭ ĝi, do la suba ŝablono ripetas nur la finan literon:

```raku
say 'abccc' ~~ / abc ** 3 /; # ｢abccc｣
```

Nur la `c` estis ripetita trifoje. Envolvu la tutan pecon en `[ ]` por ripeti ĉion:

```raku
say 'abcabcabc' ~~ / [ abc ] ** 3 /; # ｢abcabcabc｣
```

Nun `[ abc ]` estas unu unuo, kaj `** 3` aplikiĝas al la grupo.

Ĉar `[ ]` prenas neniun kaptolokon, la numeroj restas rezervitaj por la partoj, pri kiuj vi efektive zorgas. Komparu simplan ŝlosil-valoran kongruon:

```raku
if 'foo=42' ~~ / (\w+) '=' (\d+) / {
    say $0; # ｢foo｣
    say $1; # ｢42｣
}
```

Supozu, ke la ŝlosilo povas esti antaŭata de vorto, kiun vi volas preterlasi. Grupigu tiun prefikson per `[ ]`, por ke ĝi ne ĝenu la numeradon:

```raku
if 'the foo=42' ~~ / [ \w+ \s ]? (\w+) '=' (\d+) / {
    say $0; # ｢foo｣
    say $1; # ｢42｣
}
```

La nedeviga `[ \w+ \s ]?` kongruis kun `the `, sed pretendis neniun kapton, do `$0` ankoraŭ estas la ŝlosilo kaj `$1` ankoraŭ estas la valoro. Se vi estus skribinta tiun prefikson per `( )`, ĉio estus ŝoviĝinta: la prefikso fariĝus `$0`, la ŝlosilo `$1`, kaj la valoro `$2`.

La regulo estas mallonga: uzu `( )`, kiam vi volas konservi la kongruintan tekston, kaj `[ ]`, kiam vi volas nur grupigi. Ambaŭ specoj akceptas kvantorojn kaj alternativojn, kial la pli frua alternativo `[ cat | dog ] house` uzis rektajn krampojn — ĝi bezonis la grupigon sed ne alian kapton.

{% include nav.html %}
