---
title: Quiz 2 — Default values
---

{% include menu.html %}

Розглянемо наступну програму.

```raku
sub MAIN($a = 'abc', $b = 'def') {
    say $a;
    say $b;
}
```

## 1

Що вона виведе, якщо її запустити, як показано нижче?

```console
$ raku t.raku
```

{:.quiz-code .nocode}
abc def | Введіть значення виводу: ␣␣␣ і ␣␣␣

## 2

Тепер, ту ж програму запустимо так:

```console
$ raku t.raku xyz
```

{:.quiz-code .nocode}
xyz def | Введіть значення виводу: ␣␣␣ і ␣␣␣

## 3

Нарешті, ця команда:

```console
$ raku t.raku xyz 123
```

{:.quiz-code .nocode}
xyz 123 | Введіть значення виводу: ␣␣␣ і ␣␣␣

{% include quiz.html %}

{% include nav.html %}