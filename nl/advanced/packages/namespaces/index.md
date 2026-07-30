---
title: Naamruimten en our
translations_gpt:
---

{% include menu.html %}

De `our`-declarator is wat iets zichtbaar maakt in zijn naamruimte. Een variabele gedeclareerd met `my` is lexicaal -- priv&eacute; voor zijn blok -- terwijl een variabele gedeclareerd met `our` ook een pakketvariabele is, bereikbaar van buitenaf via het `::`-pad:

```raku
module Counter {
    our $count = 0;  # package variable
    my  $secret = 42; # lexical, not visible outside
}

say $Counter::count; # 0
```

`$Counter::count` werkt omdat `count` gedeclareerd is met `our`; `$Counter::secret` zou mislukken, omdat `secret` lexicaal is.

Naamruimten kunnen **genest** worden. Een pakket binnen een pakket bouwt een langer `::`-pad op:

```raku
module Outer {
    module Inner {
        our $val = 42;
    }
}

say $Outer::Inner::val; # 42
```

De volledige naam `$Outer::Inner::val` loopt van de buitenste naamruimte, naar de binnenste, tot aan de variabele. Dit is precies hoe de standaardbibliotheek is georganiseerd -- namen zoals `IO::Socket::INET` zijn geneste naamruimten -- en hoe een module die je schrijft zijn onderdelen groepeert onder een naam op het hoogste niveau.

{% include nav.html %}
