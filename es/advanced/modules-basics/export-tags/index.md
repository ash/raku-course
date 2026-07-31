---
title: Etiquetas de exportación
translations_gpt:
---

{% include menu.html %}

Marcar una subrutina con `is export` la coloca en el grupo de exportación _predeterminado_ del módulo — los nombres que un simple `use` incorpora. Al darle a `is export` una _etiqueta_, puedes organizar las exportaciones en grupos con nombre y dejar que cada programa elija el conjunto que desea.

Una etiqueta se escribe entre paréntesis después de `is export`:

```raku
unit module Greeting;

sub hello($name)   is export            { "Hello, $name!" }
sub goodbye($name) is export(:partings) { "Goodbye, $name!" }
```

`hello` no tiene etiqueta, por lo que pertenece al grupo predeterminado; `goodbye` está etiquetada con `:partings`.

Un simple `use` importa solo el grupo predeterminado:

```raku
use Greeting;      # hello is available; goodbye is not
```

Nombrar una etiqueta importa ese grupo en su lugar — y, quizás sorprendentemente, _no_ el predeterminado también:

```raku
use Greeting :partings; # goodbye is available; hello is not
```

Pedir `:partings` te da exactamente ese grupo. Para incorporar todo lo que un módulo exporta, usa la etiqueta incorporada `:ALL`:

```raku
use Greeting :ALL; # both hello and goodbye
```

Vale la pena conocer dos etiquetas especiales. `:ALL` es soportada por todos los módulos e importa todas sus exportaciones. `:MANDATORY` es una que puedes colocar en una rutina que debería importarse sin importar qué etiqueta elija el llamador.

Cada etiqueta es en realidad un paquete dentro del paquete `EXPORT` del módulo — `Greeting::EXPORT::partings`, por ejemplo — que es exactamente lo que lista la [introspección de módulos](/es/advanced/module-introspection). Las etiquetas permiten que un módulo grande mantenga su superficie predeterminada pequeña mientras sigue ofreciendo características adicionales bajo demanda.

{% include nav.html %}
