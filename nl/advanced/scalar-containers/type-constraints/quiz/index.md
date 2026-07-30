---
title: Quiz — Typebeperkingen
translations_gpt:
---

{% include menu.html %}

Een container wordt als volgt gedeclareerd:

```raku
my Int $int;
```

Welke van de onderstaande toewijzingen veroorzaakt een compile-time fout?

{:.quiz}
0 | $int = 123;
0 | $int = 100 + 23;
0 | $int = '123'.Int;
1 | $int = 123.45;

{% include quiz.html %}

{% include nav.html %}
