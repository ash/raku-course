---
title: Een map opsommen
translations_gpt:
---

{% include menu.html %}

De routine `dir` geeft de items van een map terug — elk als padobject. Hun volgorde ligt niet vast, dus het is gebruikelijk het resultaat te sorteren voor voorspelbare uitvoer.

```raku
mkdir 'box';
spurt 'box/a.txt', '';
spurt 'box/b.txt', '';

for dir('box').sort -> $entry {
    say $entry.basename;
}
```

Dit drukt de namen van de bestanden in de map `box` op volgorde af:

```
a.txt
b.txt
```

Elk item is een volledig padobject; de methode `basename` geeft alleen de laatste naam, zonder het mapgedeelte. Aan een padobject kun je alle vragen van eerder stellen — `.f`, `.d`, `.e` — dus je kunt bijvoorbeeld door een map lopen en er alleen de bestanden uit vissen.

{% include nav.html %}
