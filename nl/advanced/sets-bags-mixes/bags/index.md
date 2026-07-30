---
title: Bags en mixes
translations_gpt:
---

{% include menu.html %}

Een set onthoudt alleen _of_ een waarde aanwezig is. Soms wil je ook weten _hoe vaak_ deze voorkomt. Daar is een `Bag` voor: die houdt een telling bij voor elke waarde.

Je maakt een bag aan met de `bag`-routine. Herhaalde waarden worden niet samengevoegd — ze worden geteld:

```raku
my $b = bag(<a b a c a>);
say $b<a>; # 3
say $b<b>; # 1
```

Als je de bag om een waarde vraagt met de `< >`-subscript, krijg je terug hoe vaak die waarde erin is gestopt. De methode `total` geeft de som van alle tellingen:

```raku
say bag(<a b a c a>).total; # 5
```

Een `Mix` is hetzelfde idee als een bag, behalve dat de tellingen (die _gewichten_ worden genoemd) fractioneel mogen zijn in plaats van gehele getallen. Om expliciete gewichten toe te kennen, koppel je elke waarde aan zijn gewicht en converteer je de lijst met `.Mix`:

```raku
my $m = (flour => 2.5, sugar => 0.75).Mix;
say $m<flour>; # 2.5
say $m.total;  # 3.25
```

Het opvragen van een gewicht met `< >` en het optellen ervan met `total` werkt precies hetzelfde als bij een bag — alleen hoeven de getallen niet geheel te zijn. Hier telt `total` de gewichten `2.5` en `0.75` op, wat `3.25` oplevert — het is de som van de gewichten, niet een telling van de waarden. Bags en mixes zijn handig wanneer je hoeveelheden wilt bijhouden — bijvoorbeeld tellen hoe vaak elk woord in een tekst voorkomt, of gewichten toekennen aan opties.

{% include nav.html %}
