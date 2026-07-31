---
title: 'Solution: Un trait personalizzato'
---

{% include menu.html %}

Ecco una possibile soluzione.

## Codice

```raku
my %role;

multi sub trait_mod:<is>(Routine:D $r, :$role!) {
    %role{$r.name} = $role;
}

sub login() is role('admin') { }

say %role<login>;
```

🦋 Puoi trovare il codice sorgente nel file [custom-trait.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/traits-pragmas/custom-trait.raku).

## Output

```
admin
```

## Commenti

1. Il trait è una `multi sub trait_mod:<is>` il cui parametro nominato `:$role!` lo attiva per `is role(...)`. A differenza di un trait di sola presenza, questo *riceve* l'argomento: `is role('admin')` lega `'admin'` a `$role`.

1. Il corpo memorizza quel valore sotto il nome della subroutine. Leggendo `%role<login>` successivamente si ottiene `admin`. (I trait vengono eseguiti al momento della compilazione, quindi la voce è già presente quando il programma viene eseguito.)

{% include nav.html %}
