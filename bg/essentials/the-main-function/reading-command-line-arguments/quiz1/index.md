---
title: Тест — Четене на аргументи от командния ред във функцията MAIN
---

{% include menu.html %}

Ето програмата:

```raku
sub MAIN($a) {
    say $a;
}
```

## 1

Какво ще отпечата, ако се изпълни както е показано по-долу?

```console
$ raku t.raku 123
```

{:.quiz-code .nocode}
123 | Въведете очаквания изход: ␣␣␣␣␣␣␣

## 2

Какво ще отпечата сега?

```console
$ raku t.raku "123 456"
```

{:.quiz-code .nocode}
123␣456 | Въведете очаквания изход: ␣␣␣␣␣␣␣


{% include quiz.html %}

{% include nav.html %}