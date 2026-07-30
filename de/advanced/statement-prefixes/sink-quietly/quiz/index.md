---
title: Quiz — Anweisungspräfixe
---

{% include menu.html %}

Was gibt das folgende Programm aus?

```raku
my $v;
quietly {
    say $v + 10;
}
```

{:.quiz}
0 | A warning, then 10
1 | 10
0 | Nil
0 | 0

{% include quiz.html %}

<div class="extended-explanation">

Das Addieren von `10` zum undefinierten `$v` behandelt es als `0`, was `10` ergibt. Normalerweise würde dies auch eine Warnung wegen eines uninitialisierten Werts ausgeben, aber das `quietly`-Präfix unterdrückt diese, sodass nur `10` ausgegeben wird.

</div>

{% include nav.html %}
