---
title: Sets, bags en mixes
translations_gpt:
---

{% include menu.html %}

Naast arrays en hashes biedt Raku een aantal gespecialiseerde containers voor verzamelingen van waarden. De eenvoudigste is de `Set` — een ongeordende verzameling van _unieke_ waarden, waarbij elke waarde er ofwel in zit of niet, en duplicaten worden genegeerd.

Je maakt een set aan met de `set`-routine. Herhaalde waarden worden samengevoegd tot een:

```raku
my $s = set(1, 2, 3, 2, 1);
say $s.elems; # 3
```

Hoewel er vijf getallen zijn meegegeven, bevat de set slechts drie elementen, omdat `1` en `2` meer dan eens voorkwamen.

De belangrijkste vraag die je aan een set stelt, is of een waarde erin voorkomt. De operator `∈` (lees: "is een element van") geeft een Boolean terug:

```raku
say 2 ∈ set(1, 2, 3); # True
say 9 ∈ set(1, 2, 3); # False
```

Als je liever gewone ASCII gebruikt, kan dezelfde operator geschreven worden als `(elem)`:

```raku
say 2 (elem) set(1, 2, 3); # True
```

De volgende onderwerpen laten zien hoe je sets kunt combineren, en introduceren bags en mixes, die nauw verwant zijn aan de set.

{% include nav.html %}
