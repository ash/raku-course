---
title: Lookbehind
translations_gpt:
---

{% include menu.html %}

Een _lookbehind_ controleert wat er onmiddellijk **vóór** de huidige positie komt:

* `<?after …>` — slaagt als de tekst ervoor matcht (positieve lookbehind)
* `<!after …>` — slaagt als de tekst ervoor **niet** matcht (negatieve lookbehind)

Zo kun je iets matchen alleen vanwege wat eraan voorafgaat, zonder dat voorvoegsel in het resultaat op te nemen. Vang bijvoorbeeld de cijfers die op een dollarteken volgen, maar laat de `$` buiten de match:

```raku
if '$100' ~~ / <?after '$'> \d+ / {
    say $/; # ｢100｣
}
```

De assertion `<?after '$'>` eist een `$` vlak vóór de huidige positie, waarna `\d+` de cijfers matcht. De match is `100`, zonder het dollarteken.

Lookahead en lookbehind worden vaak gecombineerd. Een stuk tekst omgeven door `<?after …>` en `<?before …>` matcht alleen wanneer het tussen de vereiste buren staat — een handige manier om een waarde uit een bekende context te halen.

{% include nav.html %}
