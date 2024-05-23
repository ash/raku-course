---
title: Quiz — Multi-MAIN
---

{% include menu.html %}

Tres versiones functionis `MAIN` in hoc programmate sunt:

```raku
multi sub MAIN() { say 'Default mode' }
multi sub MAIN('help') { say 'Help mode' }
multi sub MAIN(Str $mode) { say "Mode '$mode'" }
```

Quid programma imprimit si uno ex sequentibus mandatis curritur:

## 1

```console
$ raku t.raku new
```

{:.quiz-select}
Imprimit “Mode &apos;new&apos;” | (: Imprimit “Default mode”, Imprimit “Help mode”, Imprimit “Mode &apos;new&apos;”, Terminat cum exceptione :)

## 2

```console
$ raku t.raku 1001
```

{:.quiz-select}
Imprimit “Mode &apos;1001&apos;” | (: Imprimit “Default mode”, Imprimit “Help mode”, Imprimit “Mode &apos;1001&apos;”, Terminat cum exceptione :)

## 3

```console
$ raku t.raku
```

{:.quiz-select}
Imprimit “Default mode” | (: Imprimit “Default mode”, Imprimit “Help mode”, Imprimit “Mode &apos;&apos;”, Terminat cum exceptione :)

## 4

```console
$ raku t.raku Help
```

{:.quiz-select}
Imprimit “Mode &apos;Help&apos;” | (: Imprimit “Default mode”, Imprimit “Help mode”, Imprimit “Mode &apos;Help&apos;”, Terminat cum exceptione :) | Parametra in hoc casu sensitiva sunt.

{% include quiz.html %}

{% include nav.html %}