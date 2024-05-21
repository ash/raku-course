---
title: Quiz — Parámetros de función
---

{% include menu.html %}

Elige aquellas opciones donde la firma de la función es correcta.

{:.quiz}
1 | sub f($x) {. . .}
1 | sub f() {. . .} | No tener parámetros es una situación válida.
1 | sub f {. . .} | Los paréntesis no son necesarios aquí.
0 | sub f $x {. . .} | Pero son necesarios si hay parámetros.
1 | sub f($x, $y) {. . .}
0 | sub f($x $y) {. . .} | Los parámetros son una lista separada por comas.
1 | sub f($x,$y) {. . .} | Depende de ti poner o omitir espacio entre los parámetros.
1 | sub f($y, $x) {. . .} | Los parámetros pueden tener cualquier nombre en cualquier orden.
0 | sub f ($x), ($y) {. . .} | Sintaxis inexistente.

{% include quiz.html %}

{% include nav.html %}