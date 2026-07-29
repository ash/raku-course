---
title: 'Решение: Текущ акумулатор'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
sub make-accumulator($start) {
    my $total = $start;
    return -> $amount { $total += $amount };
}

my $acc = make-accumulator(100);

say $acc(10);
say $acc(25);
say $acc(-5);
```

🦋 Намерете програмата във файла [accumulator.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/subs-functional/accumulator.raku).

## Изход

```
110
135
130
```

## Коментари

1. Върнатият блок *се затваря* върху `$total`: тази променлива живее между извикванията,
така че всяко извикване помни сумата от предишното.

1. `$total += $amount` едновременно обновява текущата сума и я връща, а точно това
отпечатва всяко `say`: `110`, после `135`, после `130`.

1. Друг вариант държи сумата вътре в самия блок, в променлива `state`. За разлика от
обикновената `my`, променливата `state` се инициализира само веднъж — при първото
изпълнение на блока — и после запазва стойността си при следващите извиквания:

    ```raku
    sub make-accumulator($start) {
        return -> $amount { state $total = $start; $total += $amount };
    }

    my $acc = make-accumulator(100);
    say $acc(10);
    say $acc(25);
    say $acc(-5);
    ```

    Всяко извикване на `make-accumulator` дава нов блок със собствена `state $total`, така
    че отделните акумулатори остават независими — а затварянето върху `$start` продължава
    да доставя на всеки собствената му начална стойност.

{% include nav.html %}
