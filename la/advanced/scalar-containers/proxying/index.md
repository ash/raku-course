---
title: Procuratio vocationum methodorum
---

{% include menu.html %}

Continens scalaris esse revera significat obiectum typi `Scalar` esse. In plerisque casibus, usus scalarium tam transparens est ut developer de continenti omnino cogitare non debeat et imaginari possit se directe cum valoribus in eo servatis laborare.

Hoc operatur quia continens scalaris vocationes methodorum ad valorem quem tenet delegat. Exempli gratia, post assignationem `my $lang = 'Raku'`, methodum `.chars` in variabili vocare potes:

```raku
my $lang = 'Raku';
say $lang.chars; # 4
```

Programma `4` imprimit, qui est numerus characterum in serie `'Raku'`. Resultatum exacte idem est ac si `.chars` in valore seriei directe vocavisses, potius quam in variabili continentis:

```raku
say 'Raku'.chars; # 4
```

Aliis verbis, continens quiete vocationem `.chars` ad seriem quam tenet delegat, et resultatum tibi reddit.

{% include nav.html %}
