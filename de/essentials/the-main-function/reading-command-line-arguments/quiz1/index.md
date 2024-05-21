---
title: Quiz — Lesen von Befehlszeilenargumenten in der MAIN-Funktion
---

{% include menu.html %}

Hier ist das Programm:

```raku
sub MAIN($a) {
    say $a;
}
```

## 1

Was gibt es aus, wenn es wie unten gezeigt ausgeführt wird?

```console
$ raku t.raku 123
```

{:.quiz-code .nocode}
123 | Geben Sie die erwartete Ausgabe ein: ␣␣␣␣␣␣␣

## 2

Was gibt es jetzt aus?

```console
$ raku t.raku "123 456"
```

{:.quiz-code .nocode}
123␣456 | Geben Sie die erwartete Ausgabe ein: ␣␣␣␣␣␣␣


{% include quiz.html %}

{% include nav.html %}