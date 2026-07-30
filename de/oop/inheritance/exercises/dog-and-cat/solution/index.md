---
title: 'Lösung: Mitarbeiter und Rollen'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
class Employee {
    has $.name;
    method role {
        'staff';
    }
    method badge {
        "$.name - " ~ self.role;
    }
}

class Manager is Employee {
    method role { 'manager' }
}

class Intern is Employee {
    method role { 'intern' }
}

say Manager.new(name => 'Anna').badge;
say Intern.new(name => 'Bob').badge;
```

🦋 Du findest den Quellcode in der Datei [dog-and-cat.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/inheritance/dog-and-cat.raku).

## Ausgabe

```
Anna - manager
Bob - intern
```

## Kommentare

1. `Manager` und `Intern` erben das Attribut `name` und die Methode `badge` von `Employee`, keiner von beiden muss diesen Code also wiederholen.

1. Jedes Kind überschreibt `role`. Weil `badge` `self.role` aufruft, greift es die überschreibende Fassung des tatsächlichen Objekts auf und liefert für den Manager und den Praktikanten ein jeweils anderes Namensschild.

1. Der Name der Methode, `role`, ist einfach ein Name. Er fällt allerdings mit dem Schlüsselwort `role` zusammen, das später eingeführt wird.

{% include nav.html %}
