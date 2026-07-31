---
title: 'Solutio: Area rectanguli'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

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

🦋 Inveni codicem fontem in archivo [rectangle-area.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/methods/rectangle-area.raku).

## Exitus

```
area is 12
```

## Commentarii

1. Methodus `area` proprias obiecti `width` et `height` per accessores legit easque multiplicat — pro rectangulo `3` per `4`, id est `12`.

1. Methodus `describe` illam computationem non repetit. Loco eius `self.area` vocat, methodum `area` in eodem obiecto exsequens effectumque eius denuo adhibens. Agendi rationem maiorem ex methodis minoribus sic aedificare unamquamque methodum unius muneris ream servat.

{% include nav.html %}
