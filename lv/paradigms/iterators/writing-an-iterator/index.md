---
title: Iteratora rakstīšana
translations_gpt:
---

{% include menu.html %}

Iterators vienkārši ir objekts, kas pilda iebūvēto lomu `Iterator` un nodrošina metodi `pull-one`. Šī metode atgriež nākamo vērtību vai `IterationEnd`, kad vairs nekā nav palicis. Šeit ir atpakaļskaitīšanas iterators, kas atdod skaitli un soļo pretī nullei:

```raku
class Countdown does Iterator {
    has Int $.n is rw;

    method pull-one {
        return IterationEnd if $!n <= 0;
        return $!n--;
    }
}
```

Katrs `pull-one` izsaukums vispirms pārbauda, vai skaitīšana nav beigusies; ja nav, tas atgriež pašreizējo skaitli un to samazina. Pēcsamazinājums `$!n--` atgriež vērtību *pirms* atņemšanas, tāpēc skaitļi iznāk `3, 2, 1`. Darbinot to ar rokām, tas izskatās gluži kā jebkurš cits iterators:

```raku
my $c = Countdown.new(n => 3);
say $c.pull-one; # 3
say $c.pull-one; # 2
say $c.pull-one; # 1
say $c.pull-one =:= IterationEnd; # True
```

Iteratoru pašu par sevi `for` cikls tieši paņemt nespēj — cikls gaida *iterējamu* lietu. Ietiniet iteratoru `Seq`, un tas kļūst ciklojams:

```raku
for Seq.new(Countdown.new(n => 3)) -> $x {
    say $x;
}
```

Tas izdrukā `3`, `2`, `1`. Ikdienas kodā jūs tā vietā ņemtu `gather` / `take` — [ģeneratora](/lv/paradigms/generators) forma tam pašam rezultātam ir daudz īsāka. Tomēr `Iterator` lomu uzrakstīt tieši ir vērts redzēt vienreiz, jo tas atklāj, uz kā balstās `gather`, `map` un katrs `for` cikls: uz objekta, kas atbild uz vienu vienīgu jautājumu — «kāda ir nākamā vērtība?»

{% include nav.html %}
