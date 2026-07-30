---
title: 'Lösung: Drehen Sie die Wörter um'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
grammar Phrase {
    token TOP  { <word> [ ' ' <word> ]* { make $<word>».made.join(' ') } }
    token word { \w+ { make $/.flip } }
}

say Phrase.parse('hello world').made;
```

🦋 Du findest den Quellcode in der Datei [reverse-the-words.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/make-and-made/reverse-the-words.raku).

## Ausgabe

```
olleh dlrow
```

## Kommentare

1. Jedes Token `word` macht seinen eigenen umgedrehten Text: Sein inline stehender Block läuft, sobald ein Wort trifft, und `make $/.flip` legt das Wort — `$/` ist der aktuelle Treffer — rückwärts geschrieben ab.

1. `TOP` trifft die Wörter mit `<word> [ ' ' <word> ]*` — ein Wort, dann beliebig oft „Leerzeichen und Wort“ — und verbindet sie. `$<word>` ist die Liste aller Worttreffer; `».made` holt den umgedrehten Text heraus, den jeder abgelegt hat, und `.join(' ')` baut die Wortgruppe mit Leerzeichen wieder auf.

1. Diese Form „Element, dann Element, dann Element …“ kommt oft genug vor, um eine Kurzform zu haben: den Trenner `%`. `<word>+ % ' '` zu schreiben bedeutet „ein oder mehr `<word>`, getrennt durch ein Leerzeichen“, und trifft genau dieselben Wortgruppen wie `<word> [ ' ' <word> ]*` — nur knapper.

1. `make` und `made` arbeiten hier also auf zwei Ebenen: Die kleinen Stücke machen ihre Werte, und das Ganze wird aus ihnen gemacht. `.made` auf dem Ergebnis zu lesen ergibt `olleh dlrow`.

{% include nav.html %}
