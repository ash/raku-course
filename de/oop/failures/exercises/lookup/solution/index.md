---
title: 'Lösung: Nachschlagen oder nicht gefunden'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
sub lookup($key) {
    fail 'no such key' if $key ne 'a';
    return 100;
}

my $r = lookup('z');
if $r.defined {
    say $r;
}
else {
    say 'not found';
    say "reason: {$r.exception.message}";
}
```

🦋 Du findest den Quellcode in der Datei [lookup.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/failures/lookup.raku).

## Ausgabe

```
not found
reason: no such key
```

## Kommentare

1. `lookup('z')` ruft `fail` auf und liefert daher ein undefiniertes `Failure`.

1. Weil das Ergebnis undefiniert ist, gibt das Programm `not found` aus, statt den fehlgeschlagenen Wert zu verwenden.

1. Ein `Failure` trägt weiterhin die Ausnahme mit sich, die beschreibt, was schiefging. `$r.exception` holt sie hervor — was den Fehlschlag zugleich als behandelt markiert, sodass er später nicht doch noch explodiert — und `.message` liest den an `fail` übergebenen Text, `no such key`.

{% include nav.html %}
