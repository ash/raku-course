---
title: Splitsen en samenvoegen
translations_gpt:
---

{% include menu.html %}

Strings kunnen op verschillende manieren in stukken gebroken en weer samengevoegd worden.

De methode `words` splitst een string in een lijst van zijn door witruimte gescheiden woorden:

```raku
say 'Hello big World'.words; # (Hello big World)
```

De methode `split` breekt een string bij een scheidingsteken dat je zelf kiest:

```raku
say 'a,b,c'.split(','); # (a b c)
```

Een belangrijk bijzonder geval is splitsen op de **lege string** `''`: dat breekt een string in zijn losse tekens, maar schuift er ook helemaal vooraan en helemaal achteraan een lege string tussen, zodat het resultaat twee elementen meer heeft dan je misschien verwacht:

```raku
say 'abc'.split('').elems;        # 5 — de drie letters, plus aan elk uiteinde een lege string
say 'abc'.split('', :skip-empty); # (a b c) — het bijwoord :skip-empty laat de lege weg
```

Om in tekens te splitsen doet de methode `comb`, aangeroepen zonder argumenten, dat rechtstreeks — zonder losse lege strings die je moet opruimen:

```raku
say 'Raku'.comb; # (R a k u)
```

De andere kant op plakt de methode `join` een lijst van waarden aaneen tot één string, met een scheidingsteken ertussen:

```raku
say <a b c>.join('-'); # a-b-c
```

Twee andere methoden werken op delen van een string. De methode `substr` haalt er een stuk uit, gegeven een beginpositie en eventueel een lengte:

```raku
say 'Hello World'.substr(0, 5); # Hello
say 'Hello World'.substr(6);    # World
```

En `trim` verwijdert witruimte aan beide uiteinden van een string:

```raku
say '  hi  '.trim; # hi
```

{% include nav.html %}
