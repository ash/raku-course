---
title: Exists en delete
---

{% include menu.html %}

Het `:exists` adverb verandert een subscript in een vraag: is er een waarde bij deze sleutel of index? Het retourneert een Boolean zonder iets op te halen:

```raku
my %h = apple => 1, pear => 2;

say %h<apple>:exists; # True
say %h<plum>:exists;  # False
```

Dit is de juiste manier om te testen op een sleutel, want het simpelweg lezen van `%h<plum>` zou een ongedefinieerde waarde retourneren of, afhankelijk van de data, het verschil verbergen tussen "afwezig" en "aanwezig maar ongedefinieerd".

Het `:delete` adverb verwijdert het item en retourneert de waarde die het bevatte:

```raku
my %h = apple => 1, pear => 2;

say %h<apple>:delete; # 1
say %h.keys;          # (pear)
say %h;               # {pear => 2}
```

Het `apple` item is verdwenen, en de verwijderde waarde `1` wordt teruggegeven zodat je hem kunt gebruiken.

Beide adverbs werken ook op arrays, via de index:

```raku
my @a = 10, 20, 30;

say @a[1]:exists; # True
say @a[5]:exists; # False

say @a[1]:delete; # 20
say @a[1]:exists; # False
```

Als je benieuwd bent hoe het array eruitziet nadat een middelste element is verwijderd, hier is het antwoord:

```raku
say @a; # [10 (Any) 30]
```

Zo kun je met een enkele, consistente notatie containers ter plekke bevragen en wijzigen, in plaats van aparte methoden te gebruiken.

{% include nav.html %}
