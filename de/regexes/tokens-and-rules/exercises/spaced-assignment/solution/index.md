---
title: 'Lösung: Eine Zuweisung mit Leerzeichen'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
grammar Assign {
    rule TOP    { <key> '=' <value> }
    token key   { \w+ }
    token value { \w+ }
}

say Assign.parse('x = 5').defined;
```

🦋 Du findest den Quellcode in der Datei [spaced-assignment.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/tokens-and-rules/spaced-assignment.raku).

## Ausgabe

```
True
```

## Kommentare

1. Weil `TOP` eine `rule` ist, lassen die Leerzeichen im Muster Leerraum um das `=` in der Eingabe zu.

1. `'x = 5'` wird also zerlegt. Mit einem `token` für `TOP` würde nur `'x=5'` treffen.

Der Leerraum, den eine `rule` zulässt, ist **wahlfrei**, nicht vorgeschrieben: Der bedeutsame Leerraum trifft genauso bereitwillig *null* Leerzeichen wie eines, die Form ohne Leerzeichen wird also ebenfalls zerlegt:

```raku
say Assign.parse('x=5').defined; # True
```

Die `rule` nimmt daher `'x = 5'`, `'x=5'` und sogar `'x =5'` gleichermaßen an — Beweglichkeit, ohne auszubuchstabieren, wo ein Leerzeichen stehen darf und wo nicht.

{% include nav.html %}
