---
title: 'Решение: Километри в мили'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
class Converter {
    method km-to-miles($km) {
        $km * 0.621;
    }
}

say Converter.km-to-miles(10);
```

🦋 Намерете програмата във файла [km-to-miles.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/class-methods/km-to-miles.raku).

## Изход

```
6.21
```

## Коментари

1. Преобразуването не зависи от конкретен обект, така че е написано като метод на класа и се извиква направо върху `Converter`.

1. Методът на класа пак може да приема параметри: тук получава броя километри и връща милите.

{% include nav.html %}
