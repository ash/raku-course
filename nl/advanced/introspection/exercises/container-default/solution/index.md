---
title: 'Solution: De standaardwaarde van de container'
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de opgave.

## Code

```raku
my $count is default(0);

say $count;
say $count.VAR.default;
```

🦋 Je kunt de broncode vinden in het bestand [container-default.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/introspection/container-default.raku).

## Uitvoer

```
0
0
```

## Opmerkingen

1. De `is default(0)`-trait geeft de container een standaardwaarde. Omdat er niets is toegewezen, geeft het lezen van `$count` die standaardwaarde terug, dus de eerste regel drukt `0` af.

1. `.VAR.default` vraagt de container zelf naar zijn gedeclareerde standaardwaarde, die ook `0` is. Zonder de trait zou een container zonder typebeperking standaard `(Any)` hebben.

{% include nav.html %}
