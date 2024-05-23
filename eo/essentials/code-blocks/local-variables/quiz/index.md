---
title: Kviz — Lokaj variabloj
---

{% include menu.html %}

## 1

Kion presas ĉi tiu programo?

```raku
my $value = 100;

{
    my $value = 1;
    $value *= 2;
    say $value;
}
```

{:.quiz-select}
2 | Respondo: (: 1, 2, 100, 200 :) | Loka variablo estas uzata kaj presita.

## 2

Kion presas ĉi tiu programo?

```raku
my $value = 100;

{
    my $value = 1;
    $value *= 2;
}

say $value;
```

{:.quiz-select}
100 | Respondo: (: 1, 2, 100, 200 :) | Loka variablo estas modifita, sed la tutmonda variablo estas presita.

{% include quiz.html %}

{% include nav.html %}