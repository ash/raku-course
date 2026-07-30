---
title: 'Quiz — Het Proc-object'
translations_gpt:
---

{% include menu.html %}

Wat drukt het volgende programma af?

```raku
my $proc = run 'sh', '-c', 'exit 2', :out;
$proc.out.slurp(:close);
say $proc.exitcode;
```

{:.quiz}
0 | 0
1 | 2
0 | True
0 | een fout

{% include quiz.html %}

<div class="extended-explanation">

`.exitcode` is het gehele getal dat het programma teruggaf — hier kreeg de shell te horen `exit 2` te doen, dus is het `2`. Het programma werpt niet: de mislukkende `Proc` wordt in `$proc` bewaard en met `.exitcode` bekeken, en naar het resultaat kijken telt als het afhandelen ervan. (Een exceptie zou alleen ontstaan als een mislukkende `Proc` ongecontroleerd weggegooid werd.)

</div>

{% include nav.html %}
