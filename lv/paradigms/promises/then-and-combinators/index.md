---
title: Ķēdēšana un apvienošana
translations_gpt:
---

{% include menu.html %}

Solījumi kļūst vēl jaudīgāki, kad tos apvieno. Visbiežākā vajadzība ir sagaidīt **vairākus** uzreiz. `await` pieņem solījumu sarakstu un atgriež to rezultātus pēc kārtas:

```raku
my @jobs = (start { 1 }), (start { 2 }), (start { 3 });
say await @jobs;     # (1 2 3)
say [+] await @jobs; # 6
```

Visi trīs darbi izpildās vienlaikus; `await @jobs` sagaida tos visus un atdod `(1, 2, 3)`. Tā kā rezultāti atnāk tādā pašā secībā kā solījumi, tos var reducēt kā parasti.

Darbu solījumam var arī piesiet ar `.then`, kas izpilda turpinājuma bloku, tiklīdz solījums ir gatavs. Tā iekšienē `.result` ir sākotnējā solījuma vērtība:

```raku
my $p = start { 10 };
my $q = $p.then({ .result * 2 });
say await $q; # 20
```

`$q` ir jauns solījums, kas dubulto `$p` rezultātu. Tā gaidīšana dod `20`.

Blokam nav tieši norādīta parametra, tāpēc tas saņem pabeigto solījumu kā temata mainīgo `$_` — un tieši tāpēc darbojas kails `.result`: īstenībā tas ir `$_.result`. Ja labprātāk dotu šim solījumam vārdu, izmantojiet bultiņas bloku:

```raku
my $q = $p.then(-> $prev { $prev.result * 2 });
```

Tas uzvedas tieši tāpat; `$prev` ir sākotnējais solījums `$p`, un `$prev.result` ir tā vērtība.

Ar `start`, `await` un `.then` jūs varat aprakstīt veselus konkurenta darba konveijerus: palaist daudzus uzdevumus, apvienot to rezultātus un no vecajiem būvēt jaunus uzdevumus — un neviena pavediena tieši neaiztiekot.

{% include nav.html %}
