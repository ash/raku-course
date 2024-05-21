---
title: Quiz — The until loop
---

{% include menu.html %}

## 1

Wat print dit programma?

```raku
my $n = 0;
until $n > 5 {
    $n++;
}
say $n;
```

{:.quiz-select}
6 | Antwoord: (: 4, 5, 6 :)

## 2

Hoe kun je dit programma precies vijf iteraties laten hebben?

{:.quiz-code .fill}
. | my $n = 1;
6 5 | until $n == ␣ {
. | &nbsp;&nbsp;&nbsp;&nbsp;say $n;
. | &nbsp;&nbsp;&nbsp;&nbsp;$n++;
. | }

{% include quiz.html %}

{% include nav.html %}