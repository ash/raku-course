---
title: Gulzig en zuinig matchen
translations_gpt:
---

{% include menu.html %}

Standaard is een kwantor _gulzig_: hij matcht zoveel als hij maar kan terwijl de rest van het patroon nog steeds kan slagen. Kijk naar het matchen van de eerste `<` tot een `>`:

```raku
say '<a><b>' ~~ / '<' .+ '>' /; # ｢<a><b>｣
```

De `.+` slokte zoveel op als hij kon, helemaal tot de **laatste** `>`, dus loopt de match over beide paren haken heen.

Om een kwantor _zuinig_ te maken (ook wel _lui_ of _niet-gulzig_ genoemd), zet je er een `?` achter. Een zuinige kwantor matcht **zo weinig** mogelijk:

```raku
say '<a><b>' ~~ / '<' .+? '>' /; # ｢<a>｣
```

Nu stopt `.+?` bij de **eerste** `>`, dus matcht alleen het eerste stuk tussen haken.

Het achtervoegsel `?` werkt op elke kwantor: `*?` en `**?` zijn ook zuinig. Gulzige en zuinige versies matchen dezelfde soorten tekst — ze verschillen alleen in hoeveel ze nemen wanneer er iets te kiezen valt.

{% include nav.html %}
