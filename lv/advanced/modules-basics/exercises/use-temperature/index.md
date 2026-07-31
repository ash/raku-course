---
title: Izmantot pārveidotāju
translations_gpt:
---

{% include menu.html %}

## Uzdevums

Jums ir dots modulis failā `Temperature.rakumod`:

```raku
unit module Temperature;

sub c-to-f($c) is export {
    $c * 9/5 + 32
}
```

Uzrakstiet atsevišķu programmu, kas ar šo moduli pārvērš Celsija temperatūru — padotu kā komandrindas argumentu — Fārenheita grādos un izdrukā rezultātu.

## Piemērs

```console
$ raku -I. temperature.raku 100
212
```

## Risinājums

✅ [Skatīt risinājumu](solution)

{% include nav.html %}
