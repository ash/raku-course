---
title: Aizvietošanas operators
translations_gpt:
---

{% include menu.html %}

Aizstāšanas operators ir `s///`. Tas izskatās kā sakritība ar otru nodalījumu: raksturs nonāk starp pirmajām divām slīpsvītrām, bet aizstājuma teksts — starp pēdējām divām:

```raku
my $s = 'hello world';
$s ~~ s/world/Raku/;
say $s; # hello Raku
```

Aizstāšana maina mainīgo **uz vietas**, tāpēc tiek atjaunināts pats `$s`. Teksts aizstājuma daļā ir burtisks — pēdiņās to nelieciet.

Tāpat kā piemeklēšana, arī aizstāšana pēc noklusējuma skar tikai **pirmo** gadījumu. Pievienojiet apstākļvārdu `:g`, lai aizstātu visus gadījumus:

```raku
my $s = 'a-b-c';
$s ~~ s:g/'-'/_/;
say $s; # a_b_c
```

Ja vēlaties paturēt oriģinālu un radīt izmainītu **kopiju**, nevis mainīt uz vietas, izmantojiet **lielo burtu** operatoru `S///`: tas veic aizstāšanu un atgriež izmainīto virkni, atstājot oriģinālu neskartu. Tā kā tas mainīgo uz vietas neatjaunina, norādiet to ar `given`, nevis `~~`:

```raku
my $orig = 'color';
say S:g/o/0/ given $orig; # c0l0r
say $orig;                # color
```

(Rakstot `$orig ~~ S///`, jūs brīdina lietot `given` — ar `S///` nav nekā, ko mainīt uz vietas.)

Tā pati nesagraujošā uzvedība pieejama arī kā metode `.subst`, kas atgriež jaunu virkni:

```raku
my $orig = 'color';
say $orig.subst('o', '0', :g); # c0l0r
say $orig;                     # color
```

{% include nav.html %}
