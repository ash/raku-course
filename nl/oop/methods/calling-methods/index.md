---
title: Methoden die methoden aanroepen
translations_gpt:
---

{% include menu.html %}

Een methode kan via `self` een andere methode op hetzelfde object aanroepen:

```raku
class Circle {
    has $.radius;

    method area {
        3.14 * $.radius * $.radius;
    }

    method describe {
        'The area is ' ~ self.area;
    }
}

my $c = Circle.new(radius => 2);
say $c.describe; # The area is 12.56
```

Binnen `describe` draait de aanroep `self.area` de methode `area` op dezelfde cirkel, en het resultaat wordt gebruikt om de beschrijving op te bouwen.

Je schrijft `self.area` — met de punt — om een methode aan te roepen, precies zoals een aanroeper van buiten hem op een instantie zou aanroepen, bijvoorbeeld: `$c.describe`. Zo bouw je complexer gedrag op uit kleinere methoden, die elk één taak doen.

{% include nav.html %}
