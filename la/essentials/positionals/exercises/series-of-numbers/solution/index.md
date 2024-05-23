---
title: Solutio ‘Imprime seriem numerorum’
---

{% include menu.html %}

Plus quam una via est ad problema datum solvendum.

## Codex 1

Prima solutio est magis Raku-ish et compacta.

```raku
my $begin = prompt 'Incipe: ';
my $end = prompt 'Finis: ';

.say for $begin .. $end;
```

🦋 Invenies programmatum in archivo [series-of-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/positionals/series-of-numbers.raku).

## Codex 2

Secunda solutio possibilis potest uti `loop` enuntiatione.

```raku
my $begin = prompt 'Incipe: ';
my $end = prompt 'Finis: ';

loop (my $n = $begin; $n <= $end; $n++) {
    say $n;
}
```

🦋 Invenies programmatum in archivo [series-of-numbers-loop.raku](https://github.com/ash/raku-course/blob/master/exercises/positionals/series-of-numbers-loop.raku).

Ut videre potes, prima varians est notabiliter brevior et magis expressiva.

## Disputatio

In prima variante programmatis, [postfix forma `for` loop](/la/essentials/loops/postfix-for) adhibetur. In secundo programmate, `loop` eligitur.

## Output

Transi duo numeros in console et currere programmatum. Utraque varians idem output producit.

```console
$ raku exercises/positionals/series-of-numbers.raku
Incipe: 15
Finis: 19
15
16
17
18
19
```

{% include nav.html %}