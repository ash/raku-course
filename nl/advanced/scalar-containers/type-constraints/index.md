---
title: Typebeperkingen
translations_gpt:
---

{% include menu.html %}

In het [deel Essentieel](/nl/essentials/typed-variables/type-constraints/) heb je gezien hoe je het type van een variabele kunt instellen met een typebeperking. Het is de moeite waard om te benadrukken dat het de _container_ is die deze beperking afdwingt op de waarden die hij mag accepteren.

De volgende declaratie maakt een scalaire container aan die alleen gehele getallen kan bevatten:

```raku
my Int $int;
```

Een container met een type accepteert alleen waarden die bij het type passen, dus alle volgende toewijzingen zijn geldig:

```raku
my Int $int;

$int = 123;       # directly an integer
say $int;

$int = 100 + 23;  # the result is an integer
say $int;

$int = '123'.Int; # a string converted to an integer
say $int;
```

Raku voert in dit geval geen automatische typeconversie uit. Het toewijzen van een kommagetal (dat in Raku een `Rat`-waarde is) is daarom niet toegestaan:

```raku
my Int $int;
$int = 123.45;
```

Je krijgt al een foutmelding tijdens het compileren:

```
===SORRY!=== Error while compiling t.raku
Cannot assign a literal of type Rat (123.45) to a variable ($int) of
type Int.  You can declare the variable to be of type Real, or try to
coerce the value with 123.45.Int or Int(123.45), or just write the value
as 123.
at t.raku:2
------> <BOL>⏏$int = 123.45;
```

Om de fout te voorkomen, converteer je de waarde expliciet:

```raku
my Int $int;

$int = 123.45.Int;
say $int; # 123
```

Laat je niet verwarren door de twee punten in `123.45.Int`. De eerste is het decimaalteken; de tweede roept de `Int`-methode aan op de rationele (`Rat`)-waarde.

{% include nav.html %}
