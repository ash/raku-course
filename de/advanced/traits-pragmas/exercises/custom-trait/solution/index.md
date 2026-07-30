---
title: 'Solution: Ein benutzerdefinierter Trait'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my %role;

multi sub trait_mod:<is>(Routine:D $r, :$role!) {
    %role{$r.name} = $role;
}

sub login() is role('admin') { }

say %role<login>;
```

🦋 Den Quellcode finden Sie in der Datei [custom-trait.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/traits-pragmas/custom-trait.raku).

## Ausgabe

```
admin
```

## Kommentare

1. Das Trait ist ein `multi sub trait_mod:<is>`, dessen benannter Parameter `:$role!` es für `is role(...)` auslöst. Im Gegensatz zu einem reinen Vorhandenseits-Trait *empfängt* dieses das Argument: `is role('admin')` bindet `'admin'` an `$role`.

1. Der Rumpf speichert diesen Wert unter dem Namen der Subroutine. Das anschließende Lesen von `%role<login>` ergibt `admin`. (Traits werden zur Kompilierzeit ausgeführt, sodass der Eintrag bereits vorhanden ist, wenn das Programm läuft.)

{% include nav.html %}
