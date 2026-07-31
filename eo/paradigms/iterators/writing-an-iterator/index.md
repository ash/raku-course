---
title: Verki itervilon
translations_gpt:
---

{% include menu.html %}

Itervilo estas simple objekto, kiu plenumas la enkonstruitan rolon `Iterator` kaj provizas metodon `pull-one`. Tiu metodo redonas la sekvan valoron, aŭ `IterationEnd`, kiam nenio restas. Jen retronombra itervilo, kiu liveras nombron kaj paŝas al nulo:

```raku
class Countdown does Iterator {
    has Int $.n is rw;

    method pull-one {
        return IterationEnd if $!n <= 0;
        return $!n--;
    }
}
```

Ĉiu voko de `pull-one` unue kontrolas, ĉu la nombrado elĉerpiĝis; se ne, ĝi redonas la kurantan nombron kaj malpliigas ĝin. La postmalpliigo `$!n--` redonas la valoron *antaŭ* la subtraho, do la nombroj eliras kiel `3, 2, 1`. Konduki ĝin mane aspektas ĝuste kiel ĉe ajna alia itervilo:

```raku
my $c = Countdown.new(n => 3);
say $c.pull-one; # 3
say $c.pull-one; # 2
say $c.pull-one; # 1
say $c.pull-one =:= IterationEnd; # True
```

Itervilo per si mem ne estas io, kion buklo `for` povas preni rekte — buklo atendas *iterablon*. Envolvu la itervilon en `Seq` kaj ĝi fariĝas buklo-irebla:

```raku
for Seq.new(Countdown.new(n => 3)) -> $x {
    say $x;
}
```

Tio presas `3`, `2`, `1`. En ĉiutaga kodo vi prefere uzus `gather` / `take` — la [generila](/eo/paradigms/generators) formo estas multe pli mallonga por la sama rezulto. Skribi la rolon `Iterator` rekte tamen indas vidi unufoje, ĉar ĝi malkaŝas, sur kio `gather`, `map` kaj ĉiu buklo `for` estas konstruitaj: objekto, kiu respondas unu solan demandon — «kio estas la sekva valoro?»

{% include nav.html %}
