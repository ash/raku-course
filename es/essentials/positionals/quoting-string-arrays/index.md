---
title: Citando arreglos de cadenas
---

{% include menu.html %}

Para los arreglos de cadenas, donde los elementos son cadenas cortas sin espacios, Raku ofrece una sintaxis agradable para inicializarlos.

```raku
my @digits = <zero one two three four five six seven eight nine>;
```

Depende de ti decidir si agregar espacios adicionales alrededor de los corchetes angulares o no. El compilador acepta ambas opciones.

```raku
my @digits = < zero one two three four five six seven eight nine >;
```

Ambas construcciones son equivalentes a una variante directa:

```raku
my @digits = 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine';
```

%%tipblock
## Arreglo vs Lista

Nota que en los ejemplos anteriores, la cita `< . . . >` crea una `List`, no un `Array`. Puedes confirmarlo llamando al método `WHAT`:

```raku
say <a b c>.WHAT; # (List)
```

Sin embargo, cuando lo asignas a un arreglo, obtienes un arreglo con los elementos de la lista.

```raku
my @a = <a b c>;
say @a.WHAT; # (Array)
```

%%/tipblock

{% include nav.html %}