---
title: 'Solvo: Majuskloj per react'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my @collected;

react {
    whenever Supply.from-list('a', 'b', 'c') {
        @collected.push($_.uc);
    }
}

say @collected;
```

🦋 Vi povas trovi la fontkodon en la dosiero [react-upcase.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/react-whenever/react-upcase.raku).

## Eligo

```
[A B C]
```

## Komentoj

1. La korpo `whenever` plenumiĝas unufoje por ĉiu valoro, majuskligante ĝin kaj puŝante ĝin sur `@collected`.

1. `react` atendas, ke la unu sola supply finiĝu, do kiam `say` plenumiĝas, la tabelo tenas ĉiujn tri valorojn laŭvice: `[A B C]`.

1. Supply havas proprajn list-similajn metodojn, do vi povus majuskligi en la fluo anstataŭ en la korpo — `whenever Supply.from-list('a', 'b', 'c').map(*.uc) { @collected.push($_) }` — kaj la efiko estas la sama. `.map` sur supply transformas ĉiun valoron laŭ ĝia trafluo; la elekto estas simple, ĉu la transformo apartenas al la fluo aŭ al la reago.

{% include nav.html %}
