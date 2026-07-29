---
title: 'Решение: Преобразуване на температура'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
class Celsius {
    has $.degrees;

    method to-fahrenheit {
        $.degrees * 9 / 5 + 32;
    }
}

say Celsius.new(degrees => 100).to-fahrenheit;
```

🦋 Намерете програмата във файла [temperature.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/methods/temperature.raku).

## Изход

```
212
```

## Коментари

1. Методът работи със собствения атрибут `degrees` на обекта, така че формулата не се нуждае от подаден аргумент.

1. За `100` градуса по Целзий резултатът е `212` градуса по Фаренхайт.

{% include nav.html %}
