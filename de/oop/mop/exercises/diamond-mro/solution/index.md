---
title: 'Lösung: Eine Raute aus Klassen'
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

class C is A {
}

class D is B is C {
}

say D.^mro.map(*.^name);
```

🦋 Du findest den Quellcode in der Datei [diamond-mro.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/mop/diamond-mro.raku).

## Ausgabe

```
(D B C A Any Mu)
```

## Kommentare

1. `D` erbt von zwei Eltern zugleich — `class D is B is C` führt jeden mit eigenem `is` auf. Das ist Mehrfachvererbung, und `A`, `B`, `C`, `D` bilden eine *Raute*: zwei Wege von `D` hinauf zum gemeinsamen Vorfahren `A`.

1. `.^mro` plättet diese Raute zu einer einzigen, linearen Suchreihenfolge. `D` kommt zuerst, dann seine Eltern `B` und `C` in der geschriebenen Reihenfolge, dann das gemeinsame `A` und schließlich `Any` und `Mu`.

1. Obwohl sowohl `B` als auch `C` zu `A` führen, erscheint der Typ `A` **einmal**, und zwar erst nach beiden. Genau darum geht es bei einer method resolution order: Jeder Typ wird genau einmal besucht, und ein Elternteil kommt nie vor einem Kind, das von ihm erbt — eine in `B` definierte Methode wird also immer vor derjenigen gefunden, die sie in `A` überschreiben würde.

{% include nav.html %}
