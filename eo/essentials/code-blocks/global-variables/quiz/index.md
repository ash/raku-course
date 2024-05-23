---
title: Kvizo — Tutmondaj variabloj
---

{% include menu.html %}

## 1

Kion presas ĉi tiu programo?

```raku
my $value = 100;

{
    $value *= 2;
}

say $value;

{
    $value = 300;
}
```

{:.quiz-select}
200 | Respondo: (: 200 :)

## 2

Kion presas ĉi tiu programo?

```raku
my $visible = 'Sun';

{
    $visible = 'Moon';

    {
        $visible = 'None';
    }

    say $visible;
}
```

{:.quiz-select}
None | Respondo: (: Sun, Moon, None :) | La sama tutmonda variablo estas referencata en ĉiuj blokoj.

{% include quiz.html %}

{% include nav.html %}