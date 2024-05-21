---
title: Вікторина — Читання аргументів командного рядка у функції MAIN
---

{% include menu.html %}

Ось програма:

```raku
sub MAIN($a) {
    say $a;
}
```

## 1

Що вона виведе, якщо запустити її, як показано нижче?

```console
$ raku t.raku 123
```

{:.quiz-code .nocode}
123 | Введіть очікуваний результат: ␣␣␣␣␣␣␣

## 2

Що вона виведе тепер?

```console
$ raku t.raku "123 456"
```

{:.quiz-code .nocode}
123␣456 | Введіть очікуваний результат: ␣␣␣␣␣␣␣


{% include quiz.html %}

{% include nav.html %}