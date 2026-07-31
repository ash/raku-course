---
title: Supplies definidos fuera
translations_gpt:
---

{% include menu.html %}

Todos los `whenever` vistos hasta ahora creaban su supply allí mismo, en la cabecera: `whenever Supply.from-list(...)`. Eso se lee bien en un ejemplo rápido, pero los programas reales rara vez tienen su fuente de eventos a mano exactamente en ese punto. Lo más frecuente es que un supply se construya en otro sitio — devuelto por una función, producido por un `Supplier` o entregado por un socket o un temporizador — y llegue como una variable corriente. Un `whenever` observa igual de a gusto un supply con nombre:

```raku
my $sensors  = Supply.from-list(18, 21, 19);
my $messages = Supply.from-list('hi', 'bye');

react {
    whenever $sensors {
        say "temperature: $_";
    }
    whenever $messages {
        say "message: $_";
    }
}
```

Esto imprime:

```
temperature: 18
temperature: 21
temperature: 19
message: hi
message: bye
```

Así que lee `whenever $sensors { … }` como «siempre que el supply `$sensors` — venga de donde venga — emita un valor, ejecuta este cuerpo». El `whenever Supply.from-list(...)` en línea que viste antes no es más que el caso particular en el que la fuente se crea allí mismo.

Si esta forma de bloque exterior con bloques interiores te recuerda a algo, no te equivocas: la [página siguiente](/es/paradigms/react-whenever/whenever-vs-when) la compara con `given`/`when`.

{% include nav.html %}
