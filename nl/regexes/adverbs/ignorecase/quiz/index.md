---
title: 'Quiz — Ignorecase'
translations_gpt:
---

{% include menu.html %}

Wat drukt het volgende programma af? Het patroon staat in hoofdletters en de tekst is gemengd.

```raku
say 'Hello' ~~ /:i HELLO/;
```

{:.quiz}
1 | ｢Hello｣
0 | ｢HELLO｣
0 | True
0 | False

{% include quiz.html %}

<div class="extended-explanation">

Het bijwoord `:i` zet het onderscheid tussen hoofdletters en kleine letters uit, en het werkt in beide richtingen — hier matcht het patroon `HELLO` in hoofdletters de gemengde tekst. Het resultaat is de gematchte tekst zoals die in de string staat, `｢Hello｣`.

</div>

{% include nav.html %}
