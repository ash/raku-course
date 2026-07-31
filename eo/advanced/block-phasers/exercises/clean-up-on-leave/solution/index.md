---
title: 'Solvo: Purigi ĉe foriro'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
sub work {
    LEAVE say 'Cleanup';

    say 'Working';
    return;
    say 'never reached';
}

work();
```

🦋 Vi povas trovi la fontkodon en la dosiero [clean-up-on-leave.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/block-phasers/clean-up-on-leave.raku).

## Eligo

```
Working
Cleanup
```

## Komentoj

1. Post kiam `Working` estas presita, la `return` tuj eliras la subrutinon, do `never reached` neniam estas presata.

1. Kvankam la korpo estis forlasita frue, la fazilo `LEAVE` tamen ekfunkcias ĉe la eliro, presante `Cleanup`. Ĉi tiu garantio estas ĝuste tio, kial `LEAVE` estas la ĝusta loko por liberigi rimedojn — ĝi ruliĝas sendepende de kiel la bloko finiĝas.

{% include nav.html %}
