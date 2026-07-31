---
title: 'Risinājums: Vesels vārds'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
say 'this is fine' ~~ /<< is >>/;
```

🦋 Atrodiet programmu failā [whole-word.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/anchors/whole-word.raku).

## Izvade

```
｢is｣
```

## Komentāri

1. Enkuri `<<` un `>>` pieprasa vārda robežu katrā `is` pusē.

1. Burti `is` sēž arī vārda `this` iekšienē, taču tur tiem kreisajā pusē vārda robežas nav, tāpēc dzinējs šo gadījumu izlaiž un tā vietā piemeklē atsevišķi stāvošo vārdu `is`.

1. Abi kandidāti izdrukā vienu un to pašu `｢is｣`, tad kā zināt, kurš patiešām sakrita? Nomainiet `is`, kas paslēpts vārdā `this`, — piemēram, pārvērtiet virkni par `'thus is fine'`. Izvade joprojām ir `｢is｣`, nemainīga, kas pierāda, ka šis gadījums nekad nebija sakritība. Tagad nomainiet atsevišķi stāvošo vārdu (teiksim, `'this it fine'`), un sakritība pazūd (`Nil`). Sakritībai var arī pajautāt, kur tā sākas: `('this is fine' ~~ /<< is >>/).from` atgriež `5` — atsevišķi stāvošā `is` pozīciju, nevis `2`.

{% include nav.html %}
