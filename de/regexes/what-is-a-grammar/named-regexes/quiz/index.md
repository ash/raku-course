---
title: 'Quiz — Benannte Regexes'
translations_gpt:
---

{% include menu.html %}

Was gibt das folgende Programm aus?

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

Einen benannten Regex als `<letter>` aufzurufen trifft ihn und capturt das Ergebnis unter diesem Namen. Das Muster findet den ersten Kleinbuchstaben, `a`, `$<letter>` ist also `｢a｣`.

</div>

{% include nav.html %}
