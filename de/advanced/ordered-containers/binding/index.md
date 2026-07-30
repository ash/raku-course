---
title: Bindung mit `:=`
---

{% include menu.html %}

Bisher hat jede Variable, die du erstellt hast, einen neuen Container erzeugt, und die Zuweisung mit `=` hat einen Wert _in_ diesen Container gelegt. Binding, geschrieben mit `:=`, ist anders: Es lässt einen Namen auf einen _bereits existierenden_ Container verweisen, statt einen neuen zu erstellen.

Nach dem Binding teilen sich die beiden Namen denselben Container, sodass eine Änderung über einen von ihnen durch den anderen sichtbar ist:

```raku
my $x = 10;
my $y := $x;

$x = 20;
say $y; # 20
```

Hier kopiert `$y := $x` nicht den Wert `10`. Es macht `$y` zu einem anderen Namen für genau denselben Container wie `$x`. Wenn `$x` später auf `20` gesetzt wird, gibt das Lesen von `$y` ebenfalls `20` zurück.

Vergleiche dies mit einer gewöhnlichen Zuweisung, die den Wert in einen separaten Container kopiert:

```raku
my $x = 10;
my $y = $x; # a plain copy

$x = 20;
say $y; # 10
```

Binding funktioniert auch mit Arrays. Das Folgende macht `@alias` zu einem anderen Namen für `@data`:

```raku
my @data = 1, 2, 3;
my @alias := @data;

@alias[0] = 99;
say @data; # [99 2 3]
```

Ein weiteres Detail: Wenn du einen Namen direkt an einen Literalwert bindest, gibt es keinen Container dahinter, sodass der Name schreibgeschützt wird:

```raku
my $pi := 3.14;
$pi = 3;
```

```
Cannot assign to an immutable value
  in block <unit> at t.raku line 2
```

{% include nav.html %}
