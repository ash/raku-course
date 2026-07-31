---
title: Congruentia avida et frugalis
translations_gpt:
---

{% include menu.html %}

Ex more quantificator _avidus_ est: tantum congruit quantum omnino potest dum reliquum exemplaris adhuc succedere sinit. Considera congruentiam a prima `<` ad aliquam `>`:

```raku
say '<a><b>' ~~ / '<' .+ '>' /; # ｢<a><b>｣
```

`.+` tantum devoravit quantum potuit, usque ad **ultimam** `>`, itaque congruentia per utrumque uncorum par currit.

Ut quantificatorem _frugalem_ reddas (etiam _pigrum_ vel _non avidum_ appellatum), adde `?` post eum. Quantificator frugalis **quam minimum** congruit:

```raku
say '<a><b>' ~~ / '<' .+? '>' /; # ｢<a>｣
```

Nunc `.+?` ad **primam** `>` consistit, itaque sola prima pars uncis inclusa congruit.

Suffixum `?` in quolibet quantificatore operatur: `*?` et `**?` quoque frugales sunt. Versiones avidae et frugales eadem genera textus congruunt — differunt solum quantum capiant cum electio est.

{% include nav.html %}
