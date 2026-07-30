---
title: '`VAR` gebruiken'
---

{% include menu.html %}

`VAR` is een pseudo-methode die het onderliggende containerobject teruggeeft. Voor een scalar variabele geeft de `.VAR`-aanroep de `Scalar`-container erachter terug.

## `^name`

Zodra je de container hebt, kun je de naam van zijn klasse opvragen met `.^name`:

```raku
my $var1 = 42;
my $var2 = '42';

say $var1.^name;     # Int
say $var1.VAR.^name; # Scalar

say $var2.^name;     # Str
say $var2.VAR.^name; # Scalar
```

`.^name` op de variabele geeft het type van de _waarde_ terug (`Int` of `Str`), terwijl `.VAR.^name` het type van de _container_ teruggeeft, dat in beide gevallen `Scalar` is.

## `default`

De `default`-methode geeft de standaardwaarde van de container terug — wat je krijgt wanneer de container niets van zichzelf bevat. Met de `is default`-trait stel je dit expliciet in:

```raku
my Str $language is default('Raku');
say $language.VAR.default; # Raku
```

Zonder een expliciete standaardwaarde is de standaardwaarde het type van de container. Voor een container zonder typebeperking is dat `Any`, ongeacht welke waarde hij momenteel bevat:

```raku
my $language = 'Raku';
say $language.VAR.default; # (Any)
```

Voor een container met typebeperking is het het beperkingstype:

```raku
my Str $language;
say $language.VAR.default; # (Str)
```

## `name`

De `name`-methode geeft de naam van de container terug, inclusief de sigil:

```raku
my $language;
say $language.VAR.name; # $language
```

Pas op dat je `^name` (het type) en `name` (de eigen naam van de variabele) niet verwart.

{% include nav.html %}
