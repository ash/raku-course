---
title: Viktorīna — Rindu lasīšana
translations_gpt:
---

{% include menu.html %}

Fails `n.txt` satur trīs rindas. Cik reižu izpildās šī cikla ķermenis?

```raku
for 'n.txt'.IO.lines -> $line {
    say $line;
}
```

{:.quiz}
0 | 1
1 | 3
0 | 0
0 | pa vienai reizei katrai rakstzīmei

{% include quiz.html %}

{% include nav.html %}
