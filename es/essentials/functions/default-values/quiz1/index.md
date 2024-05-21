---
title: Quiz — Definiendo valores predeterminados
---

{% include menu.html %}

¿Qué funciones están definidas correctamente?

## 1

Funciones con parámetros posicionales:

{:.quiz}
1 | sub p1($a = 3) {}
1 | sub p2($a, $b = 3) {}
0 | sub p4($a = 3, $b) {} | Todos los valores predeterminados deben estar al final de la lista de parámetros.
1 | sub p3($a = 3, $b = 4) {}

## 2 

Funciones con parámetros nombrados:

{:.quiz}
1 | sub n1(:$a = 3) {}
1 | sub n2(:$a, :$b = 3) {}
1 | sub n4(:$a = 3, :$b) {} | A diferencia de los parámetros posicionales, el orden de los nombrados no importa.
1 | sub n3(:$a = 3, :$b = 4) {}

{% include quiz.html %}

{% include nav.html %}