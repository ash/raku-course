---
title: Contexto de ítem y de lista
---

{% include menu.html %}

Dos contextos adicionales deciden si algo se trata como una **lista** de varios valores o como un solo **elemento**. Esta es la diferencia detrás de los sigils `@` y `$`.

En _contexto de lista_, un array se despliega en sus elementos. Un bucle `for` pone su argumento en contexto de lista, así que itera sobre cada elemento:

```raku
my @a = 1, 2, 3;

my $count = 0;
$count++ for @a;
say $count; # 3
```

En _contexto de elemento_, el mismo array se trata como un solo valor. El contextualizador `$( … )` fuerza el contexto de elemento, así que el bucle ahora ve solo una cosa y se ejecuta una vez:

```raku
my @a = 1, 2, 3;

my $count = 0;
$count++ for $(@a);
say $count; # 1
```

Por eso, asignar un array a un escalar lo empaqueta como un solo elemento en lugar de copiar sus elementos: `my $x = @a` pone `@a` en contexto de elemento. Ten en cuenta que ese único elemento puede ser otro contenedor con muchos elementos dentro:

```raku
my @a = 1, 2, 3;

my $var = @a;
say $var;      # [1 2 3]
say $var.WHAT; # (Array)
```

La variable `$var` ahora contiene un solo objeto (ya que es un contenedor escalar), que es un `Array`. Puedes demostrar esto fácilmente tratando `$x` como una especie de referencia a array (como lo llamarías en otros lenguajes):

```raku
say $var[1]; # 2
```

El contextualizador correspondiente `@( … )` hace lo opuesto, forzando el contexto de lista.

También existe el _contexto sink_ — el contexto de una sentencia cuyo valor se descarta, como una línea que existe solo por su efecto secundario. Cuando un valor cae en contexto sink sin nada útil que hacer, Raku puede advertir sobre un "uso inútil", lo cual es una pista útil de que olvidaste usar un resultado.

El sigil que eliges (`$` versus `@`) es realmente una elección de contexto, y los contextualizadores `$( )` y `@( )` te permiten anularlo cuando sea necesario.

{% include nav.html %}
