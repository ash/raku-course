---
title: 'Решение: Обърната дума'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
class Word {
    has $.text;

    method reversed {
        $.text.flip;
    }
}

say Word.new(text => 'Raku').reversed;
```

🦋 Намерете програмата във файла [greeter.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/methods/greeter.raku).

## Изход

```
ukaR
```

## Коментари

1. Методът `reversed` стига до собствения `text` на обекта през аксесора `$.text` и извиква вградения `flip` върху него, който връща низа обърнат.

1. Методът се извиква направо върху новосъздадения обект `Word`. Нищо не се записва обратно — `reversed` просто изчислява и връща нова стойност от атрибута.

1. Забележете, че вътре в класа можете да прочетете променливата направо, без да минавате през аксесора:

```raku
    method reversed {
        $!text.flip;
    }
```

{% include nav.html %}
