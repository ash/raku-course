---
title: 'Utendo `VAR`'
translations_gpt: Usus `VAR`
---

{% include menu.html %}

`VAR` est pseudo-methodus quae obiectum receptaculi subiacentis reddit. Pro variabili scalari, vocatio `.VAR` receptaculum `Scalar` post eam reddit.

## `^name`

Cum receptaculum habes, nomen classis eius cum `.^name` petere potes:

```raku
my $var1 = 42;
my $var2 = '42';

say $var1.^name;     # Int
say $var1.VAR.^name; # Scalar

say $var2.^name;     # Str
say $var2.VAR.^name; # Scalar
```

`.^name` in variabili typum _valoris_ (`Int` vel `Str`) reddit, dum `.VAR.^name` typum _receptaculi_ reddit, quod in utroque casu `Scalar` est.

## `default`

Methodus `default` valorem praedefinitum receptaculi reddit — id quod accipis cum receptaculum nihil proprium continet. Cum tropo `is default` eum explicite constituis:

```raku
my Str $language is default('Raku');
say $language.VAR.default; # Raku
```

Sine praedefinito explicito, valor praedefinitus est typus receptaculi. Pro receptaculo sine typo definito id est `Any`, quicumque valor nunc in eo conditus est:

```raku
my $language = 'Raku';
say $language.VAR.default; # (Any)
```

Pro receptaculo cum typo definito est typus restrictionis:

```raku
my Str $language;
say $language.VAR.default; # (Str)
```

## `name`

Methodus `name` nomen receptaculi reddit, sigillum includens:

```raku
my $language;
say $language.VAR.name; # $language
```

Cave ne `^name` (typum) et `name` (nomen proprium variabilis) confundas.

{% include nav.html %}
