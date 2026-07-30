---
title: Letterlijke tekst en tekenklassen
translations_gpt:
---

{% include menu.html %}

Een _regex_ (kort voor _reguliere expressie_) is een patroon dat een stuk tekst beschrijft. Met een regex kun je vragen stellen als "bevat deze string een getal?" of "begint dit woord met een hoofdletter?", en je kunt stukken uit een string halen of ze veranderen.

Raku heeft bijzonder krachtige en leesbare regexes, en ze zitten regelrecht in de taal ingebouwd. De eenvoudigste manier om er een te schrijven is tussen twee schuine strepen:

```raku
/cat/
```

Dit patroon matcht de drie letters `c`, `a`, `t` achter elkaar. Om een string tegen een patroon te testen, gebruik je de smartmatch-operator `~~`:

```raku
say 'the cat sat' ~~ /cat/; # ｢cat｣
```

Wanneer het patroon gevonden wordt, meldt Raku het deel van de string dat matchte, getoond tussen de hoekhaken `｢ ｣`. In de volgende sectie bekijk je dit resultaat nauwkeuriger.

In deze eerste sectie leer je hoe je exacte (_letterlijke_) tekst matcht, en hoe je een teken matcht dat een van meerdere kan zijn — een _tekenklasse_. De volgende secties voegen daar [kwantoren](/nl/regexes/quantifiers), [captures](/nl/regexes/captures) en al het andere aan toe dat regexes zo nuttig maakt.

{% include nav.html %}
