---
title: 'Lösung: Ein tanzender Roboter'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
role Dancing {
    method dance {
        'spinning around';
    }
}

class Robot {
    method speak {
        'beep';
    }
}

my $plain   = Robot.new;
my $dancing = Robot.new but Dancing;

say $plain.speak;
say $dancing.speak;
say $dancing.dance;
```

🦋 Du findest den Quellcode in der Datei [dancing-robot.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/roles/dancing-robot.raku).

## Ausgabe

```
beep
beep
spinning around
```

## Kommentare

1. Anders als in den früheren Beispielen ersetzt `Dancing` keine bestehende Methode — es bringt eine ganz neue Methode `dance` mit, von der `Robot` nichts weiß.

1. `Robot.new but Dancing` mischt die Rolle zur Laufzeit in ein einzelnes Objekt, `$dancing` kann also sowohl `speak` (aus der Klasse) als auch `dance` (aus der Rolle). Der schlichte `$plain` hat nur `speak` gelernt.

1. Die zusätzliche Fähigkeit gehört zu diesem einen Objekt, nicht zur Klasse `Robot`. `$plain.dance` aufzurufen wäre ein Fehler, weil `$plain` die Rolle nie erhalten hat.

{% include nav.html %}
