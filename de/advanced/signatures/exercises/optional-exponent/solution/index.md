---
title: 'Solution: Ein optionaler Exponent'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
sub power($base, $exp?) {
    $base ** ($exp // 2)
}

say power(5);
say power(5, 3);
```

🦋 Den Quellcode finden Sie in der Datei [optional-exponent.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/signatures/optional-exponent.raku).

## Ausgabe

```
25
125
```

## Kommentare

1. Das `?` nach `$exp` macht den Parameter optional, sodass `power` nur mit der Basis aufgerufen werden kann.

1. Wenn `$exp` weggelassen wird, ist es undefiniert, und `//` liefert den Ersatzwert `2`, sodass `power(5)` die Basis quadriert und `25` ergibt. Mit einem Exponenten, wie bei `power(5, 3)`, wird dieser Wert stattdessen verwendet und ergibt `125`.

{% include nav.html %}
