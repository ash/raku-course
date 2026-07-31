---
title: Viktorīna — Operatora definēšana
---

{% include menu.html %}

Ko izdrukā šī programma?

```raku
sub infix:<times>($a, $b) { $a * $b }

say 6 times 7;
```

{:.quiz}
1 | 42
0 | 67
0 | times
0 | an error

{% include quiz.html %}

<div class="extended-explanation">

`infix:<times>` definē jaunu operatoru, kas tiek rakstīts starp saviem diviem operandiem. Tā ķermenis tos sareizina, tāpēc `6 times 7` rezultāts ir `42` — operators ir vienkārši apakšprogramma ar īpašu nosaukumu.

</div>

{% include nav.html %}
