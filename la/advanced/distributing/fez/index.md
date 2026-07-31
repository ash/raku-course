---
title: Publicare cum fez
translations_gpt:
---

{% include menu.html %}

Thema praecedens `fez` introduxit ut modum distributionis in systema Raku imponendi. Non necesse est `fez` uti — non est solus modus publicandi — sed est electio frequentissima, et plus quam imponere facit: etiam novam distributionem pro te parare et rationem auctoris administrare potest. Installa eum per `zef`:

```
zef install fez
```

## Nova distributio inchoanda

Potius quam `META6.json` et directoria `lib/` et `t/` manu componere, `fez` ea pro te struere potes:

```
fez init My::Greeting
```

`fez init` novam distributionem initiat ad aedificandum — directorium proiecti cum `META6.json` parato et dispositione normali iam in loco — ut statim codicem sub `lib/` et probationes sub `t/` scribere possis, potius quam archivum metadatorum ipse praeparare.

## Inscriptio et aditus

Publicatio rationem in systemate requirit. Eam semel per `fez register` creas (nomen usoris, inscriptionem electronicam, et tesseram rogat) et per `fez login` intras, quod clavem tuam servat ut mandata sequentia authenticata sint:

```
fez register
fez login
```

Nomen usoris tui refert: archivum `META6.json` distributionis campum `auth` ad `zef:<username>` positum ferre debet, quo modo systema scit impositionem vere tuam esse.

## Impositio

Ratione parata et distributione prompte, `fez upload` directorium praesens componit et submittit:

```
fez upload
```

Post hoc, quisque eam nomine per `zef install My::Greeting` installare potest. Quaeque versio semel tantum imponi potest, itaque memento `version` in `META6.json` augere antequam renovationem publices.

## Alia mandata utilia

Aliquot alia mandata `fez` quae adhibebis:

* `fez review` — distributionem pro verisimilibus problematibus ante impositionem inspice;
* `fez list` — distributiones quas iam publicavisti ostende;
* `fez refresh` — `META6.json` ex archivis in disco nunc praesentibus reconstitue.

> Omnia haec `fez` installatum et accessum ad retia requirunt, et omnia post `init` rationem in systemate requirunt.

{% include nav.html %}
