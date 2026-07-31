---
title: Quiz — gather y take
translations_gpt:
---

{% include menu.html %}

¿Qué imprime el programa siguiente?

```raku
my @a = gather {
    for 1..5 {
        take $_ if $_ > 3;
    }
}

say @a;
```

{:.quiz}
0 | [1 2 3 4 5]
1 | [4 5]
0 | [1 2 3]
0 | [3 4 5]

{% include quiz.html %}

<div class="extended-explanation">

El `take` solo se ejecuta cuando `$_ > 3`, así que a la lista únicamente se añaden `4` y `5`. Todo lo demás se salta, dando `[4 5]`.

</div>

{% include nav.html %}
