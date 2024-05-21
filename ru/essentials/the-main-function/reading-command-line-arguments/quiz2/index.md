---
title: Quiz 2 — Default values
---

{% include menu.html %}

Consider the following program.

```raku
sub MAIN($a = 'abc', $b = 'def') {
    say $a;
    say $b;
}
```

## 1

What does it print if it is run as shown below?

```console
$ raku t.raku
```

{:.quiz-code .nocode}
abc def | Enter the output values: ␣␣␣ and ␣␣␣

## 2

Now, the same program is run as:

```console
$ raku t.raku xyz
```

{:.quiz-code .nocode}
xyz def | Enter the output values: ␣␣␣ and ␣␣␣

## 3

Finally, this command:

```console
$ raku t.raku xyz 123
```

{:.quiz-code .nocode}
xyz 123 | Enter the output values: ␣␣␣ and ␣␣␣

{% include quiz.html %}

{% include nav.html %}