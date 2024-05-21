---
title: Quiz — Multi-MAIN
---

{% include menu.html %}

Hay tres versiones de la función `MAIN` en este programa:

```raku
multi sub MAIN() { say 'Default mode' }
multi sub MAIN('help') { say 'Help mode' }
multi sub MAIN(Str $mode) { say "Mode '$mode'" }
```

¿Qué imprime el programa si se ejecuta con uno de los siguientes comandos:

## 1

```console
$ raku t.raku new
```

{:.quiz-select}
Imprime “Mode &apos;new&apos;” | (: Imprime “Default mode”, Imprime “Help mode”, Imprime “Mode &apos;new&apos;”, Termina con una excepción :)

## 2

```console
$ raku t.raku 1001
```

{:.quiz-select}
Imprime “Mode &apos;1001&apos;” | (: Imprime “Default mode”, Imprime “Help mode”, Imprime “Mode &apos;1001&apos;”, Termina con una excepción :)

## 3

```console
$ raku t.raku
```

{:.quiz-select}
Imprime “Default mode” | (: Imprime “Default mode”, Imprime “Help mode”, Imprime “Mode &apos;&apos;”, Termina con una excepción :)

## 4

```console
$ raku t.raku Help
```

{:.quiz-select}
Imprime “Mode &apos;Help&apos;” | (: Imprime “Default mode”, Imprime “Help mode”, Imprime “Mode &apos;Help&apos;”, Termina con una excepción :) | Los parámetros son sensibles a mayúsculas y minúsculas en este caso.

{% include quiz.html %}

{% include nav.html %}