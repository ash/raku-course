---
title: Lexika skopo
---

{% include menu.html %}

Koda bloko kreas tiel nomatan leksikan skopon. Variabloj deklaritaj en la nuna bloko estas videblaj interne, sed ne post kiam la programo eliras el la bloko. Konsideru ekzemplon:

```raku
{
    my $x = 42;
    say $x;
}

say $x;
```

La variablo `$x` estas kreita en la koda bloko. La unua voko de `say $x` presas la valoron de la variablo ĉar ĝi estas videbla ene de la bloko. La dua `say $x` malsukcesas ĉar la nomo `$x` ne ekzistas ekster la bloko kaj ne estas konata post kiam ĝi finiĝis. La programo ne kompilas kaj vi ricevas eraron:

    ===SORRY!=== Error while compiling /Users/ash/raku-course/t.raku
    Variable '$x' is not declared
    at /Users/ash/raku-course/t.raku:6
    ------> say ⏏$x;

{% include nav.html %}