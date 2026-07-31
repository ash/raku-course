---
title: Datentypen und skalare Container
---

{% include menu.html %}

Schauen wir uns ein Programm an, das dieselbe Variable wiederverwendet, um verschiedene Arten von Daten zu halten. Wir verwenden `dd`, um zu sehen, was der Container bei jedem Schritt enthält. Dieses Beispiel dient der Veranschaulichung und ist kein empfohlener Programmierstil.

```raku
my $value;
dd $value;

$value = 42;
dd $value;

$value = 'forty-two';
dd $value;
```

Jeder `dd`-Aufruf zeigt, was die Variable `$value` gerade enthält:

```
$value = Any
$value = 42
$value = "forty-two"
```

Zunächst ist die Variable leer, und `dd` meldet ihren Wert als `Any` — den undefinierten Basiswert, mit dem ein untypisierter Container beginnt. Nach den Zuweisungen zeigt `dd` die Ganzzahl und dann den String.

Beachte, dass `dd` hier keinen Typ vor dem Namen ausgibt. Ein untypisierter Container legt sich auf keinen Typ fest, sodass nur der Wert angezeigt wird. Wie du im nächsten Thema sehen wirst, verhält sich [ein Container mit deklariertem Typ](/de/advanced/scalar-containers/type-constraints) anders.

{% include nav.html %}
