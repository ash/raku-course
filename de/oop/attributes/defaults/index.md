---
title: Standardwerte
translations_gpt:
---

{% include menu.html %}

Ein Attribut kann einen _Standardwert_ erhalten, der verwendet wird, wenn ein Objekt ohne Wert dafür erzeugt wird. Schreiben Sie den Standardwert mit `=` hinter das Attribut:

```raku
class Dog {
    has Str $.name;
    has Rat $.weight = 4.0;
}
```

Beachten Sie, dass sich der Typ der Attribute ähnlich wie bei Variablen festlegen lässt.

Wenn Sie `weight` nicht an `new` übergeben, nimmt das Attribut den Standardwert:

```raku
my $rex = Dog.new(name => 'Rex');
say $rex.weight; # 4
```

Sie können den Standardwert weiterhin überschreiben, indem Sie einen Wert übergeben:

```raku
my $lighty = Dog.new(name => 'Lighty', weight => 3.2);
say $lighty.weight; # 3.2
```

Ohne Standardwert und ohne einen an `new` übergebenen Wert ist ein Attribut schlicht undefiniert, genau wie eine frische skalare Variable.

{% include nav.html %}
