---
title: 'Quiz — `try`'
translations_gpt:
---

{% include menu.html %}

Was gibt das folgende Programm aus?

```raku
my $r = try {
    die 'Boom!';
    say 'inside';
};

say 'outside';
```

{:.quiz}
1 | outside
0 | inside
0 | inside und dann outside
0 | Boom!
0 | ein Fehler

{% include quiz.html %}

<div class="extended-explanation">

Hier geschehen zwei Dinge. Erstens bricht `die` den Rest des `try`-Blocks sofort ab, die Zeile `say 'inside'` wird also nie erreicht — aus dem Block wird nichts ausgegeben. Zweitens hält das Programm selbst nicht an, weil `try` die Ausnahme fängt: Die Ausführung geht hinter dem Block weiter, und `say 'outside'` läuft ganz normal. Die einzige ausgegebene Zeile ist also `outside`. (`$r` wäre undefiniert, und die Meldung `Boom!` läge in `$!` bereit, falls Sie nachsähen.)

</div>

{% include nav.html %}
