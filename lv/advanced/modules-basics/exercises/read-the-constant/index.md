---
title: Nolasīt konstanti
translations_gpt:
---

{% include menu.html %}

## Uzdevums

Jums ir dots modulis failā `Circle.rakumod`:

```raku
unit module Circle;

our $pi = 3.14;
```

Uzrakstiet programmu, kas šo moduli ielādē ar `need` (nevis `use`) un izdrukā `$pi` vērtību. Atcerieties, ka `need` nosaukumus neimportē, tāpēc mainīgo sasniedzat caur moduļa nosaukumu.

## Piemērs

```console
$ raku -I. read-pi.raku
3.14
```

## Risinājums

✅ [Skatīt risinājumu](solution)

{% include nav.html %}
