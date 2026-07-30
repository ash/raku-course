---
title: 'Lösung: Melden und erholen'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my $timeout = 30;

{
    die 'config missing';
    $timeout = 60;

    CATCH {
        default {
            say "warning: {.message}; keeping default";
        }
    }
}

say "timeout is $timeout seconds";
```

🦋 Du findest den Quellcode in der Datei [report-and-recover.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/catch/report-and-recover.raku).

## Ausgabe

```
warning: config missing; keeping default
timeout is 30 seconds
```

## Kommentare

1. Wenn das `die` wirft, wird der Rest des Blocks aufgegeben — die Zeile `$timeout = 60` läuft also nie, und `$timeout` behält seinen Standardwert `30`.

1. Das `CATCH` behandelt die Ausnahme (indem es eine Warnung ausgibt), das Programm hält also nicht an. Es läuft mit dem Standardwert weiter, und genau das heißt, sich von einem Fehler zu *erholen*: das Problem festhalten, auf etwas Sicheres ausweichen und weitermachen.

{% include nav.html %}
