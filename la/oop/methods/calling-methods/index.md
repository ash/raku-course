---
title: Methodi methodos vocantes
translations_gpt:
---

{% include menu.html %}

Methodus aliam methodum in eodem obiecto per `self` vocare potest:

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

Intra `describe`, vocatio `self.area` methodum `area` in eodem circulo exsequitur, et effectus eius ad descriptionem aedificandam adhibetur.

Scribis `self.area` — cum puncto — ut methodum voces, exacte sicut vocans externus eam in exemplari vocaret, exempli gratia `$c.describe`. Hoc tibi permittit agendi rationem magis implicatam ex methodis minoribus aedificare, quarum unaquaeque unum munus agit.

{% include nav.html %}
