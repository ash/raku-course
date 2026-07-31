---
title: 'Solution: Una variabile dinamica'
---

{% include menu.html %}

Ecco una possibile soluzione.

## Codice

```raku
my $*user = 'guest';

sub whoami {
    say "running as $*user";
}

whoami();

{
    my $*user = 'admin';
    whoami();
}
```

🦋 Puoi trovare il codice sorgente nel file [a-dynamic-variable.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/special-variables/a-dynamic-variable.raku).

## Output

```
running as guest
running as admin
```

## Commenti

1. Il twigil `*` rende `$*user` dinamica. `whoami` non la riceve mai come parametro — trova il valore cercando verso l'esterno attraverso lo stack delle chiamate, quindi la prima chiamata riporta il valore predefinito `guest`.

1. Il blocco interno ridichiara `$*user` come `admin` per la durata di quel blocco. La *stessa* `whoami` ora vede `admin`, perche' la ricerca dinamica segue chi si trova attualmente nello stack. Sovrascrivere una variabile dinamica in uno scope e' il modo in cui si concede un contesto elevato a tutto cio' che viene chiamato da esso — senza modificare affatto `whoami`.

{% include nav.html %}
