---
title: Quiz — Itemkontext
---

{% include menu.html %}

Was gibt das folgende Programm aus?

```raku
my @a = 1, 2, 3;
my $n = 0;
$n++ for $(@a);
say $n;
```

{:.quiz}
0 | 3
1 | 1
0 | 0
0 | 6

{% include quiz.html %}

<div class="extended-explanation">

Der Kontextualisierer `$( … )` erzwingt den Elementkontext, sodass das Array als ein einzelner Wert statt als Liste von Elementen behandelt wird. Die `for`-Schleife sieht daher nur ein Element und führt ihren Körper nur einmal aus, sodass `$n` bei `1` bleibt. Ohne `$( )` würde die Schleife dreimal iterieren.

</div>

{% include nav.html %}
