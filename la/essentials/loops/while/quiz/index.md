---
title: Quiz — The while loop
---

{% include menu.html %}

## 1

Quid hoc programma imprimit?

```raku
my $n = 10;
while $n {
    $n--;
}
say $n;
```

{:.quiz-select}
0 | Responsum: (: 0, 1, −1 :)

## 2

Quomodo hoc programma prohibetur ne infinite currat? Fac mutationes necessarias in codice.

{:.quiz-code .fill}
. | my $n = 5;
. | my $a = 10;
. | while $n {
n a | &nbsp;&nbsp;&nbsp;&nbsp;say $␣<span>-</span>-;
. | }


{% include quiz.html %}

{% include nav.html %}