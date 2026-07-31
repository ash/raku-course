---
title: Firmas
---

{% include menu.html %}

En la parte de Fundamentos [definiste subrutinas con parámetros posicionales y nombrados y les diste valores predeterminados](/es/essentials/functions). La lista de parámetros se llama _firma_ (signature). Esta sección agrega dos cosas más que una firma puede hacer: marcar un parámetro como opcional y recolectar cualquier número de argumentos adicionales.

## Parámetros opcionales

Un parámetro seguido de un signo de interrogación es _opcional_: quien llama a la función puede omitirlo. Cuando se omite, el parámetro queda indefinido, por lo que puedes proporcionar un valor de respaldo con el operador defined-or `//`:

```raku
sub greet($name, $greeting?) {
    my $g = $greeting // 'Hello';
    say "$g, $name!";
}

greet('Anna');           # Hello, Anna!
greet('Anna', 'Hi');     # Hi, Anna!
```

Cuando se llama a `greet` con un solo argumento, `$greeting` queda indefinido, por lo que `//` recurre al valor `'Hello'`.

## Parámetros slurpy

Un parámetro marcado con `*` es _slurpy_: reúne todos los argumentos restantes. Un array slurpy, escrito `*@`, recolecta cualquier número de argumentos posicionales en un array:

```raku
sub count-them(*@items) {
    say @items.elems;
}

count-them(1, 2, 3, 4); # 4
count-them('a', 'b');   # 2
```

Puedes combinar parámetros ordinarios con uno slurpy. Los parámetros fijos se llenan primero, y lo que sobra va al array slurpy:

```raku
sub titles($name, *@titles) {
    say "$name has {@titles.elems} title(s)";
}

titles('Anna', 'Dr', 'Prof'); # Anna has 2 title(s)
```

De la misma manera, un hash slurpy, escrito `*%`, recolecta cualquier argumento nombrado adicional en un hash:

```raku
sub register($name, *%options) {
    say "$name: {%options.elems} option(s)";
    say "role is %options<role>";
}

register('Anna', role => 'admin', active => True);
```

Los dos argumentos nombrados terminan como claves de `%options`, por lo que el programa imprime:

```
Anna: 2 option(s)
role is admin
```

{% include nav.html %}
