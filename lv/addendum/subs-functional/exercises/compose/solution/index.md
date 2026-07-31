---
title: 'Risinājums: Kompozējiet divas funkcijas'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
sub compose(&f, &g) {
    return -> $x { f(g($x)) };
}

my $combined = compose(* * 2, * + 1);

say $combined(5);
```

🦋 Atrodiet programmu failā [compose.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/subs-functional/compose.raku).

## Izvade

```
12
```

## Komentāri

1. Parametri `&f` un `&g` pieņem jebko izsaucamu — šeit Whatever funkcijas
`* * 2` un `* + 1`.

1. `compose` atgriež svaigu anonīmu funkciju `-> $x { f(g($x)) }`. Izsaucot to ar
`5`, vispirms izpildās `g` (`5 + 1`), tad `f` (`6 * 2`), dodot `12`.

{% include nav.html %}
