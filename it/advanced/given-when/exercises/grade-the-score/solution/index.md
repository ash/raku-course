---
title: 'Solution: Fase della vita dall''età'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
my $age = 30;

given $age {
    when $_ < 0 { say 'invalid' }
    when 0..12  { say 'child' }
    when 13..19 { say 'teenager' }
    when 20..64 { say 'adult' }
    default     { say 'senior' }
}
```

🦋 Puoi trovare il codice sorgente nel file [grade-the-score.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/given-when/grade-the-score.raku).

## Output

```
adult
```

## Commenti

1. Questa soluzione mescola due tipi di `when`. Il primo è una *condizione*, `$_ < 0` (dove `$_` è il topic impostato da `given`), che scarta le età non valide; i restanti sono *intervalli* che raggruppano le età valide nelle fasi della vita.

1. L'ordine è importante. Il controllo per l'età negativa viene per primo, quindi viene eseguito prima di provare qualsiasi intervallo. Il valore `30` rientra in `20..64`, quindi il programma stampa `adult`.

1. Il blocco `default` copre tutte le età da 65 in su, che non sono catturate da nessuno degli intervalli elencati.

Si potrebbe invertire l'approccio e lasciare che `default` catturi l'input *non valido*. Si elencano tutte le fasi riconosciute — incluso `senior` come condizione `$_ >= 65` — e si tratta tutto il resto (come un'età negativa) come non valido:

```raku
given $age {
    when 0..12    { say 'child' }
    when 13..19   { say 'teenager' }
    when 20..64   { say 'adult' }
    when $_ >= 65 { say 'senior' }
    default       { say 'invalid' }
}
```

Qui `default` è un vero e proprio ramo "nessuna delle precedenti". Quale versione sia più leggibile è una questione di gusto: mettere il controllo per primo quando il caso non valido è l'eccezione, oppure renderlo il fallback quando le fasi valide sono tutte chiaramente enumerate.

{% include nav.html %}
