---
title: Quiz — Multi-MAIN
---

{% include menu.html %}

There are three versions of the `MAIN` function in this program:

```raku
multi sub MAIN() { say 'Default mode' }
multi sub MAIN('help') { say 'Help mode' }
multi sub MAIN(Str $mode) { say "Mode '$mode'" }
```

What does the program print if it is run by one of the following commands:

## 1

```console
$ raku t.raku new
```

{:.quiz-select}
Prints “Mode &apos;new&apos;” | (: Prints “Default mode”, Prints “Help mode”, Prints “Mode &apos;new&apos;”, Terminates with an exception :)

## 2

```console
$ raku t.raku 1001
```

{:.quiz-select}
Prints “Mode &apos;1001&apos;” | (: Prints “Default mode”, Prints “Help mode”, Prints “Mode &apos;1001&apos;”, Terminates with an exception :)

## 3

```console
$ raku t.raku
```

{:.quiz-select}
Prints “Default mode” | (: Prints “Default mode”, Prints “Help mode”, Prints “Mode &apos;&apos;”, Terminates with an exception :)

## 4

```console
$ raku t.raku Help
```

{:.quiz-select}
Prints “Mode &apos;Help&apos;” | (: Prints “Default mode”, Prints “Help mode”, Prints “Mode &apos;Help&apos;”, Terminates with an exception :) | Parameters are case sensitive in this case.

{% include quiz.html %}

{% include nav.html %}
