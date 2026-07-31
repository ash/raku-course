---
title: Contenitori scalari
translations_gpt:
---

{% include menu.html %}

Come suggerisce il nome, i contenitori scalari ospitano valori singoli (scalari). Tali contenitori sono contrassegnati dal sigillo `$`.

Ecco uno degli usi più semplici e diretti di uno scalare:

```raku
my $lang = 'Raku';
```

La variabile `$lang` è un contenitore scalare.

Per impostazione predefinita, i contenitori scalari non impongono un tipo ai dati, quindi è possibile memorizzare un valore di qualsiasi tipo al loro interno. La dimostrazione più semplice è che si può riutilizzare la stessa variabile per memorizzare un intero e poi una stringa:

```raku
my $value = 42;
$value = 'forty-two';
```

(L'autore non vi incoraggia a programmare in questo modo.)

Internamente, ciò significa che, per impostazione predefinita, un nuovo contenitore può contenere valori del tipo `Any`. `Any` è il tipo base per la maggior parte degli altri tipi, come `Int` o `Str`.

{% include nav.html %}
