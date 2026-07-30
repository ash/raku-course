---
title: De maal-kwantor
translations_gpt:
---

{% include menu.html %}

Wanneer je een exact aantal herhalingen nodig hebt, of een bereik, gebruik je de kwantor `**` gevolgd door een getal:

```raku
say '2025' ~~ / \d ** 4 /; # ｢2025｣
```

`\d ** 4` matcht precies vier cijfers achter elkaar.

Een bereik met twee punten laat een variabel aantal toe. Zo matcht `\d ** 2..3` twee of drie cijfers — zoveel als er beschikbaar zijn, tot drie:

```raku
say '12345' ~~ / \d ** 2..3 /; # ｢123｣
```

Het patroon nam drie cijfers, omdat drie het maximum is dat het bereik `2..3` toestaat.

Je kunt de bovenkant ook openlaten. `\d ** 2..*` betekent "twee of meer cijfers", en `\d ** 1..*` betekent hetzelfde als `\d+`.

De kwantor `**` is de algemene vorm; `*`, `+` en `?` zijn slechts handige afkortingen voor de gewone gevallen `0..*`, `1..*` en `0..1`.

{% include nav.html %}
