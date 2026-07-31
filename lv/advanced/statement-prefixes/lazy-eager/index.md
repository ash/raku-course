---
title: Slinkums un dedzīgums
translations_gpt:
---

{% include menu.html %}

Daži saraksti Raku tiek aprēķināti tikai tad, kad to elementi vajadzīgi, — tie ir _slinki_. Prefiksi `lazy` un `eager` ļauj to vadīt tieši.

Prefikss `eager` liek sarakstu izveidot **visu uzreiz**, nekavējoties:

```raku
my @squares = eager (1..3).map(* ** 2);
say @squares; # [1 4 9]
```

Arī bez `eager` `map` vērtības radītu, taču `eager` garantē, ka tās visas tiek aprēķinātas turpat uz vietas, nevis pēc pieprasījuma.

Prefikss `lazy` dara pretējo: tas atzīmē sarakstu kā slinku, tāpēc tā elementi tiek radīti tikai tad, kad tos izvelk. Tieši tas ļauj sarakstam būt konceptuāli bezgalīgam:

```raku
my $numbers = lazy (1 .. Inf);
say $numbers.is-lazy; # True
```

Metode `.is-lazy` apstiprina, ka saraksts nemēģinās visus savus (bezgalīgos) elementus aprēķināt jau iepriekš.

Tieši šis piemērs ir gadījums, kad Raku slinkumu pieņemtu jebkurā gadījumā: neierobežots diapazons, piemēram, `1 .. Inf`, jau ir slinks, tāpēc `say (1 .. Inf).is-lazy` izdrukā `True` arī bez prefiksa. `lazy` rakstīšana šeit neko nemaina — tā tikai padara nodomu skaidru. Prefikss atmaksājas, kad vēlaties padarīt slinku sarakstu, kas citādi tiktu aprēķināts dedzīgi.

Lielākoties Raku izvēlas saprātīgi pats — diapazoni un virknes ir slinkas, parasta masīva piešķiršana ir dedzīga. Ķerieties pie šiem prefiksiem, kad šo izvēli vajag pārrakstīt: `eager`, lai liktu dārgam aprēķinam notikt tagad, `lazy`, lai atliktu tādu, kas varētu būt liels vai neierobežots.

{% include nav.html %}
