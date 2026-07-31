---
title: Sakritības koks
translations_gpt:
---

{% include menu.html %}

Gramatikas sakritība ir koks. Augšējai sakritībai ir nosaukts ieraksts katram marķierim, ko izmantoja `TOP`, un šie ieraksti paši ir sakritības objekti ar saviem tvērumiem. Pa koku pārvietojaties ar to pašu `<nosaukums>` sintaksi, ko lietojat nosauktiem tvērumiem:

```raku
grammar Pair {
    token TOP   { <key> '=' <value> }
    token key   { \w+ }
    token value { \d+ }
}

my $m = Pair.parse('x=5');
say $m<key>;   # ｢x｣
say $m<value>; # ｢5｣
```

Katrs zars ir pilnvērtīgs sakritības objekts, tāpēc tam var prasīt tā `.Str`, tā pozīciju vai to pārveidot. Šeit vērtība ir cipari, tāpēc tās pārvēršana par īstu skaitli ir tikai viens metodes izsaukums:

```raku
say $m<value>.Int; # 5
```

Dziļākām gramatikām kokam ir vairāk līmeņu — `$m<a><b>` sasniedz marķieri `b`, kas izmantots marķiera `a` iekšienē. Šāda staigāšana pa koku darbojas, taču visam, kas plašāks par pāris laukiem, tā kļūst neveikla. Nākamais temats parāda tīrāku veidu, kā katrai sakritībai piesaistīt to vērtību, kas jums patiešām vajadzīga.

{% include nav.html %}
