---
title: Elementalis et listae contextus
---

{% include menu.html %}

Duo contextus ulterius decernunt utrum aliquid tractetur ut **lista** plurium valorum an ut unum **item**. Haec est differentia post sigilla `@` et `$`.

In _contextu listae_, ordo in elementa sua expanditur. Ansa `for` argumentum suum in contextum listae ponit, itaque per unumquodque elementum iterat:

```raku
my @a = 1, 2, 3;

my $count = 0;
$count++ for @a;
say $count; # 3
```

In _contextu item_, idem ordo ut unus valor tractatur. Contextualiser `$( … )` contextum item cogit, itaque ansa nunc unum tantum videt et semel currit:

```raku
my @a = 1, 2, 3;

my $count = 0;
$count++ for $(@a);
say $count; # 1
```

Haec est causa cur assignatio ordinis ad scalarem eum ut unum item componat potius quam elementa eius copiet: `my $x = @a` ordinem `@a` in contextum item ponit. Nota quod illud unum elementum potest esse alius container cum multis itemis in eo:

```raku
my @a = 1, 2, 3;

my $var = @a;
say $var;      # [1 2 3]
say $var.WHAT; # (Array)
```

Variabilis `$var` nunc continet unum (quia container scalaris est) obiectum, quod est `Array`. Hoc facile probare potes tractando `$x` ut genus referentiae ordinis (ut in aliis linguis diceres):

```raku
say $var[1]; # 2
```

Contextualiser congruens `@( … )` contrarium facit, contextum listae cogens.

Est etiam _contextus sink_ — contextus enuntiati cuius valor abicitur, ut linea quae solum propter effectum lateralem existit. Cum valor in contextum sink cadit nihil utile faciens, Raku monere potest de "useless use", quod est utile indicium te oblitum esse resultatum adhibere.

Sigillum quod eligis (`$` contra `@`) revera est electio contextus, et contextualisers `$( )` et `@( )` sinunt te id ubi opus est superscribere.

{% include nav.html %}
