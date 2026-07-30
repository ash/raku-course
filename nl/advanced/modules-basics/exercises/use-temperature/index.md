---
title: Gebruik de converter
translations_gpt: Oefening 'Gebruik de omrekener'
---

{% include menu.html %}

## Opgave

Je krijgt een module in een bestand `Temperature.rakumod`:

```raku
unit module Temperature;

sub c-to-f($c) is export {
    $c * 9/5 + 32
}
```

Schrijf een apart programma dat deze module gebruikt om een Celsius-temperatuur — meegegeven als opdrachtregelargument — om te rekenen naar Fahrenheit en het resultaat af te drukken.

## Voorbeeld

```console
$ raku -I. temperature.raku 100
212
```

## Oplossing

✅ [Bekijk de oplossing](solution)

{% include nav.html %}
