---
title: Literaloj kaj signoklasoj
translations_gpt:
---

{% include menu.html %}

_Regulesprimo_ (angle _regex_, mallongigo de _regular expression_) estas ŝablono, kiu priskribas pecon de teksto. Per regulesprimo vi povas fari demandojn kiel «ĉu ĉi tiu ĉeno enhavas nombron?» aŭ «ĉu ĉi tiu vorto komenciĝas per majusklo?», kaj vi povas eltiri pecojn el ĉeno aŭ ŝanĝi ilin.

Raku havas precipe potencajn kaj legeblajn regulesprimojn, kaj ili estas konstruitaj rekte en la lingvon. La plej simpla maniero skribi unu estas inter du oblikvoj:

```raku
/cat/
```

Ĉi tiu ŝablono kongruas kun la tri literoj `c`, `a`, `t` sinsekve. Por testi ĉenon kontraŭ ŝablono, uzu la operatoron de sagaca kongruigo `~~`:

```raku
say 'the cat sat' ~~ /cat/; # ｢cat｣
```

Kiam la ŝablono estas trovita, Raku raportas la parton de la ĉeno, kiu kongruis, montratan inter la angulaj krampoj `｢ ｣`. Vi rigardos ĉi tiun rezulton pli detale en la sekva sekcio.

En ĉi tiu unua sekcio vi lernos, kiel kongruigi ekzaktan (_laŭliteran_) tekston, kaj kiel kongruigi signon, kiu povas esti unu el pluraj — _signoklason_. La sekvaj sekcioj poste aldonas [kvantorojn](/eo/regexes/quantifiers), [kaptojn](/eo/regexes/captures), kaj ĉion alian, kio faras regulesprimojn tiel utilaj.

{% include nav.html %}
