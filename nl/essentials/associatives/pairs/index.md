---
title: Pairs
---

{% include menu.html %}

Een paar is een datastructuur die een naam en een waarde bewaart. Ze vormen een solide object dat in een scalair variabele kan worden opgeslagen. Hier is een voorbeeld van hoe je een paar maakt:

```raku
my $pair = name => 'Anna';
```

Het type van de variabele `$pair` is `Pair`:

```raku
say $pair.WHAT; # (Pair)
```

Het is mogelijk om de naam en de waarde afzonderlijk te benaderen door gebruik te maken van de corresponderende methoden `key` en `value`:

```raku
say $pair.key; # name
say $pair.value; # Anna
```

Een belangrijk kenmerk van paren is dat ze onveranderlijke objecten zijn. Dit betekent dat je geen nieuwe waarde kunt toewijzen of een nieuwe naam kunt geven aan een bestaand paar. Maar je kunt natuurlijk wel een volledig nieuw paar toewijzen aan dezelfde variabele:

```raku
my $pair = name => 'Anna';
$pair = name => 'John';
say $pair.value; # John
```

## Subscriptie

Er is een andere methode om de waarde van een paar te lezen. Je kunt het subscripten met de naam van de sleutel tussen hoekige haken. Dit is hoe je dat doet:

```raku
say $pair<name>;
```

Merk op dat het niet nodig is om de naam van de sleutel te citeren als deze geen spaties bevat. Als dat wel het geval is, worden de regels iets strikter:

```raku
my $pair = 'employee name' => 'Julie Madelon';
say $pair{'employee name'};
```

Mis niet het feit dat deze keer accolades worden gebruikt.

{% include nav.html %}