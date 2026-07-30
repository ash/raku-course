---
title: Functiesignaturen dumpen
translations_gpt: Functiesignaturen dumpen
---

{% include menu.html %}

Een kale `dd` -- aangeroepen zonder argumenten binnen een subroutine -- toont de signatuur van die subroutine: de naam en de lijst van parameters, als die er zijn. Bekijk het volgende voorbeeld met twee subroutines:

```raku
sub f1 {
    dd
}

f1();

sub f2($x) {
    dd
}

f2(42);
```

Het programma toont de signaturen in plaats van waarden:

```console
sub f1()
sub f2($x)
```

Dit is vooral handig bij multi-functies, waar het je vertelt welke kandidaat daadwerkelijk werd aangeroepen:

```raku
multi sub g {
    dd
}

multi sub g($x) {
    dd
}

g();
g(42);
```

De uitvoer noemt elke keer de overeenkomende variant:

```console
sub g()
sub g($x)
```

{% include nav.html %}
