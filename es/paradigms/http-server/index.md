---
title: Un servidor HTTP sencillo
translations_gpt:
---

{% include menu.html %}

Un _servidor_ es el otro lado de una conexión: en lugar de salir hacia una máquina remota, espera a que los clientes entren **hacia él**. La misma clase básica, `IO::Socket::INET`, también hace esto: basta con ponerla en modo de escucha.

Esta sección construye a mano un servidor web diminuto: escuchar una conexión, leer la petición y devolver una respuesta HTTP. Como los ejemplos de sockets anteriores, hay que ejecutarlos en tu propia máquina y conectarse a ellos con un navegador u otro programa.

{% include nav.html %}
