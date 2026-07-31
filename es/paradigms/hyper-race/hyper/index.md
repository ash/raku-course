---
title: map en paralelo con hyper
translations_gpt:
---

{% include menu.html %}

Llama a `.hyper` sobre una lista antes de un `map` o un `grep` y el trabajo se reparte entre varios hilos trabajadores, mientras que los resultados siguen volviendo en el **orden original**:

```raku
say (1..5).hyper.map(* * 2); # (2 4 6 8 10)
```

Esto se parece exactamente a un `map` corriente, y el resultado es idéntico; la única diferencia es que las duplicaciones pueden haberse calculado en núcleos distintos al mismo tiempo.

`.hyper` funciona con `grep` exactamente igual: cada elemento se comprueba en paralelo, y los que pasan siguen volviendo en su orden original:

```raku
say (1..10).hyper.grep(* %% 2); # (2 4 6 8 10)
```

Como `.hyper` preserva el orden, es un sustituto directo de un `map` o un `grep` lento: no hay que cambiar nada que dependa del orden de los resultados. El beneficio solo aparece cuando el trabajo de cada elemento es lo bastante grande como para compensar el coste de coordinar hilos; elevar un número al cuadrado es, en realidad, demasiado barato para que merezca la pena paralelizarlo. Para un trabajo genuinamente caro por elemento sobre una lista grande, `.hyper` puede convertir una espera larga en una corta al precio de una sola llamada a un método.

Una cosa que conviene tener presente: que el trabajo se reparta *de verdad* entre los núcleos es cosa del compilador. El lenguaje fija los resultados — y, para `.hyper`, su orden original —, pero no exige una ejecución realmente paralela. `.hyper` y `.race` **solicitan** paralelismo en lugar de exigirlo, así que un compilador dado puede ejecutarlos en un pool de hilos o puede procesar calladamente los elementos en secuencia. Tómalos como una oportunidad de acelerar, no como una garantía de ello.

Como el orden se conserva, las operaciones que *dependen* de él siguen saliendo bien. Aquí cada palabra se pasa a mayúsculas en paralelo y, aun así, las piezas se vuelven a unir en la frase en su secuencia original:

```raku
say <raku is fun>.hyper.map(*.uc).join(' '); # RAKU IS FUN
```

{% include nav.html %}
