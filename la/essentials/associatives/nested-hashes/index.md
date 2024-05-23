---
title: Nidi Hashium
---

{% include menu.html %}

Creare nidos hashium simile est creare [nidos arrayium](/la/essentials/positionals/nested-arrays). Utere uncis curvis ad amplectendum interiores hashes.

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

Nota quod comma terminale est elementum syntacticum validum:

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

Habere comma adiuvat cum structuram editas per lineas copiandas et pastendas.

Ut elementa ex interioribus hashibus accipias, utere duobus clavibus una post alteram.

```raku
say %people<John><city>; # Madrid
say %people<Alla><city>; # Tokyo
```

{% include nav.html %}