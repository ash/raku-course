---
title: Listae
translations_gpt:
---

{% include menu.html %}

Index quoque collectio ordinata valorum est, sed, dissimilis ab ordine, _immutabilis_ est: elementa eius mutare, addere, vel removere non potes. Index ut series valorum virgula separatorum scribitur, saepe intra parentheses posita:

```raku
my $colours = ('red', 'green', 'blue');
```

Elementa indicis per indicem suum legere potes, et quot sint quaerere, sicut cum ordine:

```raku
my $colours = ('red', 'green', 'blue');
say $colours[0];    # red
say $colours.elems; # 3
```

Differentia apparet cum elementum mutare conaris. Cum ordine operatur, quia quodque elementum continens est:

```raku
my @array = 1, 2, 3;
@array[0] = 10;
say @array; # [10 2 3]
```

Cum indice error est, quia elementa indicis valores plani sunt, non continentes:

```raku
my $list = (1, 2, 3);
$list[0] = 10;
```

Secundum programma cum nuntio sistit:

```
Cannot modify an immutable List ((1 2 3))
  in block <unit> at t.raku line 2
```

Itaque, utere ordine (sigillo `@`) cum contenta mutare debes, et indice cum solum seriem fixam valorum servare debes.

{% include nav.html %}
