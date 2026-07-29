---
title: 'Решение: Два типа изключения'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
class TooSmall is Exception {
    method message { 'too small' }
}

class TooBig is Exception {
    method message { 'too big' }
}

for TooSmall, TooBig -> $type {
    {
        $type.new.throw;

        CATCH {
            when TooSmall { say 'small' }
            when TooBig   { say 'big' }
        }
    }
}
```

🦋 Намерете програмата във файла [two-exceptions.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/custom-exceptions/two-exceptions.raku).

## Изход

```
small
big
```

## Коментари

1. Цикълът хвърля `TooSmall` при първото преминаване и `TooBig` при второто, всяко вътре в собствен блок със свой `CATCH`.

1. Фазерът `CATCH` има по един клон `when` за всеки тип изключение. При всяко преминаване се изпълнява само клонът, съвпадащ с хвърления тип — така първото преминаване отпечатва `small`, а второто `big`. Ето как един-единствен набор от обработващи реагира различно на различни видове грешки.

{% include nav.html %}
