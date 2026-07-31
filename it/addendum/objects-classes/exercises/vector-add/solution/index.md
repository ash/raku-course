---
title: 'Soluzione: Sommare vettori'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
class Vector {
    has $.x;
    has $.y;

    method add(Vector $v) {
        Vector.new(x => $.x + $v.x, y => $.y + $v.y);
    }

    method Str { "($.x, $.y)" }
}

my $sum = Vector.new(x => 1, y => 2).add(Vector.new(x => 3, y => 4));

put $sum;
```

🦋 Trova il programma nel file [vector-add.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/objects-classes/vector-add.raku).

## Output

```
(4, 6)
```

## Commenti

1. `add` non cambia nessuno dei due vettori; costruisce e restituisce un `Vector`
completamente nuovo a partire dalle componenti sommate.

1. Nota che `Vector` viene usato *dentro la propria definizione* — come tipo del parametro
`Vector $v` e in `Vector.new`. Va benissimo: il nome del tipo è noto dal momento in cui la
sua dichiarazione comincia, quindi una classe può riferirsi liberamente a se stessa nei
propri metodi. Non serve alcuna dichiarazione anticipata.

1. `put` trasforma il proprio argomento in stringa con il metodo `Str`, quindi compare la
formattazione personalizzata `"($.x, $.y)"`.

{% include nav.html %}
