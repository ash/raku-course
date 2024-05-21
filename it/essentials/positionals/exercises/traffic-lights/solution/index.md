---
title: 'Soluzione: Semafori'
---

{% include menu.html %}

L'idea della soluzione è di 'ciclare l'indicizzazione' dell'array con i quattro stati dei semafori:

```raku
my @lights = <yellow red yellow green>;
```

Durante i primi secondi, il numero di secondi dall'inizio può essere utilizzato direttamente come indice nell'array. Quando supera 3, puoi riportarlo all'inizio dell'array con l'operatore modulo `%`. La lunghezza dell'array è `@lights.elems`, ma quando viene utilizzata come operando di `%`, non è necessario chiamare il metodo `elems`, poiché il nome dell'array verrà convertito in un numero, e quella conversione è progettata per restituire il numero di elementi.

## Codice

Ecco la soluzione:

```raku
my @lights = <yellow red yellow green>;

say @lights[51 % @lights];
say @lights[102 % @lights];
say @lights[305 % @lights];
```

🦋 Trova il programma nel file [traffic-lights.raku](https://github.com/ash/raku-course/blob/master/exercises/positionals/traffic-lights.raku).

## Output

Esegui il programma. Inoltre, prova altri valori nel programma.

```console
$ raku exercises/positionals/traffic-lights.raku
green
yellow
red
```

{% include nav.html %}