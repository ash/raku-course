---
title: 'Решение: Твърде голямо'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
class TooBig is Exception {
    has $.value;
    has $.limit;

    method message {
        "Value $.value exceeds the limit of $.limit";
    }
}

my $limit = 50;

for 30, 99, 60 -> $value {
    TooBig.new(value => $value, limit => $limit).throw if $value > $limit;
    say "Value $value is within the limit";

    CATCH {
        when TooBig {
            say .message;
            say "Try a value up to {.limit}.";
        }
    }
}
```

🦋 Намерете програмата във файла [too-big.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/custom-exceptions/too-big.raku).

## Изход

```
Value 30 is within the limit
Value 99 exceeds the limit of 50
Try a value up to 50.
Value 60 exceeds the limit of 50
Try a value up to 50.
```

## Коментари

1. `TooBig is Exception` прави класа хвърляемо изключение. Той носи две парчета данни — `value` и `limit`, — а методът му `message` вплита и двете в съобщавания текст.

1. `.throw` повдига изключението, а `when TooBig` го съпоставя по тип. Обработващият прави повече от това да отпечата съобщението: той чете атрибута `limit` направо от прихванатия обект, за да даде полезна подсказка. Точно това е предимството на собственото изключение пред обикновения низ — обработващият получава структурирани данни, с които може да действа.

1. Изключението се хвърля **само** когато `$value > $limit`. За `30` не се повдига изключение и тялото на цикъла стига до своя `say`, отпечатвайки, че стойността е в рамките на границата. За `99` и `60` `throw` се задейства, така че този `say` се прескача и вместо това го обработва `CATCH`. Самото тяло на `for` е блокът, който `CATCH` пази, така че прихванатото изключение прекратява само текущата итерация — а после цикълът просто продължава със следващата стойност.

{% include nav.html %}
