---
title: Qué es Cro
translations_gpt:
---

{% include menu.html %}

Cro es un conjunto de bibliotecas para construir **servicios**: programas que hablan con otros programas por la red. Es más conocido por HTTP, pero también maneja WebSockets, y lo construye todo sobre las herramientas reactivas de antes en esta parte: los [supplies](/es/paradigms/supplies), `react` y `whenever`. Un manejador de peticiones de Cro es, en el fondo, una reacción a un flujo de peticiones entrantes. Su sitio oficial, con la documentación completa y ejemplos, es [cro.services](https://cro.services).

Lo que Cro te da frente a los sockets en crudo:

* **Encaminamiento** — asocia rutas de URL al código que las atiende, en lugar de analizar peticiones a mano.
* **Objetos de petición y respuesta** — lee parámetros de consulta y envía JSON sin montar texto.
* **Concurrencia** — se atiende a muchos clientes a la vez, en el pool de hilos, automáticamente.
* **Componibilidad** — los servicios se construyen a partir de piezas pequeñas que puedes probar y combinar.

Se instala desde el ecosistema:

```
zef install cro
```

Cro es un framework grande con muchas dependencias, así que esto tarda unos minutos. Si la instalación se detiene en una identidad de dependencia que no encuentra — un error que menciona algo como `JSON::Fast:ver<0.19+>:auth<cpan:TIMOTIMO>` —, tu copia de `zef` es demasiado antigua para conocer el archivo que sirve esas identidades históricas de módulos. Actualiza el propio instalador con `zef install zef`, abre una terminal nueva y vuelve a ejecutar la instalación de Cro.

Cro reúne el curso entero: diseño orientado a objetos para sus tipos, el estilo funcional en sus manejadores y el modelo reactivo para sus flujos de peticiones. El apartado siguiente muestra el servicio Cro más pequeño posible para que veas cómo se juntan esas ideas en código web real.

{% include nav.html %}
