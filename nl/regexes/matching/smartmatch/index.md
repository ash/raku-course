---
title: De smartmatch-operator
translations_gpt:
---

{% include menu.html %}

De operator die een regex op een string toepast is de smartmatch `~~`:

```raku
say 'the cat sat' ~~ /cat/; # ｢cat｣
```

Een patroon tussen schuine strepen is de gebruikelijkste vorm, maar er zijn er nog twee die hetzelfde betekenen en soms duidelijker zijn:

```raku
say 'the cat sat' ~~ m/cat/;  # ｢cat｣
say 'the cat sat' ~~ rx/cat/; # ｢cat｣
```

De vorm `m/.../` benadrukt dat je aan het _matchen_ bent, en is handig wanneer je opties aan de match wilt toevoegen (die opties, [_bijwoorden_](/nl/regexes/adverbs) genoemd, kom je later tegen). De vorm `rx/.../` bouwt een regexwaarde zonder hem al te matchen.

Heel vaak geeft het je alleen om de vraag of de string matchte, niet om wat er precies gevonden is. Omdat een geslaagde match een ware waarde is en een mislukte match onwaar, kun je het resultaat rechtstreeks in een booleaanse context gebruiken. De nette manier om een simpele `True` of `False` te krijgen is de functie `so`:

```raku
say so 'the cat sat' ~~ /cat/; # True
say so 'the cat sat' ~~ /dog/; # False
```

Zo wordt een regex een natuurlijke voorwaarde voor `if`:

```raku
if 'the cat sat' ~~ /cat/ {
    say 'found it';   # found it
}
```

{% include nav.html %}
