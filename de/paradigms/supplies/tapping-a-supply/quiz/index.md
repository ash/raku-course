---
title: 'Quiz — Supplies'
translations_gpt:
---

{% include menu.html %}

Was gibt das folgende Programm aus?

```raku
my $out = '';
Supply.from-list('a', 'b', 'c').tap(-> $v { $out ~= $v.uc });
say $out;
```

{:.quiz}
1 | ABC
0 | abc
0 | a b c
0 | C

{% include quiz.html %}

<div class="extended-explanation">

Die Zapfstelle läuft einmal für jeden Wert, den das Supply aussendet. Jedes Mal schreibt sie den Wert groß und hängt ihn an `$out`, aus `a`, `b`, `c` werden also `A`, `B`, `C`, verbunden zu `ABC`. Der Block reagiert auf den ganzen Strom, nicht nur auf den letzten Wert — weshalb die Antwort nicht schlicht `C` ist.

</div>

{% include nav.html %}
