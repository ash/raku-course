---
title: Quiz 2 — Standardwerte
---

{% include menu.html %}

Betrachten Sie das folgende Programm.

```raku
sub MAIN($a = 'abc', $b = 'def') {
    say $a;
    say $b;
}
```

## 1

Was wird ausgegeben, wenn es wie unten gezeigt ausgeführt wird?

```console
$ raku t.raku
```

{:.quiz-code .nocode}
abc def | Geben Sie die Ausgabewerte ein: ␣␣␣ und ␣␣␣

## 2

Nun wird dasselbe Programm wie folgt ausgeführt:

```console
$ raku t.raku xyz
```

{:.quiz-code .nocode}
xyz def | Geben Sie die Ausgabewerte ein: ␣␣␣ und ␣␣␣

## 3

Schließlich dieser Befehl:

```console
$ raku t.raku xyz 123
```

{:.quiz-code .nocode}
xyz 123 | Geben Sie die Ausgabewerte ein: ␣␣␣ und ␣␣␣

{% include quiz.html %}

{% include nav.html %}