---
title: La operatoro de sagaca kongruigo
translations_gpt:
---

{% include menu.html %}

La operatoro, kiu aplikas regulesprimon al ĉeno, estas la sagaca kongruigo `~~`:

```raku
say 'the cat sat' ~~ /cat/; # ｢cat｣
```

Ŝablono skribita inter oblikvoj estas la plej ofta formo, sed estas du pliaj, kiuj signifas la samon kaj foje estas pli klaraj:

```raku
say 'the cat sat' ~~ m/cat/;  # ｢cat｣
say 'the cat sat' ~~ rx/cat/; # ｢cat｣
```

La formo `m/.../` emfazas, ke vi _kongruigas_, kaj estas oportuna, kiam vi volas aldoni opciojn al la kongruo (vi renkontos tiujn opciojn, nomatajn [_adverboj_](/eo/regexes/adverbs), poste). La formo `rx/.../` konstruas regulesprimon kiel valoron sen ankoraŭ kongruigi ĝin.

Tre ofte vi zorgas nur, ĉu la ĉeno kongruis, ne kio ekzakte estis trovita. Ĉar sukcesa kongruo estas vera valoro kaj malsukcesa kongruo estas malvera, vi povas uzi la rezulton rekte en Boolea kunteksto. La plej pura maniero ricevi simplan `True` aŭ `False` estas la funkcio `so`:

```raku
say so 'the cat sat' ~~ /cat/; # True
say so 'the cat sat' ~~ /dog/; # False
```

Tio faras regulesprimon natura kondiĉo por `if`:

```raku
if 'the cat sat' ~~ /cat/ {
    say 'found it';   # found it
}
```

{% include nav.html %}
