---
title: Parámetros de función
---

{% include menu.html %}

Es hora de pasar algunos datos a una función. Puede tomar parámetros listados entre paréntesis inmediatamente después del nombre de la función.

```raku
sub greet($name) {
    say "¡Hola, $name!";
}
```

Ahora puedes usar la función y pasarle diferentes argumentos:

```raku
greet('Alla');
greet('Karl');
```

Las dos llamadas a la misma función ahora producirán resultados diferentes:

```console
$ raku t.raku
¡Hola, Alla!
¡Hola, Karl!
```

%%tipblock

## Parámetro o argumento

Estos términos a menudo se usan indistintamente. Ambos se refieren a 'lo mismo', pero lo miran desde diferentes perspectivas.

* Un parámetro es lo que la función espera.
* Un argumento es lo que le pasas.

En el ejemplo anterior, `$name` es el parámetro de la función, mientras que `'Alla'` y `'Karl'` son sus argumentos.

%%/tipblock

## Más parámetros

Una función puede tomar más de un solo parámetro. En este caso, enumera todos ellos separados por comas:

```raku
sub add($x, $y) {
    say $x + $y;
}

add(10, 20); # 30
```

## Sin parámetros

Es un caso válido cuando la función no toma ningún parámetro. En este caso, puedes agregar un par de paréntesis vacío o omitirlos por completo, como hicimos al [principio de esta sección](../).

```raku
sub greet() {
    say '¡Hola, Mundo!';
}

greet();
```

## Firma

La lista de parámetros de una función se llama _firma_.

{% include nav.html %}