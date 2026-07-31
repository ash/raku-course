---
title: Kongruado de intervaloj, tipoj kaj kondiĉoj
translations_gpt:
---

{% include menu.html %}

Bloko `when` ne nur komparas por egaleco. Ĝi faras _saĝan kongruadon_ inter la temo kaj la valoro, kiun vi donas al ĝi, do vi povas kongrui kun intervaloj, tipoj kaj kondiĉoj, ne nur kun unuopaj valoroj.

## Intervaloj

Intervalo kongruas, kiam la temo falas ene de ĝi. Tio faras `given`/`when` natura elekto por grupigi nombrojn en bendojn:

```raku
my $score = 75;

given $score {
    when 90..100 { say 'A' }
    when 80..89  { say 'B' }
    when 70..79  { say 'C' }
    default      { say 'F' }
}
```

La valoro `75` falas en la intervalon `70..79`, do la programo presas:

```
C
```

## Tipoj

Tipo kongruas, kiam la temo estas de tiu tipo. Tio permesas al vi branĉi laŭ tio, kian valoron vi havas:

```raku
my $value = 'Raku';

given $value {
    when Int { say 'an integer' }
    when Str { say 'a string' }
}
```

Ĉar `$value` enhavas ĉenon, la programo presas:

```
a string
```

## Kondiĉoj

Vi ankaŭ povas uzi komparon rekte. Ene de la `when` la temo disponeblas kiel `$_`, do kondiĉo kiel `$_ < 0` kongruas, kiam ĝi estas vera:

```raku
my $n = -7;

given $n {
    when $_ < 0 { say 'negative' }
    when 0      { say 'zero' }
    default     { say 'positive' }
}
```

Ĉi tie la unua `when` kongruas, kaj la programo presas:

```
negative
```

{% include nav.html %}
