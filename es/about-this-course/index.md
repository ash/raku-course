---
title: Sobre este curso
---

{% assign course_title = site.data.toc["es"].title %}

[{{course_title}}](/es/)

# Sobre este curso

¡Bienvenido al curso del lenguaje de programación Raku!

Este curso cubre todos los aspectos principales del lenguaje que necesitas usar en tu práctica diaria. El curso consta de cinco partes que explican la teoría y ofrecen muchas tareas prácticas. Se asume que intentas resolver las tareas por ti mismo antes de mirar la solución.

Si apenas estás comenzando a aprender Raku, se te aconseja pasar por todas las partes en el orden en que están listadas en la tabla de contenidos. Si ya tienes algo de práctica y deseas un entrenamiento específico, puedes comenzar con la sección deseada.

## Estructura

El curso está dividido en cinco partes, cada una de las cuales incluye varias secciones, que a su vez incluyen una serie de temas (o, simplemente dicho, diferentes páginas con su URL única).

El curso incluye materiales de los siguientes cuatro tipos:

* — Teoría que cubre el tema actual
* — Cuestionarios que prueban tu comprensión de la teoría del tema y/o la sección
* — Ejercicios para el material de toda la sección
* — Respuestas a los ejercicios

A veces, las tareas prácticas (tanto cuestionarios como ejercicios) proporcionan información adicional sobre el tema, por lo que para aprovechar al máximo el curso, se recomienda no saltárselas.

Debajo de cada página, hay un bloque de navegación que puedes usar para recorrer todo el curso. También puedes saltar a la sección deseada utilizando el menú de migas de pan en la parte superior de la página.

Mientras que la navegación te guía a través de las tareas en un orden particular, puedes resolverlas en un orden más o menos aleatorio dentro de la sección o tema actual.

## Contenidos

El curso incluye cinco partes:

| N | Nombre | Estado
| 1 | [Fundamentos de Raku](/es/essentials) | Publicado
| 2 | [Temas avanzados de Raku](/es/advanced) | En progreso<span id="ProgressBar">...</span>
| 3 | Programación orientada a objetos en Raku | 
| 4 | Expresiones regulares y gramáticas | 
| 5 | Programación funcional, concurrente y reactiva | 

<script>
    let ProgressBar = document.getElementById('ProgressBar');
    let current_progress = 0;
    setInterval(function() {
        current_progress++;
        current_progress %= 6;

        let bar = '';
        for (let c = 0; c < current_progress; c++) {
            bar += ',';
        }
        bar += '...';
        for (let c = current_progress; c < 6; c++) {
            bar += ',';
        }
        
        bar = bar.substr(3, 3);
        bar = bar.replace(/,/g, '<span style="color: lightgray">.</span>');
        ProgressBar.innerHTML = bar;
    }, 200);
</script>

En este momento, la primera parte está completamente escrita y publicada. Las otras partes están en progreso. Ten en cuenta que, como el curso aún está en desarrollo, las URLs de sus diferentes partes pueden cambiar ligeramente en el futuro.

La primera parte, ‘Fundamentos de Raku’, contiene:

- 91 temas
- 73 cuestionarios
- 65 ejercicios

Nuevos ejercicios y cuestionarios pueden aparecer en los temas ya publicados, así como las partes teóricas pueden modificarse ligeramente para lograr el mejor flujo del curso.

## Requisitos previos

Para seguir el curso y ejecutar los ejercicios, necesitas tener un compilador funcional. Hay varias opciones:

* — Instalar el compilador Rakudo o el paquete Rakudo Star o
* — Usar servicios en línea o
* — Usar contenedores Docker

Las diferentes opciones de instalación se describen al comienzo de la primera parte.

## Sobre el autor

El curso está escrito por [Andrew Shitov](https://andrewshitov.com), quien sigue el desarrollo de Raku desde aproximadamente el año 2000 (cuando era conocido como Perl 6). Es autor de varios [libros sobre programación en Raku](https://andrewshitov.com/books). El material del curso se basa en la experiencia diaria, particularmente en contribuir a [The Weekly Challenge](https://perlweeklychallenge.org) y revisar las soluciones de otros participantes, así como en la experiencia obtenida al usar Raku como el lenguaje principal para el sitio web [Covid Observer](https://covid.observer).

## Contribuciones, términos de uso y comentarios

La creación del curso es apoyada por la subvención de [The Perl Foundation](https://www.perlfoundation.org). Puedes usar el curso para autoestudio o como un conjunto de materiales listos para enseñar a otros. El uso comercial en clases está permitido sin permiso. La publicación del curso como un producto separado debe ser negociada primero con el autor.

Los archivos fuente están disponibles en GitHub: [github.com/ash/raku-course](https://github.com/ash/raku-course). Siéntete libre de enviar una solicitud de extracción para corregir los posibles errores o erratas o crear un problema en GitHub si deseas discutir un tema más amplio. También puedes contactar al autor por [correo electrónico](mailto:andy@shitov.ru).

## Navegación del curso

← [Inicio](/es/) 
&nbsp;&nbsp;|&nbsp;&nbsp;
[¿Qué es Raku?](/es/essentials/what-is-raku) →

{% include languages.html %}
{% include translations.html %}
