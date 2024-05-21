---
title: Quiz — Multi-MAIN
---

{% include menu.html %}

Ci sono tre versioni della funzione `MAIN` in questo programma:

```raku
multi sub MAIN() { say 'Default mode' }
multi sub MAIN('help') { say 'Help mode' }
multi sub MAIN(Str $mode) { say "Mode '$mode'" }
```

Cosa stampa il programma se viene eseguito con uno dei seguenti comandi:

## 1

```console
$ raku t.raku new
```

{:.quiz-select}
Stampa “Mode &apos;new&apos;” | (: Stampa “Default mode”, Stampa “Help mode”, Stampa “Mode &apos;new&apos;”, Termina con un'eccezione :)

## 2

```console
$ raku t.raku 1001
```

{:.quiz-select}
Stampa “Mode &apos;1001&apos;” | (: Stampa “Default mode”, Stampa “Help mode”, Stampa “Mode &apos;1001&apos;”, Termina con un'eccezione :)

## 3

```console
$ raku t.raku
```

{:.quiz-select}
Stampa “Default mode” | (: Stampa “Default mode”, Stampa “Help mode”, Stampa “Mode &apos;&apos;”, Termina con un'eccezione :)

## 4

```console
$ raku t.raku Help
```

{:.quiz-select}
Stampa “Mode &apos;Help&apos;” | (: Stampa “Default mode”, Stampa “Help mode”, Stampa “Mode &apos;Help&apos;”, Termina con un'eccezione :) | I parametri sono sensibili alle maiuscole in questo caso.

{% include quiz.html %}

{% include nav.html %}