---
title: Tipi di dati e contenitori scalari
translations_gpt:
---

{% include menu.html %}

Esaminiamo un programma che riutilizza la stessa variabile per contenere diversi tipi di dati. Usiamo `dd` per vedere cosa contiene il contenitore ad ogni passaggio. Questo esempio è qui a scopo dimostrativo e non è uno stile di programmazione consigliato.

```raku
my $value;
dd $value;

$value = 42;
dd $value;

$value = 'forty-two';
dd $value;
```

Ogni chiamata a `dd` mostra cosa contiene attualmente la variabile `$value`:

```
$value = Any
$value = 42
$value = "forty-two"
```

All'inizio, la variabile è vuota, e `dd` riporta il suo valore come `Any` — il valore base indefinito con cui un contenitore non tipizzato inizia. Dopo le assegnazioni, `dd` mostra l'intero e poi la stringa.

Notate che `dd` non stampa un tipo prima del nome in questo caso. Un contenitore non tipizzato non si vincola ad alcun tipo, quindi viene mostrato solo il valore. Come vedrete nel prossimo argomento, [un contenitore con un tipo dichiarato](/it/advanced/scalar-containers/type-constraints) si comporta diversamente.

{% include nav.html %}
