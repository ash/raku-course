---
title: Valores praedefiniti
translations_gpt:
---

{% include menu.html %}

Attributo _valor praedefinitus_ dari potest, qui adhibetur cum obiectum sine valore pro eo creatur. Scribe valorem praedefinitum post attributum, cum `=`:

```raku
class Dog {
    has Str $.name;
    has Rat $.weight = 4.0;
}
```

Animadverte, similiter ac in variabilibus, genus attributorum cogi posse.

Si `weight` ad `new` non tradis, attributum valorem praedefinitum capit:

```raku
my $rex = Dog.new(name => 'Rex');
say $rex.weight; # 4
```

Valorem praedefinitum tamen superare potes valorem tradens:

```raku
my $lighty = Dog.new(name => 'Lighty', weight => 3.2);
say $lighty.weight; # 3.2
```

Sine valore praedefinito, et sine valore ad `new` tradito, attributum simpliciter indefinitum est, exacte sicut variabilis scalaris recens.

{% include nav.html %}
