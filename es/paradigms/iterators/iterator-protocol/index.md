---
title: El protocolo de iterador
translations_gpt:
---

{% include menu.html %}

Todo valor sobre el que puedes iterar — una lista, un rango, un array — puede darte un _iterador_ con el método `.iterator`. Un iterador tiene un método esencial, `pull-one`, que devuelve el valor siguiente cada vez que lo llamas:

```raku
my $it = (10, 20, 30).iterator;
say $it.pull-one; # 10
say $it.pull-one; # 20
say $it.pull-one; # 30
```

Cuando los valores se agotan, `pull-one` devuelve un centinela especial, `IterationEnd`, en lugar de un elemento real. Pedir un valor más al mismo `$it` lo muestra:

```raku
say $it.pull-one =:= IterationEnd; # True
```

El operador `=:=` comprueba si se trata del **mismo objeto**, que es como se reconoce el centinela. Ese detalle importa dentro de un bucle, donde necesitas conservar el valor extraído *y* comprobarlo. Si lo **asignas** con `=`, el valor aterriza en un contenedor y la comparación acaba mirando el contenedor en lugar de `IterationEnd`. El remedio es **ligarlo** con `:=`, de modo que la variable simplemente *sea* lo que devolvió `pull-one`:

```raku
my $it = <a b c>.iterator;
loop {
    my $v := $it.pull-one;      # bind, not assign
    last if $v =:= IterationEnd;
    say $v;
}
```

El bucle imprime `a`, `b`, `c` y después se detiene. Esto es exactamente lo que hace por ti un bucle `for` entre bastidores: llama a `.iterator` sobre aquello que estás recorriendo y sigue llamando a `pull-one` hasta encontrar `IterationEnd`. Rara vez necesitas escribirlo a mano, pero hacerlo una vez muestra que son los iteradores — y no las listas — lo que Raku recorre en realidad.

{% include nav.html %}
