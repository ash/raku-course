---
title: '`gather` en `take`'
---

{% include menu.html %}

Het `gather`- en `take`-paar is een flexibele manier om een lijst op te bouwen. Je omsluit wat code in een `gather`-blok, en elke keer dat die code `take` aanroept, wordt de waarde toegevoegd aan de lijst die `gather` oplevert.

```raku
my @result = gather {
    take 1;
    take 2;
    take 3;
};

say @result; # [1 2 3]
```

De drie `take`-aanroepen leveren drie waarden op, en `gather` verzamelt ze in de lijst die in `@result` wordt opgeslagen.

De echte kracht van dit paar komt naar voren wanneer de `take`-aanroepen verspreid zijn door gewone besturingslogica, zoals een lus met een voorwaarde. De lijst bevat dan alleen de waarden die je hebt gekozen om te nemen:

```raku
my @evens = gather for 1..10 {
    take $_ if $_ %% 2;
};

say @evens; # [2 4 6 8 10]
```

Hier doorloopt de lus de getallen van 1 tot 10, maar alleen de even getallen worden genomen, dus `@evens` bevat uiteindelijk `2, 4, 6, 8, 10`. (De `%%`-operator test of een getal deelbaar is zonder rest.)

Deze scheiding is wat `gather`/`take` zo handig maakt: de omringende code bepaalt _wanneer_ een waarde geproduceerd wordt, en `gather` verzamelt stilletjes alles wat genomen wordt.

{% include nav.html %}
