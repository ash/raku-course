---
title: Quiz — Variabiles Globales
---

{% include menu.html %}

## 1

Quid hic programmat imprimit?

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
200 | Responsum: (: 200 :)

## 2

Quid hic programmat imprimit?

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
None | Responsum: (: Sun, Moon, None :) | Eadem variabilis globalis in omnibus clausulis refertur.

{% include quiz.html %}

{% include nav.html %}