---
title: Quiz — Reading command-line arguments in the MAIN function
---

{% include menu.html %}

Here is the program:

```raku
sub MAIN($a) {
    say $a;
}
```

## 1

What does it print if it is run as shown below?

```console
$ raku t.raku 123
```

{:.quiz-code .nocode}
123 | Inserisci l'output previsto: ␣␣␣␣␣␣␣

## 2

What does it print now?

```console
$ raku t.raku "123 456"
```

{:.quiz-code .nocode}
123␣456 | Inserisci l'output previsto: ␣␣␣␣␣␣␣


{% include quiz.html %}

{% include nav.html %}