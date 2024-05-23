---
title: Enigitaj tabeloj
---

{% include menu.html %}

Tabeloj povas enhavi ajnajn aliajn datumojn, inkluzive de aliaj tabeloj. Por limigi la limojn de la enigitaj tabeloj, uzu kvadratajn krampojn:

```raku
my @table = 
    [1, 2, 3, 4],
    [10, 20, 30, 40],
    [100, 200, 300, 400];
```

Eblas ankaŭ havi unu plian paron da krampoj por la supra-nivela tabelo. La sekva ekzemplo montras la saman datumstrukturon kiel antaŭe.

```raku
my @table = [
    [1, 2, 3, 4],
    [10, 20, 30, 40],
    [100, 200, 300, 400]
];
```

Por aliri internajn erojn, aldonu tiom da indeksoj kiom necesas. Unu paro da kvadrataj krampoj iras unu nivelon pli profunde en la strukturon:

```raku
say @table[0][3]; # Presas 4
say @table[2][1]; # Presas 200 
```


{% include nav.html %}