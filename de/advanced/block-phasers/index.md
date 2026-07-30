---
title: Block-bezogene Phasers
---

{% include menu.html %}

Neben den programmweiten Phasern hat Raku auch Phaser, die an den Lebenszyklus eines einzelnen Blocks oder einer Schleife gebunden sind.

## Einen Block betreten und verlassen

Der `ENTER`-Phaser wird jedes Mal ausgeführt, wenn die Ausführung einen Block betritt, und der `LEAVE`-Phaser wird jedes Mal ausgeführt, wenn sie ihn verlässt -- egal in welcher Zeile sie geschrieben stehen:

```raku
say 'before block';
{
    LEAVE say 'leaving';
    ENTER say 'entering';
    say 'inside';
}
say 'after block';
```

Die Ausgabe zeigt, dass `ENTER` zuerst und `LEAVE` zuletzt ausgeführt wird, jeweils um den Rumpf des Blocks herum:

```
before block
entering
inside
leaving
after block
```

`LEAVE` ist besonders nützlich, weil er auch dann ausgeführt wird, wenn der Block vorzeitig verlassen wird, was ihn zu einem zuverlässigen Ort macht, um eine Ressource freizugeben.

Ein Phaser kann einen vollständigen `{ }`-Block anstelle einer einzelnen Anweisung enthalten, und du kannst mehrere davon einrichten. Wenn ein Block mehr als einen `LEAVE` hat, werden sie in umgekehrter Reihenfolge ausgelöst -- der zuletzt registrierte wird zuerst ausgeführt, sodass der Block wie ein Stapel abgebaut wird:

```raku
say 'open A';
{
    LEAVE {
        say 'close A';
    }
    say 'open B';
    LEAVE {
        say 'close B';
    }
    say 'work';
}
say 'done';
```

Ressource `A` wird zuerst geöffnet und zuletzt geschlossen:

```
open A
open B
work
close B
close A
done
```

Diese Last-in-first-out-Reihenfolge ist genau das, was du für Aufräumarbeiten brauchst: Was zuletzt eingerichtet wurde, wird zuerst abgebaut. Der programmweite `END`-Phaser verhält sich genauso -- mehrere `END`-Blöcke werden ebenfalls in umgekehrter Reihenfolge ihrer Niederschrift ausgeführt.

## Schleifen-Phaser

Innerhalb von Schleifen markieren drei weitere Phaser die Phasen der Iteration: `FIRST` wird einmal vor der ersten Iteration ausgeführt, `LAST` einmal nach der letzten, und `NEXT` am Ende jeder Iteration:

```raku
for 1..3 {
    FIRST say '-- first';
    LAST  say '-- last';
    NEXT  say "-- next (was $_)";
    say "body $_";
}
```

Die Schleife erzeugt:

```
-- first
body 1
-- next (was 1)
body 2
-- next (was 2)
body 3
-- next (was 3)
-- last
```

Wie bei den anderen Phasern spielt die Position von `FIRST`, `NEXT` und `LAST` im Quelltext keine Rolle -- jeder wird zu seinem eigenen Zeitpunkt ausgeführt.

{% include nav.html %}
