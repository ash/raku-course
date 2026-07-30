---
title: Skalare Container
---

{% include menu.html %}

Wie der Name schon sagt, nehmen Skalar-Container einzelne (skalare) Werte auf. Solche Container werden mit dem Sigil `$` gekennzeichnet.

Hier ist eine der einfachsten und direktesten Verwendungen eines Skalars:

```raku
my $lang = 'Raku';
```

Die Variable `$lang` ist ein Skalar-Container.

Standardmäßig erzwingen Skalar-Container keinen Typ für die Daten, sodass du einen Wert beliebigen Typs darin speichern kannst. Die einfachste Demonstration dafür ist, dass du dieselbe Variable wiederverwenden kannst, um erst eine Ganzzahl und dann einen String zu speichern:

```raku
my $value = 42;
$value = 'forty-two';
```

(Der Autor ermutigt dich nicht, so zu programmieren.)

Intern bedeutet dies, dass ein neuer Container standardmäßig Werte des Typs `Any` aufnehmen kann. `Any` ist der Basistyp für die meisten anderen Typen, wie `Int` oder `Str`.

{% include nav.html %}
