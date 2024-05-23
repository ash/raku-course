---
title: Citans Series Stringarum
---

{% include menu.html %}

Pro series stringarum, ubi elementa sunt breves stringae sine spatiis, Raku praebet elegans syntaxim ad eas initializandas.

```raku
my @digits = <zero one two three four five six seven eight nine>;
```

Tibi decernendum est utrum addas spatia additicia circa angulares brackets necne. Compilator accipit utramque optionem.

```raku
my @digits = < zero one two three four five six seven eight nine >;
```

Utraque constructio aequivalet simplici varianti:

```raku
my @digits = 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine';
```

%%tipblock
## Series vs Index

Nota quod in exemplis supra, quotatio `< . . . >` creat `List`, non `Array`. Potes id confirmare vocando methodum `WHAT`:

```raku
say <a b c>.WHAT; # (List)
```

Tamen, cum assignas eam ad indicem, obtines indicem cum elementis ex serie.

```raku
my @a = <a b c>;
say @a.WHAT; # (Array)
```

%%/tipblock

{% include nav.html %}