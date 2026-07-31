---
title: 'Risinājums: Taisnstūra laukums'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
class Rectangle {
    has $.width;
    has $.height;

    method area {
        $.width * $.height;
    }

    method describe {
        "area is " ~ self.area;
    }
}

say Rectangle.new(width => 3, height => 4).describe;
```

🦋 Atrodiet programmu failā [rectangle-area.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/methods/rectangle-area.raku).

## Izvade

```
area is 12
```

## Komentāri

1. Metode `area` nolasa objekta paša `width` un `height` caur to piekļuves metodēm un sareizina tos — `3` reiz `4` taisnstūrim tas ir `12`.

1. Metode `describe` šo aprēķinu neatkārto. Tā vietā tā izsauc `self.area`, izpildot metodi `area` uz tā paša objekta un izmantojot tās rezultātu. Šāda lielākas uzvedības būvēšana no mazākām metodēm ļauj katrai metodei atbildēt par vienu darbu.

{% include nav.html %}
