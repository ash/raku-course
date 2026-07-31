---
title: Kvizo — Altordaj funkcioj
translations_gpt:
---

{% include menu.html %}

Kion presas la jena programo?

```raku
sub prefixer($p) {
    sub ($s) { $p ~ $s };
}

my &hi = prefixer('Hi, ');
say hi('Bob');
```

{:.quiz}
1 | Hi, Bob
0 | Bob
0 | Hi, 
0 | Hi, Hi, 

{% include quiz.html %}

<div class="extended-explanation">

`prefixer('Hi, ')` redonas subprogramon, kiu memoras la prefikson kaj antaŭmetas ĝin al kio ajn estas donita al ĝi. Konservita en `&hi` kaj vokita kun `'Bob'`, ĝi redonas `Hi, Bob` — redonita subprogramo funkcias same bone kun ĉenoj kiel kun nombroj.

</div>

{% include nav.html %}
