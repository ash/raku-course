---
title: 'Quiz — Basiskwantoren'
translations_gpt:
---

{% include menu.html %}

Wat drukt het volgende programma af? Let op de kwantor `*` bij de `a`.

```raku
say 'br' ~~ / b a* r /;
```

{:.quiz}
1 | ｢br｣
0 | ｢bar｣
0 | False
0 | ｢b｣

{% include quiz.html %}

<div class="extended-explanation">

`*` betekent "nul of meer", dus `a*` vindt het prima om helemaal geen `a` te matchen. In `br` staat geen `a` tussen de `b` en de `r`, maar het patroon matcht toch omdat nul herhalingen toegestaan zijn, wat `｢br｣` oplevert.

</div>

{% include nav.html %}
