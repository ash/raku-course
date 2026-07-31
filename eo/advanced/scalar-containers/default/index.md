---
title: Defaŭltaj valoroj
---

{% include menu.html %}

Kiam nova skalara variablo estas kreita sen tuja valorizo, la ujo tamen enhavas valoron — sian defaŭltan valoron. La ekzakta defaŭlto dependas de la tipo de la variablo.

La ĉi-suba programo ne estas la plej bona maniero uzi Raku, sed ĝi montras la ideon:

```raku
my $int;
say $int + 5;
```

La eligo enhavas `5`, kio eble estas tio, kion vi atendis, se vi supozis, ke la defaŭlta valoro de `$int` estas `0`. Tamen, la programo ankaŭ presas averton:

```
Use of uninitialized value $int of type Any in numeric context
  in block <unit> at t.raku line 2
5
```

Por forigi ĉi tiun necertecon, aŭ asignu valoron eksplicite:

```raku
my $int = 0;
say $int + 5; # 5
```

Aŭ deklaru defaŭltan valoron per la trajto `is default`:

```raku
my $int is default(0);
say $int + 5; # 5
```

La defaŭlta valoro ne estas limigita al nulo. Ĝi povas esti ajna valoro, kiun vi konsideras bona kandidato, ekzemple:

```raku
my $int is default(1);
say $int + 5; # 6
```

{% include nav.html %}
