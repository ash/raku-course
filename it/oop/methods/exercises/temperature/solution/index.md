---
title: 'Soluzione: Conversione di temperatura'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
class Celsius {
    has $.degrees;

    method to-fahrenheit {
        $.degrees * 9 / 5 + 32;
    }
}

say Celsius.new(degrees => 100).to-fahrenheit;
```

🦋 Trova il programma nel file [temperature.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/methods/temperature.raku).

## Output

```
212
```

## Commenti

1. Il metodo lavora con l'attributo `degrees` dell'oggetto stesso, quindi la formula non ha bisogno di alcun argomento in ingresso.

1. Per `100` gradi Celsius il risultato è `212` gradi Fahrenheit.

{% include nav.html %}
