---
title: Aŭtomata fadenigo
translations_gpt:
---

{% include menu.html %}

Kiam vi transdonas kunligon al io, kio atendas unu solan valoron — komparo aŭ ordinara funkcio — Raku senbrue aplikas tiun operacion al **ĉiu** valoro malantaŭ la kunligo kaj rekunigas la rezultojn en kunligon. Tio nomiĝas _aŭtomata fadenigo_.

Ekzemple, adicii al kunligo adicias al ĉiu el ĝiaj valoroj:

```raku
my $j = 1 | 2 | 3;
say $j + 10; # any(11, 12, 13)
```

La `+ 10` estis aplikita al `1`, `2` kaj `3` aparte, donante novan _any_-kunligon `any(11, 12, 13)`.

Ĉe komparo, la kunigita rezulto kolapsas al unu sola vero-valoro laŭ la speco de la kunligo:

```raku
say so all(3, 7, 2) > 0;  # True  — ĉiu valoro estas pozitiva
say so all(3, -1, 2) > 0; # False — ne ĉiuj estas pozitivaj
say so none(1, 2, 3) == 5; # True — neniu el ili estas 5
```

Aŭtomata fadenigo estas tio, kio faras kunligojn tiel koncizaj: unu komparo kontrolas multajn valorojn. Koncepte la kontroloj estas sendependaj, do Raku rajtas plenumi ilin paralele — kaj tial kunligoj sidas nature en la ilaro de samtempeco.

{% include nav.html %}
