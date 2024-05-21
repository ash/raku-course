---
title: Hashes anidados
---

{% include menu.html %}

Crear hashes anidados es similar a crear [arrays anidados](/es/essentials/positionals/nested-arrays). Usa llaves para abarcar los hashes internos.

```raku
my %people =
    John => {
        age => 20,
        city => 'Madrid'
    },
    Alla => {
        age => 21,
        city => 'Tokyo'
    };
```

Ten en cuenta que una coma al final es un elemento de sintaxis válido:

```raku
my %people =
    John => {
        age => 20,
        city => 'Madrid',
    },
    Alla => {
        age => 21,
        city => 'Tokyo',
    };
```

Tener una coma ayuda cuando editas la estructura copiando y pegando las líneas.

Para obtener los elementos de los hashes internos, usa dos claves una tras otra.

```raku
say %people<John><city>; # Madrid
say %people<Alla><city>; # Tokyo
```

{% include nav.html %}