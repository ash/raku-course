---
title: 'Solution: Sovrascrivere la dinamica'
---

{% include menu.html %}

Ecco una possibile soluzione.

## Codice

```raku
sub log-it($msg) {
    say "$*prefix: $msg";
}

sub task {
    log-it('working');
}

{
    my $*prefix = 'INFO';
    task();
}

{
    my $*prefix = 'DEBUG';
    task();
}
```

🦋 Puoi trovare il codice sorgente nel file [override-dynamic.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/special-variables/override-dynamic.raku).

## Output

```
INFO: working
DEBUG: working
```

## Commenti

1. `task` chiama `log-it` ma non menziona mai `$*prefix`. Il valore raggiunge comunque `log-it`, perche' la ricerca dinamica segue lo stack delle chiamate verso l'esterno — oltre `task` — fino a chi si trova nello stack in quel momento.

1. I due blocchi impostano valori diversi, quindi la *stessa* chiamata `task()` produce un prefisso diverso ogni volta. Questo e' cio' che rende utili le variabili dinamiche: il contesto fluisce nel codice profondamente annidato senza dover essere passato attraverso ogni routine intermedia come argomento.

{% include nav.html %}
