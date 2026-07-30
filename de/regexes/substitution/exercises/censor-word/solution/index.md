---
title: 'Lösung: Zensieren Sie ein Wort'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my $s = 'secret secret plan';
$s ~~ s:g/secret/***/;
say $s;
```

🦋 Du findest den Quellcode in der Datei [censor-word.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/substitution/censor-word.raku).

## Ausgabe

```
*** *** plan
```

## Kommentare

1. Der Operator `s///` ersetzt das getroffene `secret` durch den wörtlichen Text `***`, ohne Anführungszeichen geschrieben, und verändert `$s` an Ort und Stelle.

1. Das Adverb `:g` ist es, das **beide** Vorkommen ersetzen lässt. Ohne es würde nur das erste `secret` zensiert.

{% include nav.html %}
