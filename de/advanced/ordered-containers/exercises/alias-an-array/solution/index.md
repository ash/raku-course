---
title: 'Solution: Ein Array aliasieren'
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my @original = 10, 20, 30;
my @alias := @original;

@original.push(40);
say @alias;
```

🦋 Du findest den Quellcode in der Datei [alias-an-array.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/ordered-containers/alias-an-array.raku).

## Ausgabe

```
[10 20 30 40]
```

## Kommentare

1. Das Binding `@alias := @original` macht `@alias` zu einem anderen Namen für denselben Array-Container, statt zu einer Kopie davon.

1. Die Änderung wird diesmal über `@original` vorgenommen, und es ist eine strukturelle Änderung — `push` fügt ein Element hinzu. Da beide Namen derselbe Container sind, sieht `@alias` das neue Element ebenfalls. Die beiden Namen sind vollständig austauschbar: Es spielt keine Rolle, welchen du zum Lesen oder zum Ändern des Arrays verwendest.

{% include nav.html %}
