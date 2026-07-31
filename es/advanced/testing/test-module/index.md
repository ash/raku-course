---
title: El módulo Test
translations_gpt: true
---

{% include menu.html %}

Importa las herramientas de pruebas con `use Test`. La comprobación más básica es `ok`, que pasa cuando su condición es verdadera. Cada comprobación acepta una descripción opcional:

```raku
use Test;

ok 1 == 1, 'one equals one';
ok 2 > 1,  'two is greater';

done-testing;
```

Al ejecutarlo se imprime, en el formato estándar de pruebas conocido como _TAP_:

```
ok 1 - one equals one
ok 2 - two is greater
1..2
```

Cada comprobación que pasa se muestra como `ok` con su número y descripción; una que falle aparecería como `not ok`. La línea final `1..2` es el _plan_, que indica cuántas pruebas se ejecutaron. La llamada a `done-testing` al final emite ese plan automáticamente.

Cuando esperas un valor específico, `is` es más claro que `ok`, porque informa tanto el valor esperado como el valor real en caso de fallo:

```raku
use Test;

is 2 + 2, 4, 'addition works';

done-testing;
```

Esto imprime `ok 1 - addition works`. Para ver ese informe en acción, dale a `is` una expectativa incorrecta:

```raku
use Test;

is 2 + 2, 5, 'addition works';

done-testing;
```

Ahora la comprobación falla, y la salida explica exactamente cómo:

```
not ok 1 - addition works
# Failed test 'addition works'
# at test.raku line 3
# expected: '5'
#      got: '4'
1..1
# You failed 1 test of 1
```

La línea `not ok` marca el fallo, y las líneas de diagnóstico debajo muestran lo que se esperaba frente a lo que realmente se obtuvo — por eso `is` es más útil que un simple `ok` cuando importa un valor específico.

`ok`, `is` y `done-testing` ya son suficientes para escribir un archivo de pruebas útil; el siguiente tema añade [las otras comparaciones](/es/advanced/testing/comparisons).

{% include nav.html %}
