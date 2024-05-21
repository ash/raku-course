---
title: Geneste arrays
---

{% include menu.html %}

Arrays kunnen elke andere data bevatten, inclusief andere arrays. Om de grenzen van de geneste arrays te markeren, gebruik vierkante haken:

```raku
my @table = 
    [1, 2, 3, 4],
    [10, 20, 30, 40],
    [100, 200, 300, 400];
```

Het is ook mogelijk om nog een paar haken te hebben voor de array op het hoogste niveau. Het volgende voorbeeld toont dezelfde datastructuur als hiervoor.

```raku
my @table = [
    [1, 2, 3, 4],
    [10, 20, 30, 40],
    [100, 200, 300, 400]
];
```

Om toegang te krijgen tot interne items, voeg zoveel indices toe als nodig is. Een enkel paar vierkante haken gaat een niveau dieper in de structuur:

```raku
say @table[0][3]; # Print 4
say @table[2][1]; # Print 200 
```


{% include nav.html %}