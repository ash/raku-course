---
title: 'Quiz — Funktionen höherer Ordnung'
translations_gpt:
---

{% include menu.html %}

Was gibt das folgende Programm aus?

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

`prefixer('Hi, ')` liefert eine Subroutine, die sich das Präfix merkt und es dem voranstellt, was sie bekommt. In `&hi` abgelegt und mit `'Bob'` aufgerufen liefert sie `Hi, Bob` — eine zurückgegebene Subroutine arbeitet mit Zeichenketten ebenso gut wie mit Zahlen.

</div>

{% include nav.html %}
