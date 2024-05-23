---
title: Ennestigitaj haketoj
---

{% include menu.html %}

Krei ennestigitajn haketojn estas simila al krei [ennestigitajn tabelojn](/eo/essentials/positionals/nested-arrays). Uzu kurbajn krampojn por ĉirkaŭbraki la internajn haketojn.

```raku
my %homoj =
    John => {
        aĝo => 20,
        urbo => 'Madrido'
    },
    Alla => {
        aĝo => 21,
        urbo => 'Tokio'
    };
```

Notu, ke fina komo estas valida sintaksa elemento:

```raku
my %homoj =
    John => {
        aĝo => 20,
        urbo => 'Madrido',
    },
    Alla => {
        aĝo => 21,
        urbo => 'Tokio',
    };
```

Havi komon helpas kiam vi redaktas la strukturon per kopiado kaj algluo de la linioj.

Por akiri la elementojn el la internaj haketoj, uzu du ŝlosilojn unu post la alia.

```raku
say %homoj<John><urbo>; # Madrido
say %homoj<Alla><urbo>; # Tokio
```

{% include nav.html %}