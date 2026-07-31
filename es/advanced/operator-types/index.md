---
title: Tipos de operadores en Raku
translations_gpt:
---

{% include menu.html %}

Ya has utilizado muchos operadores: `+`, `~`, `++`, y otros. En Raku, los operadores se clasifican según _donde_ se ubican en relación con sus operandos. Conocer las categorías te será útil más adelante, cuando definas tus propios operadores.

## `prefix`

Un operador prefijo va _antes_ de un único operando:

```raku
my $x = 5;
say -$x; # -5
say ?$x; # True
```

Aquí, `-` niega el numero y `?` convierte un valor en su equivalente booleano.

## `infix`

Un operador infijo se situa _entre_ dos operandos. La mayoría de los operadores aritméticos y de cadenas conocidos son infijos:

```raku
say 3 + 4;       # 7
say 'a' ~ 'b';   # ab
```

Un operador infijo no siempre es un símbolo de puntuación; también puede ser una palabra. El operador `gcd` que viste con los [números enteros](/es/advanced/integers), por ejemplo, es un operador infijo escrito como un nombre entre sus dos operandos:

```raku
say 12 gcd 18;   # 6
```

## `postfix`

Un operador postfijo va _después_ de un único operando:

```raku
my $x = 5;
$x++;
say $x; # 6
```

## `circumfix` y `postcircumfix`

Un operador circumfijo _rodea_ su operando. Los corchetes que construyen un arreglo son un operador circumfijo:

```raku
my @a = [1, 2, 3];
```

Un operador postcircumfijo rodea algo pero sigue a un termino. La indexación es un operador postcircumfijo: el `[1]` después de `@a`:

```raku
my @a = 10, 20, 30;
say @a[1]; # 20
```

Estos nombres — `prefix`, `infix`, `postfix`, `circumfix` y `postcircumfix` — son las mismas palabras que Raku utiliza cuando [declaras un nuevo operador](/es/advanced/user-defined-operators), como verás más adelante.

{% include nav.html %}
