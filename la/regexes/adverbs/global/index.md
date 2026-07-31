---
title: Congruentia universalis
translations_gpt:
---

{% include menu.html %}

Ex more regex solam **primam** congruentiam invenit. Adverbium `:g` (breviter pro `:global`) **omnem** congruentiam in catena invenit. In operatore `m///` scribitur:

```raku
my @all = 'a1b2c3' ~~ m:g/\d/;
say @all;       # [｢1｣ ｢2｣ ｢3｣]
say @all.elems; # 3
```

Cum `:g` effectus ut series obiectorum congruentiae se gerit — unum pro unoquoque loco ubi exemplar inventum est. Ea numerare, per ea percurrere, vel unumquodque in catenam vertere potes:

```raku
my @numbers = 'a12 b3 c456' ~~ m:g/\d+/;
say @numbers.map(*.Str).join(', '); # 12, 3, 456
```

Hic `\d+` tres separatas cifrarum series congruit, et `:g` omnes collegit.

Congruentia universalis instrumentum naturale est quotiens quaestio est «quot …» vel «omnes …» potius quam «estne …».

{% include nav.html %}
