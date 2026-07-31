---
title: 'Solvo: Perfektaj nombroj'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my @perfect = (1..30).grep: -> $n {
    $n == [+] (1..^$n).grep($n %% *)
};

say @perfect;
```

🦋 Vi povas trovi la fontkodon en la dosiero [perfect-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/numbers-math/perfect-numbers.raku).

## Eligo

```
[6 28]
```

## Komentoj

1. `(1..^$n).grep($n %% *)` konservas la nombrojn sub `$n`, kiuj dividas ĝin
senreste — ĝiajn proprajn divizorojn. La `%% *` estas Whatever-funkcio, kiu
testas divideblecon.

1. `[+]` sumigas tiujn divizorojn, kaj la ekstera `grep` konservas nur la
nombrojn, kiuj egalas tiun sumon.

{% include nav.html %}
