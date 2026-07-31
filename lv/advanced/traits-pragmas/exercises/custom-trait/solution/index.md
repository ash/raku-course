---
title: 'Risinājums: Pielāgota īpašība'
---

{% include menu.html %}

Šeit ir iespējamais uzdevuma risinājums.

## Kods

```raku
my %role;

multi sub trait_mod:<is>(Routine:D $r, :$role!) {
    %role{$r.name} = $role;
}

sub login() is role('admin') { }

say %role<login>;
```

🦋 Programmas pirmkodu var atrast failā [custom-trait.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/traits-pragmas/custom-trait.raku).

## Izvade

```
admin
```

## Komentāri

1. Īpašība ir `multi sub trait_mod:<is>`, kura nosauktais parametrs `:$role!` aktivizē to priekš `is role(...)`. Atšķirībā no klātbūtnes-tipa īpašības, šī *saņem* argumentu: `is role('admin')` piesaista `'admin'` pie `$role`.

1. Ķermenis saglabā šo vērtību ar apakšprogrammas nosaukumu kā atslēgu. Nolasot `%role<login>` pēc tam, iegūstam `admin`. (Īpašības tiek izpildītas kompilēšanas laikā, tāpēc ieraksts jau ir tur, kad programma sāk darboties.)

{% include nav.html %}
