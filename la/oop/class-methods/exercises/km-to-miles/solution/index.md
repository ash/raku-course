---
title: 'Solutio: A chiliometris ad miliaria'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
class Converter {
    method km-to-miles($km) {
        $km * 0.621;
    }
}

say Converter.km-to-miles(10);
```

🦋 Inveni codicem fontem in archivo [km-to-miles.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/class-methods/km-to-miles.raku).

## Exitus

```
6.21
```

## Commentarii

1. Conversio a nullo certo obiecto pendet, itaque ut methodus classis scribitur et directe in `Converter` vocatur.

1. Methodus classis tamen parametros accipere potest: hic numerum chiliometrorum accipit et miliaria reddit.

{% include nav.html %}
