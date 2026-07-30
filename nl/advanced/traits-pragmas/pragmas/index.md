---
title: Pragma's
translations_gpt:
---

{% include menu.html %}

Een _pragma_ ziet eruit als een module die je met `use` laadt, maar in plaats van code binnen te halen verandert hij een compilatieregel voor de rest van het huidige bereik. Zet er een aan met `use` en (waar dat zin heeft) uit met `no`.

Het belangrijkste pragma, `strict`, staat in Raku **standaard aan**: het eist dat elke variabele gedeclareerd is voor gebruik, en daarom wordt een typefout in een variabelenaam opgemerkt in plaats van stilzwijgend een nieuwe variabele aan te maken.

`strict` uitzetten met `no strict` heft die eis op, zodat je kunt toekennen aan een variabele die nooit met `my` gedeclareerd is:

```raku
no strict;

$x = 42;
say $x; # 42
```

Met het standaard `strict` van kracht zou die kale `$x = 42` een compilatiefout zijn — *Variable '$x' is not declared*. De regel `no strict` versoepelt de regel voor de rest van het omvattende bereik.

Andere pragma's zijn onder meer `fatal` (dat een stille mislukking omzet in een geworpen exceptie — handig zodra je exceptieafhandeling hebt gezien), `isms` (om idiomen uit andere talen toe te staan) en `variables` (om de regels voor variabelen bij te stellen). De werking van een pragma is _lexicaal_ — hij duurt slechts tot het einde van het blok waarin hij staat — dus je kunt een regel aanscherpen of versoepelen voor precies dat stuk code waar je dat wilt.

Eén pragma neemt een argument: `lib` voegt een map toe aan de lijst die Raku doorzoekt bij het laden van modules — het equivalent binnen het programma van de opdrachtregeloptie `-I`:

```raku
use lib 'lib';
```

Je grijpt ernaar zodra je je eigen [modules](/nl/advanced/modules-basics/using-modules) gaat schrijven en laden.

{% include nav.html %}
