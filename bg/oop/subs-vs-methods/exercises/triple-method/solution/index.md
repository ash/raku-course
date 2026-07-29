---
title: 'Решение: Утрояване като метод'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
class Number {
    has $.n;

    method triple {
        $.n * 3;
    }
}

say Number.new(n => 7).triple;
```

🦋 Намерете програмата във файла [triple-method.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/subs-vs-methods/triple-method.raku).

## Изход

```
21
```

## Коментари

1. Като метод `triple` принадлежи на обекта и работи със собственото `n` на обекта — нищо не се подава.

1. В сравнение с версията с подпрограма данните живеят в обекта, вместо да пристигат като аргумент. И двете дават `21`.

{% include nav.html %}
