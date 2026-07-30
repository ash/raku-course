---
title: De substitutieoperator
translations_gpt:
---

{% include menu.html %}

De substitutieoperator is `s///`. Hij ziet eruit als een match met een tweede vak: het patroon komt tussen de eerste twee schuine strepen en de vervangende tekst tussen de laatste twee:

```raku
my $s = 'hello world';
$s ~~ s/world/Raku/;
say $s; # hello Raku
```

Substitutie verandert de variabele **ter plaatse**, dus `$s` zelf wordt bijgewerkt. De tekst in het vervangingsdeel is letterlijk — je zet hem niet tussen aanhalingstekens.

Net als bij matchen raakt substitutie standaard alleen het **eerste** voorkomen. Voeg het bijwoord `:g` toe om elk voorkomen te vervangen:

```raku
my $s = 'a-b-c';
$s ~~ s:g/'-'/_/;
say $s; # a_b_c
```

Als je het origineel wilt behouden en in plaats van ter plaatse te wijzigen een veranderde **kopie** wilt maken, gebruik je de operator `S///` met een **hoofdletter**: hij voert de substitutie uit en geeft de veranderde string terug, waarbij het origineel ongemoeid blijft. Omdat hij geen variabele ter plaatse bijwerkt, richt je hem met `given` op een variabele in plaats van met `~~`:

```raku
my $orig = 'color';
say S:g/o/0/ given $orig; # c0l0r
say $orig;                # color
```

(`$orig ~~ S///` schrijven waarschuwt je om in plaats daarvan `given` te gebruiken — bij `S///` valt er niets ter plaatse te wijzigen.)

Hetzelfde niet-destructieve gedrag is ook als methode beschikbaar, `.subst`, die een nieuwe string teruggeeft:

```raku
my $orig = 'color';
say $orig.subst('o', '0', :g); # c0l0r
say $orig;                     # color
```

{% include nav.html %}
