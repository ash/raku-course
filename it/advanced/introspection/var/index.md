---
title: Usare `VAR`
---

{% include menu.html %}

`VAR` e uno pseudo-metodo che restituisce l'oggetto contenitore sottostante. Per una variabile scalare, la chiamata `.VAR` restituisce il contenitore `Scalar` che si trova dietro di essa.

## `^name`

Una volta ottenuto il contenitore, puoi chiedere il nome della sua classe con `.^name`:

```raku
my $var1 = 42;
my $var2 = '42';

say $var1.^name;     # Int
say $var1.VAR.^name; # Scalar

say $var2.^name;     # Str
say $var2.VAR.^name; # Scalar
```

`.^name` sulla variabile restituisce il tipo del _valore_ (`Int` o `Str`), mentre `.VAR.^name` restituisce il tipo del _contenitore_, che e `Scalar` in entrambi i casi.

## `default`

Il metodo `default` restituisce il valore predefinito del contenitore, cioe quello che si ottiene quando il contenitore non contiene nulla di proprio. Con il trait `is default` lo si imposta esplicitamente:

```raku
my Str $language is default('Raku');
say $language.VAR.default; # Raku
```

Senza un valore predefinito esplicito, il valore predefinito e il tipo del contenitore. Per un contenitore non tipizzato e `Any`, indipendentemente dal valore che contiene attualmente:

```raku
my $language = 'Raku';
say $language.VAR.default; # (Any)
```

Per un contenitore tipizzato e il tipo del vincolo:

```raku
my Str $language;
say $language.VAR.default; # (Str)
```

## `name`

Il metodo `name` restituisce il nome del contenitore, incluso il sigillo:

```raku
my $language;
say $language.VAR.name; # $language
```

Fai attenzione a non confondere `^name` (il tipo) e `name` (il nome della variabile).

{% include nav.html %}
