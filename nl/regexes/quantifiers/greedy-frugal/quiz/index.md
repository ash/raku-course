---
title: 'Quiz — Kwantoren'
translations_gpt:
---

{% include menu.html %}

Wat drukt het volgende programma af?

```raku
say 'aaaa' ~~ / a ** 2..3 /;
```

{:.quiz}
0 | ｢aa｣
1 | ｢aaa｣
0 | ｢aaaa｣
0 | False

{% include quiz.html %}

<div class="extended-explanation">

De kwantor `** 2..3` staat twee of drie herhalingen toe en neemt er, gulzig als hij is, zoveel als hij kan — drie. De vierde `a` blijft ongematcht.

</div>

{% include nav.html %}
