---
title: 'Risinājums: Saskaitīt divus argumentus'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
sub MAIN($a, $b) {
    say $a + $b;
}
```

🦋 Atrodiet programmu failā [two-arguments.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/more-on-main/two-arguments.raku).

## Izvade

```console
$ raku two-arguments.raku 2 3
5
```

## Komentāri

1. Abi pozicionālie parametri saņem divus vārdus no komandrindas.

1. Komandrindas argumenti pienāk kā virknes, taču operators `+` tos pārvērš skaitļos, tāpēc `2` un `3` saskaitās par `5`.

{% include nav.html %}
