---
title: 'Solution: Die dynamische Variable überschreiben'
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

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

🦋 Du findest den Quellcode in der Datei [override-dynamic.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/special-variables/override-dynamic.raku).

## Ausgabe

```
INFO: working
DEBUG: working
```

## Kommentare

1. `task` ruft `log-it` auf, erwähnt aber nie `$*prefix`. Der Wert erreicht `log-it` trotzdem, weil die dynamische Auflösung dem Aufrufstapel nach außen folgt — an `task` vorbei — zu demjenigen, der sich gerade auf dem Stapel befindet.

1. Die beiden Blöcke setzen unterschiedliche Werte, sodass derselbe `task()`-Aufruf jedes Mal ein anderes Präfix erzeugt. Das macht dynamische Variablen nützlich: Kontext fließt in tief verschachtelten Code, ohne durch jede Zwischenroutine als Argument durchgereicht zu werden.

{% include nav.html %}
