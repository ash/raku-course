---
title: Alternatie
translations_gpt:
---

{% include menu.html %}

Scheid twee of meer alternatieven met een verticale streep `|`. Het patroon matcht als **een** ervan matcht:

```raku
say 'no thanks' ~~ / yes | no /; # ｢no｣
```

Het patroon probeerde `yes` en `no`; de string bevat `no`, dus dat is wat matchte.

Je kunt zoveel alternatieven opsommen als je wilt:

```raku
say 'the sky is blue' ~~ / red | green | blue /; # ｢blue｣
```

Alternatieven kunnen elk deelpatroon zijn, niet alleen letterlijke woorden — ze mogen tekenklassen, kwantoren en captures bevatten. Om een alternatie binnen een groter patroon bij elkaar te houden, groepeer je haar met vierkante haken `[ ]`, die [groeperen **zonder** te capturen](/nl/regexes/captures/non-capturing):

```raku
say 'cathouse' ~~ / [ cat | dog ] house /; # ｢cathouse｣
```

Hier is de alternatie `cat | dog` één eenheid, en die moet door `house` gevolgd worden.

{% include nav.html %}
