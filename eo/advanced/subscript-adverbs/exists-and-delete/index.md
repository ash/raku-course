---
title: Ekzistas kaj forigi
translations_gpt:
---

{% include menu.html %}

La adverbo `:exists` transformas subskribon en demandon: ĉu estas valoro ĉe ĉi tiu ŝlosilo aŭ indekso? Ĝi redonas Boolean valoron sen preni ion ajn:

```raku
my %h = apple => 1, pear => 2;

say %h<apple>:exists; # True
say %h<plum>:exists;  # False
```

Jen la ĝusta maniero testi ŝlosilon, ĉar simple legi `%h<plum>` aŭ redonus nedifinitan valoron aŭ, depende de la datumoj, kaŝus la diferencon inter «mankanta» kaj «ĉeestanta sed nedifinita».

La adverbo `:delete` forigas la eron kaj redonas la valoron, kiun ĝi tenis:

```raku
my %h = apple => 1, pear => 2;

say %h<apple>:delete; # 1
say %h.keys;          # (pear)
say %h;               # {pear => 2}
```

La ero `apple` malaperis, kaj la forigita valoro `1` estas redonita, por ke vi povu uzi ĝin.

Ambaŭ adverboj funkcias ankaŭ sur tabeloj, laŭ indekso:

```raku
my @a = 10, 20, 30;

say @a[1]:exists; # True
say @a[5]:exists; # False

say @a[1]:delete; # 20
say @a[1]:exists; # False
```

Se vi scivolas, kiel la tabelo aspektos post kiam meza ero estas forigita, jen la respondo:

```raku
say @a; # [10 (Any) 30]
```

Do unu sola, konsekvenca notacio permesas al vi pridemandi kaj modifi ujojn surloke, anstataŭ atingi apartajn metodojn.

{% include nav.html %}
