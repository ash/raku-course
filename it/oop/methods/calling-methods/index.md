---
title: Metodi che chiamano metodi
translations_gpt:
---

{% include menu.html %}

Un metodo può chiamare un altro metodo sullo stesso oggetto attraverso `self`:

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

Dentro `describe`, la chiamata `self.area` esegue il metodo `area` sullo stesso cerchio, e il suo risultato viene usato per costruire la descrizione.

Scrivi `self.area` — con il punto — per chiamare un metodo, esattamente come lo chiamerebbe un chiamante esterno su un'istanza, per esempio `$c.describe`. Questo ti permette di costruire comportamenti più complessi a partire da metodi più piccoli, ciascuno con un compito solo.

{% include nav.html %}
