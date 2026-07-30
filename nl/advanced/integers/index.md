---
title: Gehele getallen
---

{% include menu.html %}

Je hebt gehele getallen gebruikt vanaf het allereerste begin van de cursus. Dit gedeelte bekijkt een paar van hun minder voor de hand liggende mogelijkheden.

De belangrijkste is dat gehele getallen in Raku _willekeurige precisie_ hebben: ze zijn niet beperkt tot een vast aantal bytes, en ze lopen nooit stilletjes over. Zolang er genoeg geheugen is, kan een geheel getal zo groot worden als je nodig hebt:

```raku
say 2 ** 100;
# 1267650600228229401496703205376
```

Dit is een exacte waarde, geen benadering. Hetzelfde geldt voor producten van grote getallen — de faculteit van 50 wordt bijvoorbeeld exact berekend:

```raku
my $factorial = 1;
$factorial = $factorial * $_ for 1..50;
say $factorial;
# 30414093201713378043612608166064768844377641568960512000000000000
```

Om lange getallen in de broncode leesbaarder te maken, kun je de cijfers groeperen met underscores. De underscores worden genegeerd door de compiler:

```raku
say 1_000_000; # 1000000
```

De volgende onderwerpen laten zien hoe je gehele getallen in andere talstelsels schrijft en introduceren een aantal handige integer methoden.

{% include nav.html %}
