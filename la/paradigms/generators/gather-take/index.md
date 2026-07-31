---
title: gather et take
translations_gpt:
---

{% include menu.html %}

Blocus `gather` valores colligit. Ubicumque intra illum — etiam in anulis et subprogrammatibus quae vocat — `take` valorem indici addit quem `gather` producit:

```raku
my @squares = gather {
    take $_ ** 2 for 1..3;
}

say @squares; # [1 4 9]
```

`take` semel pro unoquoque numero `1, 2, 3` currit, `1`, `4` et `9` conferens. Totus blocus `gather` in indicem omnium sumptorum aestimatur.

`take` sub quolibet ordine exsecutionis apparere potest, quod `gather` optimum reddit ad indicem cum condicionibus aedificandum:

```raku
my @evens = gather {
    for 1..10 {
        take $_ if $_ %% 2;
    }
}

say @evens; # [2 4 6 8 10]
```

Hic valor solum tunc sumitur cum `if` succedit, itaque soli numeri pares in indicem perveniunt. Hoc saepe clarius est quam indicem manu per `push` aedificare, quia logica ut anulus ordinarius legitur et `take` simpliciter valores servandos notat.

{% include nav.html %}
