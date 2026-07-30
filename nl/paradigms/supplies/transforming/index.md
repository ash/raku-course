---
title: Een supply omvormen
translations_gpt:
---

{% include menu.html %}

Een supply kan omgevormd worden voordat je hem aftapt, vrijwel als een lijst. Methoden als `map` en `grep` leveren een **nieuwe** supply op waarvan de waarden de omgevormde zijn:

```raku
my @out;
Supply.from-list(1, 2, 3).map(* * 10).tap(-> $v { @out.push($v) });
say @out; # [10 20 30]
```

De `map(* * 10)` bouwt een nieuwe supply die tien keer elke oorspronkelijke waarde uitzendt, en de tap verzamelt die in `@out`.

`grep` filtert een supply en laat alleen de waarden door waarvoor zijn blok waar is:

```raku
my @out;
Supply.from-list(1, 2, 3, 4, 5, 6).grep(* %% 2).tap(-> $v { @out.push($v) });
say @out; # [2 4 6]
```

Omdat elke omvorming weer een supply teruggeeft, kun je ze aaneenrijgen en zo een kleine pijplijn bouwen die op de stroom reageert:

```raku
my @out;
Supply.from-list(1..6).grep(* %% 2).map(* ** 2).tap(-> $v { @out.push($v) });
say @out; # [4 16 36]
```

Dit is dezelfde woordenschat van map en grep die je van lijsten kent, toegepast op waarden die in de loop van de tijd binnenkomen. De supply doet het duwen; jouw pijplijn bepaalt de vorm van wat eruit komt.

{% include nav.html %}
