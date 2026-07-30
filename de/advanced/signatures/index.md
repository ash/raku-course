---
title: Signaturen
translations_gpt:
---

{% include menu.html %}

Im Abschnitt „Grundlagen" haben Sie [Subroutinen mit positionalen und benannten Parametern definiert und ihnen Standardwerte gegeben](/de/essentials/functions). Die Liste der Parameter wird als _Signatur_ bezeichnet. Dieser Abschnitt fügt zwei weitere Möglichkeiten hinzu, die eine Signatur bieten kann: einen Parameter als optional markieren und eine beliebige Anzahl zusätzlicher Argumente sammeln.

## Optionale Parameter

Ein Parameter, dem ein Fragezeichen folgt, ist _optional_: Der Aufrufer kann ihn weglassen. Wenn er weggelassen wird, ist der Parameter undefiniert, sodass Sie mit dem Defined-or-Operator `//` einen Ersatzwert angeben können:

```raku
sub greet($name, $greeting?) {
    my $g = $greeting // 'Hello';
    say "$g, $name!";
}

greet('Anna');           # Hello, Anna!
greet('Anna', 'Hi');     # Hi, Anna!
```

Wenn `greet` mit einem Argument aufgerufen wird, ist `$greeting` undefiniert, sodass `//` auf `'Hello'` zurückfällt.

## Slurpy-Parameter

Ein mit `*` markierter Parameter ist _slurpy_: Er sammelt alle verbleibenden Argumente ein. Ein Slurpy-Array, geschrieben als `*@`, sammelt eine beliebige Anzahl positionaler Argumente in einem Array:

```raku
sub count-them(*@items) {
    say @items.elems;
}

count-them(1, 2, 3, 4); # 4
count-them('a', 'b');   # 2
```

Sie können gewöhnliche Parameter mit einem Slurpy-Parameter kombinieren. Die festen Parameter werden zuerst gefüllt, und was übrig bleibt, geht in das Slurpy-Array:

```raku
sub titles($name, *@titles) {
    say "$name has {@titles.elems} title(s)";
}

titles('Anna', 'Dr', 'Prof'); # Anna has 2 title(s)
```

Auf die gleiche Weise sammelt ein Slurpy-Hash, geschrieben als `*%`, alle zusätzlichen benannten Argumente in einem Hash:

```raku
sub register($name, *%options) {
    say "$name: {%options.elems} option(s)";
    say "role is %options<role>";
}

register('Anna', role => 'admin', active => True);
```

Die beiden benannten Argumente landen als Schlüssel in `%options`, sodass das Programm ausgibt:

```
Anna: 2 option(s)
role is admin
```

{% include nav.html %}
