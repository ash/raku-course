---
title: "L'operatore di sostituzione"
translations_gpt:
---

{% include menu.html %}

L'operatore di sostituzione è `s///`. Sembra una corrispondenza con un secondo scomparto: lo schema va fra le prime due barre e il testo di rimpiazzo fra le ultime due:

```raku
my $s = 'hello world';
$s ~~ s/world/Raku/;
say $s; # hello Raku
```

La sostituzione cambia la variabile **sul posto**, quindi `$s` stesso viene aggiornato. Il testo nella parte di rimpiazzo è letterale: non lo metti fra virgolette.

Come il riconoscimento, la sostituzione tocca per impostazione predefinita solo la **prima** occorrenza. Aggiungi l'avverbio `:g` per rimpiazzare ogni occorrenza:

```raku
my $s = 'a-b-c';
$s ~~ s:g/'-'/_/;
say $s; # a_b_c
```

Se vuoi conservare l'originale e produrre una **copia** modificata invece di cambiare sul posto, usa l'operatore **maiuscolo** `S///`: esegue la sostituzione e restituisce la stringa cambiata, lasciando intatto l'originale. Poiché non aggiorna una variabile sul posto, puntalo su una con `given` invece che con `~~`:

```raku
my $orig = 'color';
say S:g/o/0/ given $orig; # c0l0r
say $orig;                # color
```

(Scrivere `$orig ~~ S///` ti avvisa di usare invece `given`: con `S///` non c'è nulla da modificare sul posto.)

Lo stesso comportamento non distruttivo è disponibile anche come metodo, `.subst`, che restituisce una nuova stringa:

```raku
my $orig = 'color';
say $orig.subst('o', '0', :g); # c0l0r
say $orig;                     # color
```

{% include nav.html %}
