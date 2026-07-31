---
title: Pavedienu apvienošana
translations_gpt:
---

{% include menu.html %}

Lai sagaidītu pavediena pabeigšanu, izsauciet tam `.finish` (ko raksta arī kā `.join`). Galvenā programma tur apstājas, līdz pavediens ir gatavs:

```raku
my $t = Thread.start({ say 'in the thread' });
$t.finish;
say 'done';
```

Tas izdrukā:

```
in the thread
done
```

Tā kā `.finish` gaida, pavediena ziņa noteikti parādīsies pirms `done`. Bez `.finish` secība būtu neparedzama, un programma varētu pat beigties, pirms pavedienam būtu izdevies kaut ko izdrukāt.

Kad palaižat vairākus pavedienus, jūs sagaidāt katru no tiem, lai būtu droši, ka visi ir pabeiguši:

```raku
my $a = Thread.start({ 1 + 1 });
my $b = Thread.start({ 2 + 2 });
$a.finish;
$b.finish;
say 'both finished';
```

Abi pavedieni darbojas vienlaikus, un abu sagaidīšana pirms pēdējā `say` garantē, ka `both finished` tiek izdrukāts tikai tad, kad tie tiešām ir gatavi. Sagaidīšana ir veids, kā konkurento darbu atkal savest kopā paredzamā programmas punktā.

Tā kā metodes izsaukums [savienojumam](/lv/paradigms/junctions) izplatās uz katru tā turēto vērtību, vairākus pavedienus var sagaidīt vienā izteiksmē. Apvienojiet tos ar `all` operatoru `&` un izsauciet savienojumam `.finish`:

```raku
my $a = Thread.start({ 1 + 1 });
my $b = Thread.start({ 2 + 2 });

($a & $b).finish;
say 'both finished';
```

`.finish` izsaukums `$a & $b` izpilda to abiem pavedieniem, tāpēc programma gaida, līdz neviens no tiem vairs nedarbojas — tas pats rezultāts, kas tos sagaidot pa vienam, tikai lasās kā «pabeidz abus šos» un darbojas jebkuram ar `&` apvienotu pavedienu skaitam.

{% include nav.html %}
