---
title: Quiz — Dispatch mit `where`
translations_gpt:
---

{% include menu.html %}

Was gibt das folgende Programm aus?

```raku
multi sub f(Int $n where $n %% 2) { say 'even' }
multi sub f(Int $n)               { say 'odd' }

f(4);
```

{:.quiz}
1 | even
0 | odd
0 | both
0 | nothing

{% include quiz.html %}

<div class="extended-explanation">

`4` erfüllt die Bedingung `where $n %% 2`, daher wird der spezifischere Kandidat gewählt und `even` ausgegeben. Der einfache `Int`-Kandidat ist der Auffangfall für alles, was die Bedingung nicht erfüllt.

</div>

{% include nav.html %}
