---
title: '`WHO` e `HOW`'
---

{% include menu.html %}

Altri due strumenti di introspezione completano l'insieme: `HOW` e `WHO`.

## `HOW`

Ogni valore in Raku e supportato da un _metaoggetto_, un oggetto che sa come funziona il tipo del valore. `HOW` (abbreviazione di _Higher Order Workings_) restituisce quel metaoggetto:

```raku
my $x = 42;
say $x.HOW.^name; # Perl6::Metamodel::ClassHOW
```

Hai utilizzato il metaoggetto sin dall'inizio, forse senza rendertene conto. Il `.^` in `.^name` e una chiamata di metodo instradata attraverso `HOW`. Queste due righe sono equivalenti:

```raku
my $x = 42;
say $x.^name;        # Int
say $x.HOW.name($x); # Int
```

Quindi `$x.^name` e semplicemente un modo piu breve di scrivere `$x.HOW.name($x)`. Nota che l'oggetto viene passato nuovamente come argomento: il metaoggetto e *condiviso* da ogni valore del tipo, quindi a un meta-metodo viene indicato su quale oggetto viene interrogato. La forma `.^` lo fa automaticamente. (Per `name` l'argomento viene ignorato, ma passarlo e la forma corretta e generale: alcuni meta-metodi lo utilizzano effettivamente.)

Lo stesso vale per altri meta-metodi che potresti incontrare, come `.^methods`, che elenca i metodi a cui un valore risponde.

## `WHO`

`WHO` restituisce il _package_ a cui un nome appartiene, ovvero la tabella dei simboli definiti in quel namespace:

```raku
say Int.WHO.^name; # Stash
```

Uno `Stash` (un hash della tabella dei simboli) diventa utile quando si lavora con i moduli, dove permette di cercare i nomi definiti da un modulo. Torneremo su questo argomento nella [sezione sui moduli](/it/advanced/module-introspection); per ora e sufficiente sapere che `WHO` esiste e cosa rappresenta.

{% include nav.html %}
