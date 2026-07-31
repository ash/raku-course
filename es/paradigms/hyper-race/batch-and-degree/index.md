---
title: 'Ajustar con :batch y :degree'
translations_gpt:
---

{% include menu.html %}

Tanto `.hyper` como `.race` aceptan dos adverbios que controlan *cómo* se reparte el trabajo entre los hilos: `:degree` y `:batch`. Rara vez los necesitas, pero son a lo que recurres cuando ajustas para ganar velocidad.

## `:degree` — cuántos trabajadores

`:degree` fija cuántos hilos trabajadores corren al mismo tiempo:

```raku
say (1..5).hyper(:degree(2)).map(*²); # (1 4 9 16 25)
```

Por omisión, el grado se acerca al número de núcleos de CPU que tiene la máquina: en una máquina de ocho núcleos es `7`, dejando un núcleo para el programa principal. Subirlo muy por encima del número de núcleos rara vez ayuda, ya que no hay más núcleos donde correr, y la coordinación extra puede incluso frenar las cosas.

## `:batch` — cuántos elementos de una vez

`:batch` fija cuántos elementos toma cada trabajador de una tacada antes de volver a por más:

```raku
say (1..6).hyper(:batch(2)).map(*²); # (1 4 9 16 25 36)
```

El lote por omisión es `64`, y el tamaño es un compromiso:

* Un lote **grande** significa menos ir y venir entre los trabajadores y el planificador — menos sobrecarga, cosa buena cuando todos los elementos cuestan más o menos lo mismo.
* Un lote **pequeño** reparte el trabajo de manera más pareja cuando unos elementos son mucho más caros que otros, así que ningún trabajador se queda atascado con todos los lentos, a costa de más coordinación.

Puedes fijar ambos a la vez, en `.race` igual que en `.hyper`:

```raku
say (1..6).race(:degree(2), :batch(3)).map(*²).sum; # 91
```

<div style="font-size: 85%; opacity: .8;">

Si sientes curiosidad por saber cuáles son en realidad los valores por omisión, puedes atisbarlos a través de las tripas de Rakudo. Ten en cuenta que esto lee un atributo *privado*: no es una API estable, y los números dependen de tu máquina.

```raku
my $h := (1..10).hyper;
say $h.^attributes.first(*.name.contains('config')).get_value($h).raku;
# HyperConfiguration.new(batch => 64, degree => 7)
```

Aquí `batch` es el valor fijo por omisión `64`, mientras que `degree` es `7`: uno menos que los ocho núcleos de esta máquina.

</div>

## Siguen siendo solo indicaciones

Igual que `.hyper` y `.race` en sí, estos adverbios **solicitan** un reparto concreto en lugar de garantizarlo. Un compilador es libre de respetarlos, ajustarlos o ignorarlos por completo, así que trata `:batch` y `:degree` como mandos que probar al ajustar, no como promesas sobre cómo se ejecutará exactamente el trabajo.

{% include nav.html %}
