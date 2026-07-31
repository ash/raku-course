---
title: 'Solutio: Proprietas personalis'
---

{% include menu.html %}

Hic est possibilis solutio.

## Codex

```raku
my %role;

multi sub trait_mod:<is>(Routine:D $r, :$role!) {
    %role{$r.name} = $role;
}

sub login() is role('admin') { }

say %role<login>;
```

🦋 Inveni codicem fontem in archivo [custom-trait.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/traits-pragmas/custom-trait.raku).

## Exitus

```
admin
```

## Commentarii

1. Trait est `multi sub trait_mod:<is>` cuius parametrum nominatum `:$role!` illud pro `is role(...)` activat. Dissimile trait tantum-praesentiae, hoc argumentum *accipit*: `is role('admin')` `'admin'` parametro `$role` ligat.

1. Corpus illum valorem sub nomine subroutinae reponit. `%role<login>` postea relegendo `admin` dat. (Traits tempore compilationis currunt, itaque insertio iam adest antequam programma currit.)

{% include nav.html %}
