---
title: Ligzdošanas masīvi
---

{% include menu.html %}

Masīvi var saturēt jebkurus citus datus, tostarp citus masīvus. Lai norobežotu ligzdošanas masīvu robežas, izmantojiet kvadrātiekavas:

```raku
my @table = 
    [1, 2, 3, 4],
    [10, 20, 30, 40],
    [100, 200, 300, 400];
```

Ir iespējams arī izmantot vēl vienu kvadrātiekavu pāri augstākā līmeņa masīvam. Nākamais piemērs parāda to pašu datu struktūru kā iepriekš.

```raku
my @table = [
    [1, 2, 3, 4],
    [10, 20, 30, 40],
    [100, 200, 300, 400]
];
```

Lai piekļūtu iekšējiem elementiem, pievienojiet tik daudz indeksu, cik nepieciešams. Viena kvadrātiekavu pāra izmantošana ļauj iet vienu līmeni dziļāk struktūrā:

```raku
say @table[0][3]; # Izdrukā 4
say @table[2][1]; # Izdrukā 200 
```


{% include nav.html %}