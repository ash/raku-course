---
title: '`given` e `when`'
translations_gpt:
---

{% include menu.html %}

Quando un programma deve scegliere tra diverse alternative, una catena di controlli `if` e `elsif` può diventare lunga e ripetitiva. In questa situazione, il costrutto `given`/`when` è spesso più chiaro. È simile all'istruzione `switch` presente in altri linguaggi.

Il blocco `given` prende un valore e lo rende il _topic_ — la variabile speciale `$_`. Ogni blocco `when` viene poi confrontato con quel topic, e il primo che corrisponde viene eseguito:

```raku
my $n = 2;

given $n {
    when 1 { say 'one' }
    when 2 { say 'two' }
    when 3 { say 'three' }
}
```

Questo programma stampa:

```
two
```

A differenza dello `switch` in alcuni altri linguaggi, non c'è fall-through: non appena un `when` corrisponde, il suo blocco viene eseguito e il blocco `given` è terminato. I blocchi `when` rimanenti non vengono testati.

## Il blocco `default`

Un blocco `default` viene eseguito quando nessuno dei blocchi `when` ha trovato corrispondenza. Svolge lo stesso ruolo del ramo `else` di un'istruzione `if`:

```raku
my $n = 5;

given $n {
    when 1 { say 'one' }
    when 2 { say 'two' }
    default { say 'many' }
}
```

Poiché `$n` non è né `1` né `2`, il programma stampa:

```
many
```

{% include nav.html %}
