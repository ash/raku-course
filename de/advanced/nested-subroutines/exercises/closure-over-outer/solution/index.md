---
title: 'Solution: Über den äußeren Bereich schließen'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
sub greet($name) {
    sub message {
        "Hello, $name!";
    }

    say message;
}

greet('Anna');
```

🦋 Den Quellcode finden Sie in der Datei [closure-over-outer.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/nested-subroutines/closure-over-outer.raku).

## Ausgabe

```
Hello, Anna!
```

## Kommentare

1. `message` nimmt keine Argumente entgegen, kann aber dennoch `$name` verwenden. Eine verschachtelte Unterroutine schließt über die lexikalischen Variablen der umgebenden Unterroutine ab, sodass das äußere `$name` im Gültigkeitsbereich liegt.

1. Wenn `greet('Anna')` ausgeführt wird, ist `$name` gleich `'Anna'`, sodass `message` `Hello, Anna!` zurückgibt. Diese gemeinsame Nutzung des umgebenden Gültigkeitsbereichs macht verschachtelte Helfer zu mehr als nur versteckten Funktionen.

{% include nav.html %}
