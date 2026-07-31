---
title: Veseli skaitļi
translations_gpt:
---

{% include menu.html %}

Jūs esat lietojuši veselos skaitļus jau no paša kursa sākuma. Šajā sadaļā aplūkotas dažas no to mazāk acīmredzamajām īpašībām.

Vissvarīgākā ir tā, ka veseli skaitļi Raku ir _patvaļīgas precizitātes_: tie nav ierobežoti ar fiksētu baitu skaitu un tie nekad klusi nepārplūst. Kamēr pietiek atmiņas, vesels skaitlis var pieaugt tik liels, cik nepieciešams:

```raku
say 2 ** 100;
# 1267650600228229401496703205376
```

Šī ir precīza vērtība, nevis aptuvens skaitlis. Tas pats attiecas uz lielu skaitļu reizinājumiem — piemēram, 50 faktoriāls tiek aprēķināts precīzi:

```raku
my $factorial = 1;
$factorial = $factorial * $_ for 1..50;
say $factorial;
# 30414093201713378043612608166064768844377641568960512000000000000
```

Lai garos skaitļus būtu vieglāk lasīt pirmkodā, ciparus var grupēt ar pasvītrām. Kompilators tos ignorē:

```raku
say 1_000_000; # 1000000
```

Tālākās tēmas parāda, kā rakstīt veselos skaitļus citās skaitīšanas sistēmās, un iepazīstina ar dažām noderīgām veselo skaitļu metodēm.

{% include nav.html %}
