---
title: Unir hilos
translations_gpt:
---

{% include menu.html %}

Para esperar a que un hilo termine, llama a `.finish` sobre él (también se escribe `.join`). El programa principal se detiene ahí hasta que el hilo acaba:

```raku
my $t = Thread.start({ say 'in the thread' });
$t.finish;
say 'done';
```

Esto imprime:

```
in the thread
done
```

Como `.finish` espera, el mensaje del hilo tiene garantizado aparecer antes que `done`. Sin el `.finish`, el orden sería impredecible, y el programa podría incluso terminar antes de que el hilo tuviera ocasión de imprimir.

Cuando arrancas varios hilos, unes cada uno para asegurarte de que todos han terminado:

```raku
my $a = Thread.start({ 1 + 1 });
my $b = Thread.start({ 2 + 2 });
$a.finish;
$b.finish;
say 'both finished';
```

Los dos hilos corren de forma concurrente, y unir ambos antes del `say` final garantiza que `both finished` solo se imprima cuando estén realmente acabados. Unir es la manera de traer el trabajo concurrente de vuelta a un punto predecible de tu programa.

Como una llamada a un método sobre una [unión](/es/paradigms/junctions) se propaga a todos los valores que contiene, puedes unir varios hilos en una sola expresión. Combínalos con el operador `all`, `&`, y llama a `.finish` sobre la unión:

```raku
my $a = Thread.start({ 1 + 1 });
my $b = Thread.start({ 2 + 2 });

($a & $b).finish;
say 'both finished';
```

Llamar a `.finish` sobre `$a & $b` lo ejecuta sobre ambos hilos, así que el programa espera hasta que ninguno siga corriendo: el mismo resultado que unirlos uno a uno, pero se lee como «termina estos dos» y funciona para cualquier número de hilos unidos con `&`.

{% include nav.html %}
