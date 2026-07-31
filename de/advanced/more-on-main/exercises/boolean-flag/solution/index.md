---
title: 'Solution: Ein Befehlszeilen-Flag'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
sub MAIN(Bool :$shout = False) {
    say $shout ?? 'HELLO' !! 'hello';
}
```

🦋 Den Quellcode finden Sie in der Datei [boolean-flag.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/more-on-main/boolean-flag.raku).

## Ausgabe

```console
$ raku boolean-flag.raku
hello

$ raku boolean-flag.raku --shout
HELLO
```

## Kommentare

1. Ein benannter `Bool`-Parameter wird zu einem Flag: Die Angabe von `--shout` setzt `$shout` auf `True`, während das Weglassen den Standardwert `False` beibehält.

1. Der ternäre Operator gibt dann entsprechend `HELLO` oder `hello` aus. Im Gegensatz zu einer `--name=wert`-Option nimmt ein Flag keinen Wert an — allein seine Anwesenheit zählt.

{% include nav.html %}
