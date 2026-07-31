---
title: Quiz — Supply
translations_gpt:
---

{% include menu.html %}

Quid haec programma imprimit?

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

Coniunctio semel pro omni valore quem supply emittit currit. Singulis vicibus valorem in maiusculas vertit eumque ad `$out` addit, itaque `a`, `b`, `c` fiunt `A`, `B`, `C`, in `ABC` iuncta. Blocus toti fluxui respondet, non solum valori ultimo — quapropter responsum non est simpliciter `C`.

</div>

{% include nav.html %}
