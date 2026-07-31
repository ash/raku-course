---
title: Eligo kaj eraroj
translations_gpt:
---

{% include menu.html %}

## Problemo

Programo adicias la liston de nombroj `3, 5, 7` en buklo. Ĉe ĉiu ciklo, sendu la nunan kurantan sumon al norma erarfluo kiel progresmesaĝon, kaj post la buklo sendu la finan rezulton al norma eligo, uzante la flutenilojn rekte.

Ĉi tiu apartigo gravas: la rezulto povas esti kaptita aŭ plusendita per dukto, dum la progresmesaĝoj restas flanke sur norma erarfluo.

## Ekzemplo

Kiam vi rulas la programon, ambaŭ fluoj aperas sur la ekrano — la kurantaj sumoj, poste la fina rezulto:

```
running total: 3
running total: 8
running total: 15
15
```

Sed se vi forĵetas norman erarfluon, nur la vera rezulto restas:

```
$ raku output-and-error.raku 2>/dev/null
15
```

## Solvo

✅ [Vidu la solvon](solution)

{% include nav.html %}
