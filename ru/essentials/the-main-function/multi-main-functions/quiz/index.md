---
title: Викторина — Multi-MAIN
---

{% include menu.html %}

В этой программе есть три версии функции `MAIN`:

```raku
multi sub MAIN() { say 'Default mode' }
multi sub MAIN('help') { say 'Help mode' }
multi sub MAIN(Str $mode) { say "Mode '$mode'" }
```

Что выведет программа, если она запущена одной из следующих команд:

## 1

```console
$ raku t.raku new
```

{:.quiz-select}
Выводит “Mode &apos;new&apos;” | (: Выводит “Default mode”, Выводит “Help mode”, Выводит “Mode &apos;new&apos;”, Завершается с исключением :)

## 2

```console
$ raku t.raku 1001
```

{:.quiz-select}
Выводит “Mode &apos;1001&apos;” | (: Выводит “Default mode”, Выводит “Help mode”, Выводит “Mode &apos;1001&apos;”, Завершается с исключением :)

## 3

```console
$ raku t.raku
```

{:.quiz-select}
Выводит “Default mode” | (: Выводит “Default mode”, Выводит “Help mode”, Выводит “Mode &apos;&apos;”, Завершается с исключением :)

## 4

```console
$ raku t.raku Help
```

{:.quiz-select}
Выводит “Mode &apos;Help&apos;” | (: Выводит “Default mode”, Выводит “Help mode”, Выводит “Mode &apos;Help&apos;”, Завершается с исключением :) | Параметры чувствительны к регистру в этом случае.

{% include quiz.html %}

{% include nav.html %}