---
title: Sakritības objekts
translations_gpt:
---

{% include menu.html %}

Kad regulārā izteiksme sakrīt, gudrā sakritība atgriež _sakritības objektu_. Tas pats objekts automātiski tiek saglabāts arī speciālajā mainīgajā `$/`, ko dažreiz sauc par «sakritības mainīgo».

Sakritības objekts ir daudz vairāk nekā atbilde «jā» vai «nē». Kā virkne tas ir teksts, kas sakrita — vai nu ar metodi `.Str`, vai ar prefiksu `~`, kas ir virknes pārveidošanas operators un dara tieši to pašu:

```raku
my $m = 'concatenate' ~~ /cat/;
say $m.Str; # cat
say ~$m;    # cat
```

Tas zina arī, **kur** virknē sakritība atrasta. Metode `.from` dod pozīciju, kur tā sākas, un `.to` — pozīciju tūlīt aiz tās beigām:

```raku
my $m = 'room 7 left' ~~ /\d/;
say $m.Str;  # 7
say $m.from; # 5
say $m.to;   # 6
```

Pozīcijas skaita no nulles, tāpēc cipars `7` atrodas indeksā `5`.

Kad regulārā izteiksme **nesakrīt**, rezultāts vispār nav sakritības objekts — tā ir īpašā vērtība `Nil`. Piešķirot `Nil` skalāram, tas paliek nedefinēts:

```raku
my $m = 'abc' ~~ /z/;
say $m.defined; # False
```

Tāpēc pirms sakritušā teksta nolasīšanas vienmēr varat pārbaudīt `.defined` (vai vienkārši izmantot vērtību Būla kontekstā).

{% include nav.html %}
