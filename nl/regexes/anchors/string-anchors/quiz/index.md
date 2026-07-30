---
title: 'Quiz — Stringankers'
translations_gpt:
---

{% include menu.html %}

Wat drukt het volgende programma af? Let op de `$` aan het eind van het patroon.

```raku
say so 'hello world' ~~ / world $/;
```

{:.quiz}
1 | True
0 | False
0 | ｢world｣
0 | Nil

{% include quiz.html %}

<div class="extended-explanation">

Het anker `$` eist dat de match helemaal aan het einde van de string eindigt. De string `hello world` eindigt inderdaad op `world`, dus slaagt het verankerde patroon en geeft `so` `True` terug.

</div>

{% include nav.html %}
