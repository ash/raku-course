---
title: Valores praedefiniti
---

{% include menu.html %}

Cum nova variabilis scalaris sine assignatione immediata creatur, continens tamen valorem tenet — valorem suum defectum. Valor defectus exactus a typo variabilis pendet.

Programma infra non est optimus modus Raku utendi, sed rem demonstrat:

```raku
my $int;
say $int + 5;
```

Output `5` continet, quod exspectare potuisti si assumpsisti valorem defectum `$int` esse `0`. Tamen, programma etiam monitum imprimit:

```
Use of uninitialized value $int of type Any in numeric context
  in block <unit> at t.raku line 2
5
```

Ad hanc incertitudinem removendam, vel valorem explicite assigna:

```raku
my $int = 0;
say $int + 5; # 5
```

Vel valorem defectum cum tratto `is default` declara:

```raku
my $int is default(0);
say $int + 5; # 5
```

Valor defectus non limitatur ad nullam. Potest esse quilibet valor quem bonum candidatum consideras, exempli gratia:

```raku
my $int is default(1);
say $int + 5; # 6
```

{% include nav.html %}
