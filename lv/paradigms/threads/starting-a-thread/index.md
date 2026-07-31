---
title: Pavediena palaišana
translations_gpt:
---

{% include menu.html %}

`Thread.start` ņem bloku un izpilda to jaunā pavedienā, atgriežot `Thread` objektu, kas pārstāv notiekošo darbu:

```raku
my $t = Thread.start({ say 'hello from the thread' });
```

Bloks darbojas vienlaikus ar kodu, kas seko. Galvenā programma to **negaida** automātiski — tā turpina uzreiz, un pavediens dara savu darbu fonā.

Viena maza, bet svarīga detaļa: argumentam jābūt koda blokam. Tukšs figūriekavu pāris `{ }` ir tukša **hash**, nevis tukšs bloks, tāpēc pavedienam vienmēr vajag ķermeni, kas tiešām kaut ko dara:

```raku
my $t = Thread.start({ 2 + 2 }); # labi: bloks ar ķermeni
```

Tā kā galvenā programma un pavediens tagad darbojas vienlaikus, jūs nevarat paļauties uz secību, kādā parādās to izvade — ja vien tieši nesagaidāt pavediena beigas, un tas ir nākamā temata priekšmets.

{% include nav.html %}
