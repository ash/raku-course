---
title: Usare il convertitore
translations_gpt: Esercizio 'Usare il convertitore'
---

{% include menu.html %}

## Problema

Ti viene dato un modulo in un file `Temperature.rakumod`:

```raku
unit module Temperature;

sub c-to-f($c) is export {
    $c * 9/5 + 32
}
```

Scrivi un programma separato che usi questo modulo per convertire una temperatura in Celsius — passata come argomento da riga di comando — in Fahrenheit e stampare il risultato.

## Esempio

```console
$ raku -I. temperature.raku 100
212
```

## Soluzione

✅ [Vedi la soluzione](solution)

{% include nav.html %}
