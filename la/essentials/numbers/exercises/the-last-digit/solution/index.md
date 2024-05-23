---
title: 'Solutio: Ultima cifra'
---

{% include menu.html %}

Idea solutionis huius muneris est uti divisione modulo per 10 ut ultimam cifram numeri obtineas.

## Codex

Hic est solutio:

```raku
my $n = prompt 'Enter a number: ';
my $d = $n % 10;
say "The last digit of $n is $d.";
```

🦋 Invenies programmatum in archivo [the-last-digit.raku](https://github.com/ash/raku-course/blob/master/exercises/numbers/the-last-digit.raku).

## Output

Curre programmatum et intra numerum positivum integrum:

```console
$ raku exercises/numbers/the-last-digit.raku
Enter a number: 1234
The last digit of 1234 is 4.
```

## Commentarium

Nota hoc non operari ut expectatur cum numeris negativis, sicut, exempli gratia, `-11 % 10` est `9`, non `1`.

{% include nav.html %}