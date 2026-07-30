---
title: 'Quiz — Benoemde regexes'
translations_gpt:
---

{% include menu.html %}

Wat drukt het volgende programma af?

```raku
my regex letter { <[a..z]> }

'a1' ~~ / <letter> /;
say $<letter>;
```

{:.quiz}
1 | ｢a｣
0 | ｢1｣
0 | ｢a1｣
0 | ｢letter｣

{% include quiz.html %}

<div class="extended-explanation">

Een benoemde regex als `<letter>` aanroepen matcht hem en captureert het resultaat onder die naam. Het patroon vindt de eerste kleine letter, `a`, dus is `$<letter>` `｢a｣`.

</div>

{% include nav.html %}
