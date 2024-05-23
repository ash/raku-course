---
title: 'Postfix form of "for"'
---

{% include menu.html %}

Ni jam vidis aliajn deklarajn modifilojn: [`if` kaj `else`](/eo/essentials/conditional-checks/modifiers) kaj [`while` kaj `until`](/eo/essentials/loops/modifiers). Kaj tio estas kialo por eta festo, ĉar la dezajno de Raku estas tre konsekvenca.

Kun mallonga korpo de buklo, la `for` buklo povas esti skribita en postfiksa formo:

```raku
.say for 1..7;
```

Kiel vi vidas, intervaloj estas tre naturaj kiam uzataj kun la postfiksa formo de `for`.

Ĉi tiu programo estas ekvivalenta al pli tradicia varianto:

```raku
for 1..7 -> $n {
    say $n;
}
```

Aŭ, se la defaŭlta bukla variablo estas uzata, al:

```raku
for 1..7 {
    .say;
}
```

Ĉi tie, `.say` estas la mallonga formo por `$_.say`.


{% include nav.html %}