---
title: Atslēgas, vērtības un pāri
translations_gpt:
---

{% include menu.html %}

Citi apstākļvārdi maina to, **ko** indekss atdod. Pēc noklusējuma indekss atgriež vērtību; šie atgriež vairāk:

* `:v` — vērtību (noklusējums)
* `:k` — atslēgu (vai indeksu)
* `:kv` — gan atslēgu, gan vērtību
* `:p` — atslēgas un vērtības `Pair`

Masīvam «atslēga» ir indekss:

```raku
my @a = 10, 20, 30;

say @a[1]:kv; # (1 20)
say @a[1]:p;  # 1 => 20
```

`@a[1]:kv` atgriež indeksu un vērtību kopā kā sarakstu, bet `@a[1]:p` atgriež tos kā pāri.

Tas pats darbojas ar jaukteņiem, un tas ir īpaši ērti pār vairāku atslēgu šķēli uzreiz:

```raku
my %h = a => 1, b => 2, c => 3;

say %h<a c>:kv; # (a 1 c 3)
```

Šeit divu atslēgu šķēle atgriežas kā pamīšus atslēgas un vērtības. Tieši uz šiem apstākļvārdiem `map`, `for` un tamlīdzīgi bieži paļaujas, kad vēlaties apstrādāt atslēgas un vērtības līdzās, nesadalot darbu atsevišķos meklējumos.

{% include nav.html %}
