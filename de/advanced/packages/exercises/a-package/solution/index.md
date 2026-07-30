---
title: 'Solution: Ein Paket'
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
package Temperature {
    our $freezing = 0;
    our sub fahrenheit($c) { $c * 9/5 + 32 }
}

say $Temperature::freezing;
say Temperature::fahrenheit(100);
```

🦋 Du findest den Quellcode in der Datei [a-package.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/packages/a-package.raku).

## Ausgabe

```
0
212
```

## Kommentare

1. Sowohl die Variable als auch die Subroutine sind mit `our` deklariert, sodass beide Teil des `Temperature`-Namensraums werden und von außen erreichbar sind.

1. Die Variable wird als `$Temperature::freezing` erreicht — Sigil, Package-Name, dann Variablenname — während die Subroutine als `Temperature::fahrenheit(100)` aufgerufen wird. Die Umrechnung von `100` ergibt `100 * 9/5 + 32`, also `212`.

1. Ein einfaches `package` stellt nur den Namensraum bereit. Für eine wiederverwendbare Bibliothek hätten wir stattdessen `module` verwendet — und sobald Objekte ins Spiel kommen, eine `class` — aber der Namensraum-Mechanismus ist in jedem Fall derselbe.

{% include nav.html %}
