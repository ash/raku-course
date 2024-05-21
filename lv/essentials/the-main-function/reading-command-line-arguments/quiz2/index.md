---
title: Viktorīna 2 — Noklusējuma vērtības
---

{% include menu.html %}

Apsveriet sekojošo programmu.

```raku
sub MAIN($a = 'abc', $b = 'def') {
    say $a;
    say $b;
}
```

## 1

Ko tā izdrukā, ja tā tiek palaista kā parādīts zemāk?

```console
$ raku t.raku
```

{:.quiz-code .nocode}
abc def | Ievadiet izvades vērtības: ␣␣␣ un ␣␣␣

## 2

Tagad, tā pati programma tiek palaista kā:

```console
$ raku t.raku xyz
```

{:.quiz-code .nocode}
xyz def | Ievadiet izvades vērtības: ␣␣␣ un ␣␣␣

## 3

Visbeidzot, šī komanda:

```console
$ raku t.raku xyz 123
```

{:.quiz-code .nocode}
xyz 123 | Ievadiet izvades vērtības: ␣␣␣ un ␣␣␣

{% include quiz.html %}

{% include nav.html %}