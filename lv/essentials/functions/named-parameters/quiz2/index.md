---
title: Viktorīna — Mainīgie kā nosauktie parametri
---

{% include menu.html %}

Šeit ir tā pati funkcija kā iepriekšējā viktorīnā:

```raku
sub f(:$a, :$b) {
    $a - $b
}
```

Programmā ir arī trīs mainīgie:

```raku
my $a = 1;
my $b = 2;
my $c = 3;
```

Atzīmējiet visus derīgos veidus, kā izsaukt funkciju un nodot tai divus no trim mainīgajiem.

{:.quiz}
1 | f(a => $a, b => $b)
1 | f(a => $c, b => $c)
0 | f($a, $b) | Šeit tiek nodoti pozicionālie argumenti, nevis nosauktie.
1 | f(:$a, :$b)
0 | f($:a, $:b) | Nav derīga Raku sintakse.
0 | f(:$b, :$c) | Nav nosauktā parametra `c`.
0 | f(:$a, c => $c) | Nav nosauktā parametra `c`.
1 | f(:$a, b => $c)
1 | f(:$a, :b($c)) | Tas pats kā iepriekš.
1 | f(:a($a), :b($c)) | Arī derīgi, lai gan nedaudz lieki.


{% include quiz.html %}

{% include nav.html %}