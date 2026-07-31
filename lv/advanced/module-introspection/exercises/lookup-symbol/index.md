---
title: Atrast simbolu
translations_gpt:
---

{% include menu.html %}

## Uzdevums

Papildus pakotnes nosaukumu uzskaitīšanai jūs varat dinamiski piekļūt nosaukumam, izmantojot to kā atslēgu pakotnes stash. Jums ir dots modulis `Circle.rakumod`:

```raku
unit module Circle;

our $pi = 3.14;
```

Uzrakstiet atsevišķu programmu, kas ielādē moduli un izdrukā `$pi` vērtību, meklējot to stash ar `Circle::{'$pi'}` — nevis izmantojot kvalificēto `$Circle::pi`.

## Piemērs

Palaižot ar moduli meklēšanas ceļā, programma izdrukā:

```console
$ raku -I. lookup.raku
3.14
```

## Risinājums

✅ [Skatīt risinājumu](solution)

{% include nav.html %}
