---
title: 'Risinājums: Nosauciet kļūdu'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
sub risky {
    die 'sub failed';
}

{
    risky();

    CATCH {
        default {
            say .^name;
            say .message;
        }
    }
}
```

🦋 Atrodiet programmu failā [name-the-error.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/exception-objects/name-the-error.raku).

## Izvade

```
X::AdHoc
sub failed
```

## Komentāri

1. `die` notiek `risky` iekšienē, taču izņēmums ceļo augšup pie izsaucēja. To apstrādā `CATCH` blokā, kas izsauca `risky`, un tieši tā kļūdu apstrāde parasti arī darbojas: neveiksmei un tās apstrādātājam nav jābūt vienā rutīnā.

1. Vienkāršs `die` ar virkni rada izņēmumu `X::AdHoc`, par ko ziņo `.^name`, bet `.message` atgriež tekstu, kas padots `die`.

{% include nav.html %}
