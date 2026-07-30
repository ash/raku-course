---
title: Anonyme Unterprogramme
translations_gpt:
---

{% include menu.html %}

Eine Subroutine muss keinen Namen haben. Eine _anonyme_ Subroutine wird genauso geschrieben wie eine normale, aber ohne Namen, und wird üblicherweise in einer Variablen gespeichert, damit man sie später aufrufen kann.

```raku
my $double = sub ($x) {
    $x * 2
};

say $double(5); # 10
```

Die Variable `$double` enthält die Subroutine, und `$double(5)` ruft sie mit dem Argument `5` auf.

## Pointy Blocks

Raku bietet eine kürzere Schreibweise für dasselbe — den _Pointy Block_. Er verwendet den Pfeil `->` zur Einführung der Parameter und braucht weder das Wort `sub` noch Klammern um sie herum:

```raku
my $double = -> $x {
    $x * 2
};

say $double(5); # 10
```

Dies ist die gebräuchlichste Art, eine kleine anonyme Subroutine zu schreiben.

## Das `&`-Sigil

Wenn Sie die Subroutine lieber über einen Namen als über eine `$`-Variable aufrufen möchten, deklarieren Sie die Variable mit dem `&`-Sigil. Dann können Sie sie ohne Sigil aufrufen, genau wie eine gewöhnliche Subroutine:

```raku
my &triple = -> $x {
    $x * 3
};

say triple(4); # 12
```

## Übergabe an eine andere Funktion

Sie müssen eine anonyme Subroutine gar nicht in einer Variablen speichern. Da sie nur ein Wert ist, können Sie sie direkt an eine Funktion übergeben, die eine erwartet — wie `map`, `grep` oder `sort`:

```raku
say (1, 2, 3).map(-> $x { $x * 2 }); # (2 4 6)
```

Der Pointy Block ist hier die anonyme Subroutine, und `map` ruft sie einmal für jedes Element auf. Genau das haben Sie die ganze Zeit getan: Jeder `{ ... }`-Block und jedes `-> $x { ... }`, das Sie an `map` und `grep` übergeben haben, ist eine kleine anonyme Subroutine, die direkt dort geschrieben wird, wo sie gebraucht wird, anstatt zuerst benannt zu werden.

{% include nav.html %}
