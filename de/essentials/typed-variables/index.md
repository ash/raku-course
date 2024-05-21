---
title: Typisierte Variablen
---

{% include menu.html %}

In Raku kann eine skalare Variable (oder ein skalarer Container) ein einzelnes Objekt verschiedener Typen enthalten. Zum Beispiel kann dieselbe Variable zuerst eine Zahl und dann einen String enthalten:

```raku
my $var = 42;
$var = 'Hallo';
```

Hier ist ein weiteres Beispiel für das Mischen verschiedener Datentypen im selben Ausdruck:

```raku
my $a = '100';
my $b = 200;
say $a + $b; # 300
```

Dies ist wahrscheinlich nicht die beste Programmierpraxis, aber es ist ein vollkommen gültiges Raku-Programm.

Nichtsdestotrotz erlaubt es Raku, anzugeben, was eine bestimmte Variable enthalten darf. Es gibt mehr Details in den unten stehenden Themen.

{% include nav.html %}