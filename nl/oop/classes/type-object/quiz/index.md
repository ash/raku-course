---
title: 'Quiz — Klassen'
translations_gpt:
---

{% include menu.html %}

Wat drukt het volgende programma af? Denk eraan dat `WHAT` het *type* meldt, terwijl `defined` datgene is wat een typeobject van een instantie onderscheidt.

```raku
class Dog {
}

say Dog.WHAT === Dog.new.WHAT;
```

{:.quiz}
0 | False
1 | True
0 | (Dog)
0 | een fout

{% include quiz.html %}

{% include nav.html %}
