---
title: Het iteratorprotocol
translations_gpt:
---

{% include menu.html %}

Elke waarde waar je overheen kunt lussen — een lijst, een bereik, een array — kan je met de methode `.iterator` een _iterator_ overhandigen. Een iterator heeft één essentiële methode, `pull-one`, die telkens wanneer je haar aanroept de volgende waarde teruggeeft:

```raku
my $it = (10, 20, 30).iterator;
say $it.pull-one; # 10
say $it.pull-one; # 20
say $it.pull-one; # 30
```

Wanneer de waarden op zijn, geeft `pull-one` een bijzondere schildwacht terug, `IterationEnd`, in plaats van een echt element. Dezelfde `$it` om nog één waarde vragen laat dat zien:

```raku
say $it.pull-one =:= IterationEnd; # True
```

De operator `=:=` test op **hetzelfde object**, en zo herken je de schildwacht. Dat detail doet ertoe binnen een lus, waar je de opgehaalde waarde moet bewaren *én* testen. Als je haar met `=` **toekent**, belandt de waarde in een container en kijkt de vergelijking naar de container in plaats van naar `IterationEnd`. De remedie is **binden** met `:=`, zodat de variabele eenvoudigweg *is* wat `pull-one` teruggaf:

```raku
my $it = <a b c>.iterator;
loop {
    my $v := $it.pull-one;      # bind, not assign
    last if $v =:= IterationEnd;
    say $v;
}
```

De lus drukt `a`, `b`, `c` af en stopt daarna. Precies dat doet een `for`-lus onder de motorkap voor je: hij roept `.iterator` aan op het ding waar je overheen lust en blijft `pull-one` aanroepen tot hij `IterationEnd` tegenkomt. Je hoeft het zelden met de hand uit te schrijven, maar het één keer doen laat zien dat Raku eigenlijk over iterators lust en niet over lijsten.

{% include nav.html %}
