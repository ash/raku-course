---
title: Slinkais gather
translations_gpt:
---

{% include menu.html %}

`gather` bloks ir _slinks_: tas neizpildās viss uzreiz. Tas rada vērtības tikai tad, kad tās tiek izvilktas, un tas nozīmē, ka `gather` var aprakstīt **bezgalīgu** rindu un tomēr būt noderīgs — jūs vienkārši pārstājat ņemt vērtības, kad jums ir pietiekami.

Āķis ir tāds, ka rezultāts jāpatur slinks. Glabājot to parastā `@array`, tiktu mēģināts savākt visas vērtības uzreiz, un bezgalīgai rindai tas nekad nebeigtos. Tā vietā glabājiet virkni skalārā (kur tā paliek slinka `Seq`) un izvelciet no tās šķēli:

```raku
my $naturals = gather {
    my $n = 1;
    loop {
        take $n++;
    }
}

say $naturals[^5]; # (1 2 3 4 5)
```

`loop` nekad nebeidzas, bet tiek radītas tikai piecas vērtības, jo tieši tik daudz mēs prasījām ar `[^5]`. Vilkt no priekšgala var arī ar `.head`:

```raku
say (gather { my $n = 1; loop { take $n++ } }).head(3); # (1 2 3)
```

Tieši slinkums ļauj `gather` droši modelēt bezgalīgas straumes: nekas netiek aprēķināts, kamēr nav vajadzīgs, un jūs paņemat tieši tik, cik gribat.

{% include nav.html %}
