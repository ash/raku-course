---
title: Standardwerte
---

{% include menu.html %}

Sowohl Positions- als auch benannte Parameter können Standardwerte haben. Wenn die Funktion einen Standardwert für den angegebenen Parameter hat, kann dieser Parameter beim Aufruf der Funktion weggelassen werden.

## Positionsparameter

Ein Beispiel für einen Standardwert für eine Funktion mit Positionsparametern:

```raku
sub greet($name = 'World') {
    say "Hello, $name!";
}

greet('Merinda');
greet();
```

Der erste Aufruf verwendet den als einziges Argument übergebenen Namen und druckt daher `Hello, Merinda!`. Der zweite Aufruf verwendet den Standardwert und druckt `Hello, World!`.

Wenn eine Funktion mehr als einen Parameter hat, können die Standardwerte nur am Ende der Liste verwendet werden:

```raku
sub f($a, $b, $c = 42, $d = 50) { . . . } # korrekt
# sub f($a = 10, $b = 20, $c, $d) { . . . } # FALSCH
```

## Benannte Parameter

Die gleiche Syntax wird verwendet, um Standardwerte für benannte Parameter festzulegen:

```raku
sub greet(:$name = 'World') {
    say "Hello, $name!";
}

greet(name => 'Merinda'); # Hello, Merinda!
greet(); # Hello, World!
```

Die Reihenfolge der benannten Parameter spielt keine Rolle, sodass jeder von ihnen Standardwerte haben kann, sogar der erste in der Liste:

```raku
sub greet(:$greeting = 'Hello', :$name) {
    say "$greeting, $name!";
}

greet(name => 'Alla'); # Hello, Alla!
```

{% include nav.html %}