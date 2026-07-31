---
title: Quiz — batch y degree
translations_gpt:
---

{% include menu.html %}

En `(1..1000).hyper(:degree(4), :batch(50))`, ¿qué controla el `:batch(50)`?

{:.quiz}
1 | Cuántos elementos procesa cada trabajador de una tacada antes de ir a por más
0 | Cuántos hilos trabajadores corren al mismo tiempo
0 | Cuántos elementos puede procesar la tubería entera
0 | El número de núcleos de CPU que el programa puede usar

{% include quiz.html %}

<div class="extended-explanation">

`:batch` es el **tamaño del trozo**: cuántos elementos toma un trabajador por turno. El número de trabajadores es `:degree` (aquí `4`). Un lote mayor recorta la sobrecarga de coordinación; uno menor equilibra mejor el trabajo desigual. Ambos son indicaciones que el compilador puede ajustar o ignorar.

</div>

{% include nav.html %}
