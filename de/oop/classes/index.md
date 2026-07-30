---
title: Klassen
translations_gpt:
---

{% include menu.html %}

Bisher waren die Datentypen, die Sie verwendet haben — Zahlen, Zeichenketten, Arrays und so weiter —, alle in Raku eingebaut. Die _objektorientierte Programmierung_ erlaubt es Ihnen, eigene Typen zu definieren, _Klassen_ genannt, und Werte dieser Typen zu erzeugen, _Objekte_ genannt.

Eine Klasse wird mit dem Schlüsselwort `class` definiert, gefolgt von einem Namen und einem Block:

```raku
class Dog {
}
```

Diese Klasse `Dog` ist vorerst leer, aber sie ist bereits ein neuer Typ. Um ein Objekt der Klasse zu erzeugen — eine _Instanz_ —, rufen Sie die Methode `new` auf dem Klassennamen auf:

```raku
class Dog {
}

my $rex = Dog.new;
say $rex; # Dog.new
```

Die Variable `$rex` enthält nun ein `Dog`-Objekt. Jeder Aufruf von `new` erzeugt ein eigenes Objekt:

```raku
my $rex = Dog.new;
my $fido = Dog.new;
```

`$rex` und `$fido` sind zwei verschiedene Hunde, obwohl die Klasse noch keinen Inhalt hat. In den folgenden Abschnitten geben Sie einer Klasse ihre eigenen Daten (_Attribute_) und ihr eigenes Verhalten (_Methoden_). Das erste Thema betrachtet den Unterschied zwischen einer Klasse und ihren Instanzen genauer.

{% include nav.html %}
