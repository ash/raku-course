---
title: Quiz — Slurpy-Parameter
translations_gpt:
---

{% include menu.html %}

Was gibt das folgende Programm aus?

```raku
sub f($first, *@rest) {
    say @rest.elems;
}

f('a', 'b', 'c');
```

{:.quiz}
1 | 2
0 | 3
0 | 1
0 | 0

{% include quiz.html %}

<div class="extended-explanation">

Feste Parameter werden vor dem Slurpy-Parameter gefüllt. `$first` nimmt `'a'` auf, und nur die beiden verbleibenden Argumente `'b'` und `'c'` gehen in `@rest`, sodass `.elems` den Wert `2` ergibt.

</div>

{% include nav.html %}
