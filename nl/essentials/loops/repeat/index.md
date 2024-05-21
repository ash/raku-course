---
title: Het gebruik van repeat
---

{% include menu.html %}

De `while` en `until` blokken worden mogelijk nooit uitgevoerd als de conditie aanvankelijk `False` is. In tegenstelling hiermee wordt het `repeat` blok altijd minstens één keer uitgevoerd. De stopconditie wordt gecontroleerd na het codeblok. Je gebruikt dezelfde woorden `while` of `until` voor de test.

Bekijk dit programma.

```raku
my $x = 100;
repeat {
    $x = prompt 'Voer een getal in: ';
    zeg "Je hebt $x ingevoerd.";
} while $x <= 10;
zeg "$x is groter dan 10.";
```

De variabele `$x` is aanvankelijk ingesteld op `100`, en de `while` conditie controleert of `$x` kleiner dan of gelijk aan `10` is. Met de gegeven waarde van de variabele is de conditie al `False`, maar het codeblok wordt toch eerst uitgevoerd.

```console
$ raku t.raku
Voer een getal in: 10
Je hebt 10 ingevoerd.
Voer een getal in: 20
Je hebt 20 ingevoerd.
20 is groter dan 10.
```

Laten we het programma aanpassen om `until` te gebruiken.

```raku
my $x = 0;
repeat {
    $x = prompt 'Voer een getal in: ';
    zeg "Je hebt $x ingevoerd.";
} until $x > 10;
zeg "$x is groter dan 10.";
```

Voer het uit om te bevestigen dat het werkt zoals verwacht:

```console
$ raku t.raku
Voer een getal in: 5
Je hebt 5 ingevoerd.
Voer een getal in: 15
Je hebt 15 ingevoerd.
15 is groter dan 10.
```

{% include nav.html %}