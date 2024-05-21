---
title: Quiz — Multi-MAIN
---

{% include menu.html %}

Es gibt drei Versionen der `MAIN`-Funktion in diesem Programm:

```raku
multi sub MAIN() { say 'Default mode' }
multi sub MAIN('help') { say 'Help mode' }
multi sub MAIN(Str $mode) { say "Mode '$mode'" }
```

Was gibt das Programm aus, wenn es mit einem der folgenden Befehle ausgeführt wird:

## 1

```console
$ raku t.raku new
```

{:.quiz-select}
Gibt „Mode &apos;new&apos;“ aus | (: Gibt „Default mode“ aus, Gibt „Help mode“ aus, Gibt „Mode &apos;new&apos;“ aus, Beendet mit einer Ausnahme :)

## 2

```console
$ raku t.raku 1001
```

{:.quiz-select}
Gibt „Mode &apos;1001&apos;“ aus | (: Gibt „Default mode“ aus, Gibt „Help mode“ aus, Gibt „Mode &apos;1001&apos;“ aus, Beendet mit einer Ausnahme :)

## 3

```console
$ raku t.raku
```

{:.quiz-select}
Gibt „Default mode“ aus | (: Gibt „Default mode“ aus, Gibt „Help mode“ aus, Gibt „Mode &apos;&apos;“ aus, Beendet mit einer Ausnahme :)

## 4

```console
$ raku t.raku Help
```

{:.quiz-select}
Gibt „Mode &apos;Help&apos;“ aus | (: Gibt „Default mode“ aus, Gibt „Help mode“ aus, Gibt „Mode &apos;Help&apos;“ aus, Beendet mit einer Ausnahme :) | Parameter sind in diesem Fall groß- und kleinschreibungssensitiv.

{% include quiz.html %}

{% include nav.html %}