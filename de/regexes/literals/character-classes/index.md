---
title: Zeichenklassen
translations_gpt:
---

{% include menu.html %}

Oft möchten Sie kein festes Zeichen treffen, sondern ein beliebiges Zeichen aus einer Menge. Eine solche Menge heißt _Zeichenklasse_ und wird zwischen `<[` und `]>` geschrieben:

```raku
say 'grey' ~~ / gr <[ae]> y /; # ｢grey｣
say 'gray' ~~ / gr <[ae]> y /; # ｢gray｣
```

Die Klasse `<[ae]>` trifft ein einzelnes Zeichen, das entweder `a` oder `e` ist, beide Schreibweisen der Farbe werden also getroffen.

Innerhalb der Klammern können Sie mit zwei Punkten einen _Bereich_ angeben:

```raku
say 'a1b2' ~~ / <[0..9]> /; # ｢1｣
```

`<[0..9]>` trifft eine beliebige Ziffer; die erste Ziffer in der Zeichenkette ist `1`.

Um jedes Zeichen zu treffen, das **nicht** in der Menge ist, setzen Sie ein Minuszeichen direkt hinter die öffnende Klammer:

```raku
say 'stop!' ~~ / <-[a..z]> /; # ｢!｣
```

Hier trifft `<-[a..z]>` das erste Zeichen, das kein Kleinbuchstabe ist, nämlich das Ausrufezeichen.

Sie können mehrere Teile in einer Klasse verbinden. So trifft `<[a..z A..Z 0..9]>` einen Buchstaben oder eine Ziffer. Die Leerzeichen dort dienen nur der Lesbarkeit — wie überall in einem Regex werden Leerzeichen innerhalb von `<[…]>` übergangen, `<[a..zA..Z0..9]>` ist also genau dieselbe Klasse.

{% include nav.html %}
