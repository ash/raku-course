---
title: 'Risinājums: Lielie burti ar react'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my @collected;

react {
    whenever Supply.from-list('a', 'b', 'c') {
        @collected.push($_.uc);
    }
}

say @collected;
```

🦋 Atrodiet programmu failā [react-upcase.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/react-whenever/react-upcase.raku).

## Izvade

```
[A B C]
```

## Komentāri

1. `whenever` ķermenis izpildās vienreiz par katru vērtību, pārvēršot to lielajos burtos un ieliekot `@collected`.

1. `react` nogaida, līdz vienīgā supply ir pabeigta, tāpēc `say` izpildes brīdī masīvā jau ir visas trīs vērtības pēc kārtas: `[A B C]`.

1. Supply pašai ir saraksta metodes, tāpēc lielos burtus varētu uztaisīt straumē, nevis ķermenī — `whenever Supply.from-list('a', 'b', 'c').map(*.uc) { @collected.push($_) }` —, un iznākums ir tas pats. `.map` uz supply pārveido katru vērtību, tai plūstot garām; izvēle ir vienkārši tāda, vai pārveidojums pieder straumei vai reakcijai.

{% include nav.html %}
