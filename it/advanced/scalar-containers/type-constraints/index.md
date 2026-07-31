---
title: Vincoli di tipo
translations_gpt:
---

{% include menu.html %}

Nella [parte Fondamenti](/it/essentials/typed-variables/type-constraints/), avete visto come impostare il tipo di una variabile usando un vincolo di tipo. Vale la pena sottolineare che è il _contenitore_ a imporre questa restrizione sui valori che è autorizzato ad accettare.

La seguente dichiarazione crea un contenitore scalare che può ospitare solo interi:

```raku
my Int $int;
```

Un contenitore tipizzato accetta solo i valori che corrispondono al suo tipo, quindi tutte le seguenti assegnazioni sono valide:

```raku
my Int $int;

$int = 123;       # directly an integer
say $int;

$int = 100 + 23;  # the result is an integer
say $int;

$int = '123'.Int; # a string converted to an integer
say $int;
```

Raku non esegue la conversione automatica del tipo in questo caso. Assegnare un numero in virgola mobile (che è un valore `Rat` in Raku) non è quindi permesso:

```raku
my Int $int;
$int = 123.45;
```

Si ottiene già un errore in fase di compilazione:

```
===SORRY!=== Error while compiling t.raku
Cannot assign a literal of type Rat (123.45) to a variable ($int) of
type Int.  You can declare the variable to be of type Real, or try to
coerce the value with 123.45.Int or Int(123.45), or just write the value
as 123.
at t.raku:2
------> <BOL>⏏$int = 123.45;
```

Per evitare l'errore, convertite il valore esplicitamente:

```raku
my Int $int;

$int = 123.45.Int;
say $int; # 123
```

Non confondete i due punti in `123.45.Int`. Il primo è il punto decimale; il secondo chiama il metodo `Int` sul valore razionale (`Rat`).

{% include nav.html %}
