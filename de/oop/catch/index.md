---
title: Der `CATCH`-Phaser
translations_gpt:
---

{% include menu.html %}

Der `try`-Block ist bequem, behandelt aber den ganzen Block als eine Einheit: Entweder er funktioniert oder nicht. Der `CATCH`-Phaser gibt Ihnen feinere Kontrolle — er erlaubt es, eine Ausnahme _innerhalb_ des Blocks zu behandeln, in dem sie auftrat, und zu entscheiden, was zu tun ist.

`CATCH` ist ein Phaser, wie jene, die Sie im [Abschnitt über den Programmfluss](/de/advanced/phasers) kennengelernt haben. Sie schreiben ihn irgendwo in einen Block; er läuft nur, wenn dort eine Ausnahme geworfen wird. Die Ausnahme steht als Thema `$_` zur Verfügung:

```raku
{
    die 'Boom!';

    CATCH {
        default {
            say 'Caught: ' ~ .message;
        }
    }
}

say 'after';
```

Das Programm gibt aus:

```
Caught: Boom!
after
```

Der `default`-Block innerhalb von `CATCH` behandelt jede Ausnahme. Sobald er gelaufen ist, gilt die Ausnahme als behandelt, das Programm hält also nicht an — die Ausführung geht hinter dem umgebenden Block weiter, weshalb `after` ausgegeben wird.

Ohne das `CATCH` hätte das `die` das Programm beendet, bevor `after` erreicht werden konnte.

{% include nav.html %}
