---
title: 'Solvo: Propra trajto'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my %role;

multi sub trait_mod:<is>(Routine:D $r, :$role!) {
    %role{$r.name} = $role;
}

sub login() is role('admin') { }

say %role<login>;
```

🦋 Vi povas trovi la fontkodon en la dosiero [custom-trait.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/traits-pragmas/custom-trait.raku).

## Eligo

```
admin
```

## Komentoj

1. La trajto estas `multi sub trait_mod:<is>`, kies nomita parametro `:$role!` ekigas ĝin por `is role(...)`. Malsame ol nur-ĉeesta trajto, ĉi tiu *ricevas* la argumenton: `is role('admin')` ligas `'admin'` al `$role`.

1. La korpo konservas tiun valoron sub la nomo de la subrutino. Legi `%role<login>` poste donas `admin`. (Trajtoj ruliĝas dum kompilado, do la ero jam estas tie, kiam la programo ruliĝas.)

{% include nav.html %}
