---
title: 'Risinājums: Dinamisks mainīgais'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my $*user = 'guest';

sub whoami {
    say "running as $*user";
}

whoami();

{
    my $*user = 'admin';
    whoami();
}
```

🦋 Atrodiet programmu failā [a-dynamic-variable.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/special-variables/a-dynamic-variable.raku).

## Izvade

```
running as guest
running as admin
```

## Komentāri

1. Tvigils `*` padara `$*user` dinamisku. `whoami` to nekad neņem kā parametru — tā atrod vērtību, skatoties uz āru pa izsaukumu steku, tāpēc pirmais izsaukums ziņo noklusējumu `guest`.

1. Iekšējais bloks sava bloka laikā `$*user` pārdeklarē kā `admin`. *Tā pati* `whoami` tagad redz `admin`, jo dinamiskā meklēšana seko tam, kas pašlaik atrodas stekā. Dinamiska mainīgā pārmākšana kādā redzamības apgabalā ir veids, kā piešķirt paaugstinātu kontekstu visam, kas no tā izsaukts, — nemainot `whoami` ne mazākajā mērā.

{% include nav.html %}
