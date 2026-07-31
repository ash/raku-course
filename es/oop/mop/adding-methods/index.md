---
title: Añadir métodos en tiempo de ejecución
translations_gpt:
---

{% include menu.html %}

El MOP no sirve solo para inspeccionar: también puede **cambiar** un tipo mientras el programa se ejecuta. El metamétodo `.^add_method` añade un método nuevo a una clase:

```raku
class Empty {
}

Empty.^add_method('greet', method { 'hi' });

say Empty.new.greet; # hi
```

La clase `Empty` se define sin ningún método. `Empty.^add_method('greet', …)` le adosa entonces un método llamado `greet`, dado como un `method { … }` anónimo. A partir de ese momento todo objeto `Empty` responde a `.greet`, igual que si estuviera escrito en la clase.

Esto es metaprogramación de verdad: se le está diciendo al metaobjeto de `Empty` que le crezca un método nuevo. Ese mismo protocolo está debajo de funcionalidades que ya has usado: conceptualmente, cuando escribes `class`, `role`, `has` o `method`, el compilador construye tu tipo por ti a través de métodos del MOP como `.^add_method` y `.^add_attribute`.

«Conceptualmente», porque esto es un modelo del lenguaje, no una promesa sobre ningún compilador concreto. El MOP es aquello *en términos de lo cual* está especificado el sistema de objetos; si una implementación dada encamina realmente cada declaración a través de esos metamétodos — y si puedes observarla haciéndolo — depende de esa implementación. Por el mismo motivo, *llamar* tú mismo a estos metamétodos depende de la implementación: cuáles expone un compilador, y cómo se comportan exactamente, puede variar, así que el código que recurre a `.^add_method` y compañía podría no ejecutarse igual en todos los Raku.

Añadir métodos en tiempo de ejecución es una herramienta potente y rara vez necesaria. La mayoría de los programas nunca recurren a ella, pero es lo que hace abierto el sistema de objetos de Raku: las reglas de las clases están escritas a su vez en términos del MOP, así que puedes extenderlas. Para el código de todos los días, los metamétodos de inspección del tema anterior son la parte del MOP que realmente usarás.

{% include nav.html %}
