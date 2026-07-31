---
title: Uzskaitīt simbolus
translations_gpt:
---

{% include menu.html %}

## Uzdevums

Jums ir dots modulis failā `Circle.rakumod`, kas definē divus `our` mainīgos:

```raku
unit module Circle;

our $pi = 3.14;
our $tau = 6.28;
```

Uzrakstiet programmu, kas izmanto šo moduli un izdrukā, vispirms, cik nosaukumu ir definēti moduļa pakotnē, un pēc tam pašus nosaukumus alfabētiskā secībā.

## Piemērs

```console
$ raku -I. list.raku
2
($pi $tau)
```

## Risinājums

✅ [Skatīt risinājumu](solution)

{% include nav.html %}
