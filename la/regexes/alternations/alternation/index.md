---
title: Alternativa
translations_gpt:
---

{% include menu.html %}

Separa duas vel plures alternativas virga verticali `|`. Exemplar congruit si **quaelibet** earum congruit:

```raku
say 'no thanks' ~~ / yes | no /; # ｢no｣
```

Exemplar `yes` et `no` temptavit; catena `no` continet, itaque illud congruit.

Tot alternativas quot vis enumerare potes:

```raku
say 'the sky is blue' ~~ / red | green | blue /; # ｢blue｣
```

Alternativae quodlibet subexemplar esse possunt, non sola verba litteralia — classes characterum, quantificatores et capturas continere possunt. Ut alternationem intra maius exemplar coniunctam serves, eam uncis quadratis `[ ]` grega, qui [**sine** captura gregant](/la/regexes/captures/non-capturing):

```raku
say 'cathouse' ~~ / [ cat | dog ] house /; # ｢cathouse｣
```

Hic alternatio `cat | dog` una unitas est, quam `house` sequi debet.

{% include nav.html %}
