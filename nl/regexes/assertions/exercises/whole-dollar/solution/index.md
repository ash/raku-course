---
title: 'Oplossing: Een bedrag in hele dollars'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
say '$50' ~~ / <?after '$'> \d+ >> <!before '.'> /;
```

🦋 Je kunt de broncode vinden in het bestand [whole-dollar.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/assertions/whole-dollar.raku).

## Uitvoer

```
｢50｣
```

## Opmerkingen

1. `<?after '$'>` is een positieve lookbehind — hij eist een `$` vlak vóór het getal — en `<!before '.'>` is een negatieve lookahead — hij eist dat er **geen** `.` op volgt. Noch de `$`, noch de omgeving wordt onderdeel van de match, dus is het resultaat alleen `50`.

1. De `>>` is een woordgrens die het einde van het getal markeert. Zonder die grens zou de gulzige `\d+` kunnen terugkrabbelen: bij `$39.99` zou hij de `9` opgeven en `3` matchen (dat niet door `.` gevolgd wordt). `>>` dwingt het hele getal te nemen, zodat `$3.99` en `$39.99` terecht niets matchen.

1. Dit is een geval waarin een lookahead zijn nut bewijst: "niet gevolgd door een decimale punt" kun je niet met een gewone capturende groep uitdrukken, omdat er niets is om te capturen — alleen een voorwaarde om te controleren.

{% include nav.html %}
