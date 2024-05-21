---
title: Quiz — Multi-MAIN
---

{% include menu.html %}

Er zijn drie versies van de `MAIN`-functie in dit programma:

```raku
multi sub MAIN() { say 'Default mode' }
multi sub MAIN('help') { say 'Help mode' }
multi sub MAIN(Str $mode) { say "Mode '$mode'" }
```

Wat print het programma als het wordt uitgevoerd met een van de volgende commando's:

## 1

```console
$ raku t.raku new
```

{:.quiz-select}
Prints “Mode &apos;new&apos;” | (: Prints “Default mode”, Prints “Help mode”, Prints “Mode &apos;new&apos;”, Terminateert met een uitzondering :)

## 2

```console
$ raku t.raku 1001
```

{:.quiz-select}
Prints “Mode &apos;1001&apos;” | (: Prints “Default mode”, Prints “Help mode”, Prints “Mode &apos;1001&apos;”, Terminateert met een uitzondering :)

## 3

```console
$ raku t.raku
```

{:.quiz-select}
Prints “Default mode” | (: Prints “Default mode”, Prints “Help mode”, Prints “Mode &apos;&apos;”, Terminateert met een uitzondering :)

## 4

```console
$ raku t.raku Help
```

{:.quiz-select}
Prints “Mode &apos;Help&apos;” | (: Prints “Default mode”, Prints “Help mode”, Prints “Mode &apos;Help&apos;”, Terminateert met een uitzondering :) | Parameters zijn in dit geval hoofdlettergevoelig.

{% include quiz.html %}

{% include nav.html %}