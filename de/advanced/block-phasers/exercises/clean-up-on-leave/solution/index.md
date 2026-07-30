---
title: 'Solution: Beim Verlassen aufräumen'
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
sub work {
    LEAVE say 'Cleanup';

    say 'Working';
    return;
    say 'never reached';
}

work();
```

🦋 Du findest den Quellcode in der Datei [clean-up-on-leave.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/block-phasers/clean-up-on-leave.raku).

## Ausgabe

```
Working
Cleanup
```

## Kommentare

1. Nachdem `Working` ausgegeben wurde, verlässt `return` die Subroutine sofort, sodass `never reached` nie ausgegeben wird.

1. Obwohl der Rumpf vorzeitig verlassen wurde, wird der `LEAVE`-Phaser beim Verlassen trotzdem ausgelöst und gibt `Cleanup` aus. Diese Garantie ist genau der Grund, warum `LEAVE` der richtige Ort ist, um Ressourcen freizugeben -- er wird ausgeführt, egal wie der Block endet.

{% include nav.html %}
