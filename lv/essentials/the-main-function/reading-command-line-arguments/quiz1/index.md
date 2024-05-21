---
title: Viktorīna — Komandrindas argumentu nolasīšana MAIN funkcijā
---

{% include menu.html %}

Šeit ir programma:

```raku
sub MAIN($a) {
    say $a;
}
```

## 1

Ko tā izdrukā, ja to palaiž, kā parādīts zemāk?

```console
$ raku t.raku 123
```

{:.quiz-code .nocode}
123 | Ievadiet paredzamo izvadi: ␣␣␣␣␣␣␣

## 2

Ko tā izdrukā tagad?

```console
$ raku t.raku "123 456"
```

{:.quiz-code .nocode}
123␣456 | Ievadiet paredzamo izvadi: ␣␣␣␣␣␣␣


{% include quiz.html %}

{% include nav.html %}