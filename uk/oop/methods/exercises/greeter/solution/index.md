---
title: 'Розв''язання: Обернене слово'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

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

🦋 Вихідний код можна знайти у файлі [greeter.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/methods/greeter.raku).

## Вивід

```
ukaR
```

## Коментарі

1. Метод `reversed` дістається власного `text` об'єкта через його аксесор `$.text` і викликає для нього вбудований `flip`, який повертає обернений рядок.

1. Метод викликано безпосередньо для щойно створеного об'єкта `Word`. Нічого не зберігається назад — `reversed` просто обчислює й повертає нове значення з атрибута.

1. Зверніть увагу, що всередині класу змінну можна читати напряму, не вдаючись до аксесора:

```raku
    method reversed {
        $!text.flip;
    }
```

{% include nav.html %}
