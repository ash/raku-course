---
title: 'Utendo `WHAT`'
translations_gpt: Usus `WHAT`
---

{% include menu.html %}

`WHAT` est pseudo-methodus quae accessum ad typum valoris praebet. Eam eodem modo quo `.^name` uti potes:

```raku
my $var = 42;

say $var.^name;
say $var.WHAT;
```

Duo typum imprimunt cum minore differentia in forma: `.^name` nomen nudum dat, dum `WHAT` obiectum typi ostendit, in parenthesibus scriptum:

```
Int
(Int)
```

Pro variabili sine restrictione typi, typus incipit ut `Any`. Statim ac valorem assignas, tam `^name` quam `WHAT` typum valoris conditi sequuntur:

```raku
my $var;
say $var.^name; # Any
say $var.WHAT;  # (Any)

$var = 'Hello';
say $var.^name; # Str
say $var.WHAT;  # (Str)
```

Cum restrictione typi, typus statim notus est, etiam antequam quidquam assignatur:

```raku
my Str $var;
say $var.^name; # Str
say $var.WHAT;  # (Str)

$var = 'Hello';
say $var.^name; # Str
say $var.WHAT;  # (Str)
```

## Comparatio obiectorum typi

Quia `WHAT` ipsum obiectum typi reddit, duo eorum cum operatore _identitatis valoris_ `===` comparare potes, qui interrogat an ambo latera idem valor sint. Unum tantum obiectum typi per typum exsistit, ergo hic est modus purus ad probandum an duo valores typum communicent:

```raku
my $a = 42;
my $b = 100;

say $a.WHAT === $b.WHAT; # True  — both are Int
say $a.WHAT === Int;     # True
say $a.WHAT === Str;     # False
```

Dissimilis `==`, qui numeros comparat, `===` identitatem comparat, ergo directe pro obiectis typi (et aliis valoribus) operatur.

{% include nav.html %}
