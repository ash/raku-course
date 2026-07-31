---
title: Ielādēt izpildes laikā
translations_gpt:
---

{% include menu.html %}

## Uzdevums

Jums ir dots modulis `Greeting.rakumod`, kas eksportē apakšprogrammu `hello`:

```raku
unit module Greeting;

sub hello($name) is export {
    "Hello, $name!"
}
```

Ielādējiet šo moduli ar `require`, nevis ar `use`, lai tas tiktu ienests **izpildes laikā**. Tā kā `require` nosaukumus automātiski neimportē, uzskaitiet vēlamo simbolu ar `require Greeting <&hello>;`. Pēc tam izsauciet `hello('Sam')` un izdrukājiet rezultātu.

Lai parādītu, ko izpildes laika ielāde dod, ielieciet `require` iekšpus `sub MAIN` ar karodziņu `--quiet`, lai modulis tiktu ielādēts *tikai* tad, kad sveiciens patiešām vajadzīgs. Ar `--quiet` programma izdrukā `Silence.` un moduli neaizskar nemaz.

## Piemērs

Palaista ar moduli uz meklēšanas ceļa, programma izdrukā:

```console
$ raku -I. require-import.raku
Hello, Sam!

$ raku -I. require-import.raku --quiet
Silence.
```

## Risinājums

✅ [Skatīt risinājumu](solution)

{% include nav.html %}
