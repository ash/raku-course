---
title: Metodes, kas izsauc metodes
translations_gpt:
---

{% include menu.html %}

Metode var izsaukt citu metodi uz tā paša objekta caur `self`:

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

`describe` iekšienē izsaukums `self.area` izpilda metodi `area` uz tā paša apļa, un tās rezultāts tiek izmantots apraksta uzbūvēšanai.

Metodes izsaukšanai rakstāt `self.area` — ar punktu — gluži tāpat, kā to uz instances izsauktu ārējs izsaucējs, piemēram, `$c.describe`. Tas ļauj sarežģītāku uzvedību uzbūvēt no mazākām metodēm, no kurām katra dara vienu darbu.

{% include nav.html %}
