---
title: Викторина — Чтение аргументов командной строки в функции MAIN
---

{% include menu.html %}

Вот программа:

```raku
sub MAIN($a) {
    say $a;
}
```

## 1

Что она выведет, если запустить следующим образом?

```console
$ raku t.raku 123
```

{:.quiz-code .nocode}
123 | Введите ожидаемый результат: ␣␣␣␣␣␣␣

## 2

Что она выведет теперь?

```console
$ raku t.raku "123 456"
```

{:.quiz-code .nocode}
123␣456 | Введите ожидаемый результат: ␣␣␣␣␣␣␣


{% include quiz.html %}

{% include nav.html %}