---
title: 'Oplossing: Een eigen trait'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
my %role;

multi sub trait_mod:<is>(Routine:D $r, :$role!) {
    %role{$r.name} = $role;
}

sub login() is role('admin') { }

say %role<login>;
```

🦋 Je kunt de broncode vinden in het bestand [custom-trait.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/traits-pragmas/custom-trait.raku).

## Uitvoer

```
admin
```

## Opmerkingen

1. De trait is een `multi sub trait_mod:<is>` waarvan de benoemde parameter `:$role!` hem laat afgaan bij `is role(...)`. Anders dan een trait die alleen aanwezig is, *ontvangt* deze het argument: `is role('admin')` bindt `'admin'` aan `$role`.

1. De body slaat die waarde op onder de naam van de subroutine. Als je daarna `%role<login>` terugleest, krijg je `admin`. (Traits draaien tijdens het compileren, dus de vermelding staat er al tegen de tijd dat het programma draait.)

{% include nav.html %}
