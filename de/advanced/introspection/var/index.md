---
title: '`VAR` verwenden'
---

{% include menu.html %}

`VAR` ist eine Pseudo-Methode, die das zugrunde liegende Container-Objekt zurückgibt. Bei einer skalaren Variable gibt der `.VAR`-Aufruf den dahinterliegenden `Scalar`-Container zurück.

## `^name`

Sobald du den Container hast, kannst du mit `.^name` den Namen seiner Klasse abfragen:

```raku
my $var1 = 42;
my $var2 = '42';

say $var1.^name;     # Int
say $var1.VAR.^name; # Scalar

say $var2.^name;     # Str
say $var2.VAR.^name; # Scalar
```

`.^name` auf der Variable gibt den Typ des _Wertes_ zurück (`Int` oder `Str`), während `.VAR.^name` den Typ des _Containers_ zurückgibt, der in beiden Fällen `Scalar` ist.

## `default`

Die `default`-Methode gibt den Standardwert des Containers zurück — das, was du bekommst, wenn der Container nichts Eigenes enthält. Mit dem `is default`-Trait setzt du ihn explizit:

```raku
my Str $language is default('Raku');
say $language.VAR.default; # Raku
```

Ohne einen expliziten Standardwert ist der Standardwert der Typ des Containers. Bei einem nicht typisierten Container ist das `Any`, unabhängig davon, welcher Wert gerade gespeichert ist:

```raku
my $language = 'Raku';
say $language.VAR.default; # (Any)
```

Bei einem typisierten Container ist es der Constraint-Typ:

```raku
my Str $language;
say $language.VAR.default; # (Str)
```

## `name`

Die `name`-Methode gibt den Namen des Containers zurück, einschließlich des Sigils:

```raku
my $language;
say $language.VAR.name; # $language
```

Achte darauf, `^name` (den Typ) und `name` (den eigenen Namen der Variable) nicht zu verwechseln.

{% include nav.html %}
