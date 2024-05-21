---
title: Quiz — Variables globales
---

{% include menu.html %}

## 1

¿Qué imprime este programa?

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
200 | Respuesta: (: 200 :)

## 2

¿Qué imprime este programa?

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
None | Respuesta: (: Sun, Moon, None :) | La misma variable global se refiere en todos los bloques.

{% include quiz.html %}

{% include nav.html %}