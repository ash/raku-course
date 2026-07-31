---
title: La palabra clave grammar
translations_gpt:
---

{% include menu.html %}

Una _gramática_ agrupa regex con nombre bajo un solo nombre, casi como una clase agrupa métodos. Se declara con la palabra clave `grammar`:

```raku
grammar Greeting {
    token TOP  { 'Hello, ' <name> '!' }
    token name { \w+ }
}
```

Dentro de la gramática, cada patrón con nombre se escribe con `token` (una clase de regex que estudiarás en detalle enseguida). Un token, llamado por convención `TOP`, es el punto de partida: describe el todo. Aquí `TOP` dice «el texto es `Hello, `, después un nombre, después `!`», y `name` dice qué aspecto tiene un nombre.

Los tokens pueden referirse unos a otros por su nombre, exactamente igual que los [regex con nombre](/es/regexes/what-is-a-grammar/named-regexes) del tema anterior. `TOP` usa `<name>`, lo que mantiene legible la gramática: cada regla tiene un cometido claro.

Para aplicar una gramática a una cadena, llama a su método `.parse`:

```raku
my $m = Greeting.parse('Hello, Anna!');
say $m<name>; # ｢Anna｣
```

La sección siguiente examina `TOP` y `.parse` más de cerca. Por ahora, la idea que hay que llevarse es sencilla: **una gramática es una colección con nombre de regex con nombre que juntos describen un fragmento entero de texto estructurado.**

{% include nav.html %}
