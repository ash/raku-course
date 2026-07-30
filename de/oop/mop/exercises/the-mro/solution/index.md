---
title: 'Lösung: Die method resolution order'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
class A {
}

class B is A {
}

class C is B {
}

say C.^mro.map(*.^name);
```

🦋 Du findest den Quellcode in der Datei [the-mro.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/mop/the-mro.raku).

## Ausgabe

```
(C B A Any Mu)
```

## Kommentare

1. `.^mro` liefert die Kette der Typen, die Raku beim Auflösen einer Methode durchsucht.

1. Die Kette folgt der Vererbungslinie Schritt für Schritt: `C`, dann sein Elternteil `B`, dann dessen Elternteil `A` und schließlich `Any` und `Mu`, mit denen jeder Typ endet. Eine tiefere Hierarchie macht die Liste einfach länger.

{% include nav.html %}
