---
title: loop
---

{% include menu.html %}

De `loop`-instructie is een constructie in Raku die veel gemeen heeft met traditionele lussen in de C-programmeertaal en zijn verwanten. Het neemt drie instructies: de initialisator, de test en de instructie om de lusvariabele te wijzigen. Het lichaam van de lus wordt herhaaldelijk uitgevoerd zolang de test `True` blijft.

```raku
loop (my $c = 0; $c < 5; $c++) {
    say "De huidige waarde van de teller is $c.";
}
```

Hier is `++` een postfix-operator die zijn argument met 1 verhoogt. We zullen meer operators behandelen in het tweede deel van de cursus.

Het programma voert het lichaam van de lus vijf keer uit.

```console
$ raku t.raku
De huidige waarde van de teller is 0.
De huidige waarde van de teller is 1.
De huidige waarde van de teller is 2.
De huidige waarde van de teller is 3.
De huidige waarde van de teller is 4.
```

Sommige, of zelfs alle, instructies in de kop van de `loop` kunnen worden weggelaten. Hier is bijvoorbeeld hetzelfde programma:

```raku
my $c = 0;
loop (; $c < 5;) {
    say "De huidige waarde van de teller is $c.";
    $c++;
}
```

## * * *

De `loop`-lussen zijn waarschijnlijk de minst gebruikte lussen in Raku. Ze kunnen bijvoorbeeld worden gevonden in een geautomatiseerde vertaler van C naar Raku. In Raku zijn er echter handigere lussen zoals `for`, die we zeer binnenkort zullen onderzoeken.

{% include nav.html %}