---
title: Arrays
---

{% include menu.html %}

Arrays zijn aggregatiedatatypen die meer dan één waarde kunnen bevatten. Dat onderscheidt arrays van [scalaire items](/nl/essentials/scalar-variables). Array-elementen kunnen worden geïndexeerd (of _gesubscript_). Met andere woorden, de elementen hebben een positie (wat de algemene naam voor dit soort data verklaart: positionals).

Array-variabelen gebruiken een ander soort sigil: `@`. De regels voor de variabelenaam zijn hetzelfde als [voor scalairs](/nl/essentials/scalar-variables/identifiers/).

```raku
my @cities;
```

Tot nu toe is de array genaamd `@cities` aangemaakt. Je kunt deze vullen met enkele waarden:

```raku
@cities = 'Parijs', 'Rome', 'Berlijn';
```

Als alternatief is het mogelijk om de waarden direct te initialiseren:

```raku
my @cities = 'Parijs', 'Rome', 'Berlijn';
```

## Indexeren

Om toegang te krijgen tot een enkel item van een array, gebruik je een paar haakjes die je na de naam van de variabele plaatst:

```raku
say @cities[1];
```

Merk op dat de sigil altijd hetzelfde blijft. Aangezien elementen vanaf nul worden geteld, is het element `@cities[1]` `'Rome'` in ons voorbeeld.

Arrays zijn muteerbaar, dus je kunt de items ervan eenvoudig wijzigen door er simpelweg een nieuwe waarde aan toe te wijzen:

```raku
@cities[0] = 'Rome';
@cities[1] = 'Parijs';
```

Hierna zal de uitspraak `say @cities[1]` de nieuwe waarde `'Parijs'` afdrukken.

## Grootte

Om de huidige lengte van een array te krijgen, of, met andere woorden, het aantal elementen, gebruik je de `elems`-methode:

```raku
say @cities.elems; # 3
```

Als de array verschijnt in een context waar de verwachte parameter een getal is, is de retourwaarde de grootte van de array:

```raku
say +@cities; # 3
```

Hier vereist de [`+` prefix-operator](/nl/essentials/coercion/prefixes) een numerieke waarde van zijn argument, dus het resultaat van `+@cities` is `3`.

{% include nav.html %}