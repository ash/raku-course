---
title: Operadores definidos por el usuario
translations_gpt:
---

{% include menu.html %}

Los operadores en Raku son en realidad subrutinas con nombres especiales. Eso significa que puedes definir los tuyos propios, utilizando los nombres de categoría que conociste en la página [Tipos de operadores en Raku](/es/advanced/operator-types): `prefix`, `infix`, `postfix`, etc.

Para declarar un operador, escribe un `sub` cuyo nombre sea la categoría, dos puntos y el símbolo del operador entre corchetes angulares. Aquí hay un nuevo operador infijo llamado `plus`:

```raku
sub infix:<plus>($a, $b) {
    $a + $b
}

say 3 plus 4; # 7
```

Una vez definido, `plus` se usa entre sus dos operandos, exactamente como cualquier operador infijo incorporado.

Un operador postfijo sigue a su operando. El factorial es un ejemplo clásico: aquí está como el operador postfijo `!`, construido con [el metaoperador de reducción](/es/advanced/metaoperators/reduction) que viste anteriormente:

```raku
sub postfix:<!>(Int $n) {
    [*] 1..$n
}

say 5!; # 120
```

No estás limitado a letras y puntuación ASCII; el símbolo de un operador puede ser cualquier carácter. Este operador prefijo usa el signo de sección para duplicar un número:

```raku
sub prefix:<§>($x) {
    $x * 2
}

say §5; # 10
```

Definir operadores es una herramienta poderosa, así que úsala con buen gusto: un operador bien elegido puede hacer que el código se lea como el dominio del problema, mientras que uno oscuro solo confundirá al siguiente lector.

{% include nav.html %}
