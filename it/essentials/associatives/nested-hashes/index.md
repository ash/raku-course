---
title: Hash annidati
---

{% include menu.html %}

Creare hash annidati è simile a creare [array annidati](/it/essentials/positionals/nested-arrays). Usa le parentesi graffe per abbracciare gli hash interni.

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

Nota che una virgola finale è un elemento sintattico valido:

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

Avere una virgola aiuta quando modifichi la struttura copiando e incollando le righe.

Per ottenere gli elementi dagli hash interni, usa due chiavi una dopo l'altra.

```raku
say %people<John><city>; # Madrid
say %people<Alla><city>; # Tokyo
```

{% include nav.html %}