---
title: Вікторина — Multi-MAIN
---

{% include menu.html %}

У цій програмі є три версії функції `MAIN`:

```raku
multi sub MAIN() { say 'Default mode' }
multi sub MAIN('help') { say 'Help mode' }
multi sub MAIN(Str $mode) { say "Mode '$mode'" }
```

Що виведе програма, якщо її запустити однією з наступних команд:

## 1

```console
$ raku t.raku new
```

{:.quiz-select}
Виводить “Mode &apos;new&apos;” | (: Виводить “Default mode”, Виводить “Help mode”, Виводить “Mode &apos;new&apos;”, Завершується з винятком :)

## 2

```console
$ raku t.raku 1001
```

{:.quiz-select}
Виводить “Mode &apos;1001&apos;” | (: Виводить “Default mode”, Виводить “Help mode”, Виводить “Mode &apos;1001&apos;”, Завершується з винятком :)

## 3

```console
$ raku t.raku
```

{:.quiz-select}
Виводить “Default mode” | (: Виводить “Default mode”, Виводить “Help mode”, Виводить “Mode &apos;&apos;”, Завершується з винятком :)

## 4

```console
$ raku t.raku Help
```

{:.quiz-select}
Виводить “Mode &apos;Help&apos;” | (: Виводить “Default mode”, Виводить “Help mode”, Виводить “Mode &apos;Help&apos;”, Завершується з винятком :) | Параметри є чутливими до регістру в цьому випадку.

{% include quiz.html %}

{% include nav.html %}