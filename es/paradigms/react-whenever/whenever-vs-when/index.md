---
title: whenever y when
translations_gpt:
---

{% include menu.html %}

La forma de un bloque `react` puede resultarte familiar. Un bloque exterior que contiene varios bloques interiores, cada uno actuando sobre el tema `$_`, es exactamente como se escribe [`given`/`when`](/es/advanced/given-when). Si tuvieras una sola lectura de temperatura en lugar de un flujo entero de ellas, te ramificarías así:

```raku
given $temperature {
    when 18 { say 'cool' }
    when 21 { say 'warm' }
}
```

El parecido con `react`/`whenever` es real, pero los dos hacen trabajos muy distintos:

* **`given`/`when` maneja un valor, ahora mismo.** `given` fija `$_` a un solo valor; cada `when` lo comprueba (`$_ ~~ 18`), se ejecuta la **primera** coincidencia y el bloque termina. Es un condicional corriente y síncrono.
* **`react`/`whenever` maneja muchos valores, a lo largo del tiempo.** Un `whenever` no comprueba `$_` contra un patrón: se *suscribe* a un supply, y su cuerpo se ejecuta para **cada** valor que ese supply emita, cuando quiera que ese valor llegue. Todos los `whenever` están vivos a la vez, y `react` sigue bloqueando hasta que todos sus supplies han terminado.

Así que `when` pregunta «¿coincide este valor?», mientras que `whenever` dice «para cada valor que este flujo produzca alguna vez, haz esto». El mismo esqueleto, vidas muy distintas: una rama tomada una sola vez frente a una reacción que se ejecuta una y otra vez según llegan los eventos.

{% include nav.html %}
