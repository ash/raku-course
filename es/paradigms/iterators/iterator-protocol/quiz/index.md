---
title: Quiz — El protocolo de iterador
translations_gpt:
---

{% include menu.html %}

Cuando a un iterador no le quedan valores que dar, ¿qué devuelve `pull-one` y cómo se comprueba?

{:.quiz}
1 | `IterationEnd`, comprobado con `=:=`
0 | `Nil`, comprobado con `.defined`
0 | una lista vacía `()`, comprobada con `==`
0 | `0`, comprobado con `=:=`

{% include quiz.html %}

<div class="extended-explanation">

Un iterador agotado devuelve el objeto centinela `IterationEnd`. Como es un único objeto compartido, se comprueba por identidad con `=:=` (la prueba del *mismo objeto*), no por valor ni por definición. Un bucle `for` usa exactamente esta comprobación para saber cuándo parar.

</div>

{% include nav.html %}
