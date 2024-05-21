---
title: Ierakstītie mainīgie
---

{% include menu.html %}

Raku valodā skalārs mainīgais (vai skalāra konteiners) var saturēt vienu objektu no dažādiem tipiem. Piemēram, tas pats mainīgais var vispirms saturēt skaitli un pēc tam virkni:

```raku
my $var = 42;
$var = 'Hello';
```

Šeit ir vēl viens piemērs, kurā tiek sajaukti dažādi datu tipi vienā izteiksmē:

```raku
my $a = '100';
my $b = 200;
say $a + $b; # 300
```

Tas, iespējams, nav labākā kodēšanas prakse, bet tas ir pilnīgi derīgs Raku programmas kods.

Tomēr Raku ļauj jums norādīt, ko konkrētais mainīgais var saturēt. Vairāk detaļu ir zemāk esošajās tēmās.

{% include nav.html %}