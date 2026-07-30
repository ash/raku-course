---
title: 'Quiz — Das Proc-Objekt'
translations_gpt:
---

{% include menu.html %}

Was gibt das folgende Programm aus?

```raku
my $proc = run 'sh', '-c', 'exit 2', :out;
$proc.out.slurp(:close);
say $proc.exitcode;
```

{:.quiz}
0 | 0
1 | 2
0 | True
0 | ein Fehler

{% include quiz.html %}

<div class="extended-explanation">

`.exitcode` ist die ganze Zahl, die das Programm zurückgegeben hat — hier wurde der Shell `exit 2` aufgetragen, sie ist also `2`. Das Programm wirft nicht: Das fehlgeschlagene `Proc` wird in `$proc` gespeichert und mit `.exitcode` untersucht, und das Ergebnis anzusehen gilt als Behandlung. (Eine Ausnahme entstünde nur, wenn ein fehlgeschlagenes `Proc` ungeprüft verworfen würde.)

</div>

{% include nav.html %}
