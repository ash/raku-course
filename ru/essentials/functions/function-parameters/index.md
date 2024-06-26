---
title: Параметры функции
---

{% include menu.html %}

Пора передать данные в функцию. Она может принимать параметры, перечисленные в скобках сразу после имени функции.

```raku
sub greet($name) {
    say "Hello, $name!";
}
```

Теперь вы можете использовать функцию и передавать ей разные аргументы:

```raku
greet('Алла');
greet('Карл');
```

Два вызова одной и той же функции теперь дадут разные результаты:

```console
$ raku t.raku
Hello, Алла!
Hello, Карл!
```

%%tipblock

## Параметр или аргумент

Эти термины часто используются взаимозаменяемо. Они оба относятся к «одному и тому же», но рассматриваются с разных точек зрения.

* Параметр — это то, что ожидает функция.
* Аргумент — это то, что вы передаете функции.

В приведенном выше примере `$name` является параметром функции, а `'Алла'` и `'Карл'` — ее аргументами.

%%/tipblock

## Больше параметров

Функция может принимать более одного параметра. В этом случае перечислите их все через запятую:

```raku
sub add($x, $y) {
    say $x + $y;
}

add(10, 20); # 30
```

## Без параметров

Это допустимый случай, когда функция вообще не принимает параметры. В этом случае вы можете либо добавить пустые скобки, либо полностью их опустить, как мы сделали в [начале этого раздела](../).

```raku
sub greet() {
    say 'Hello, World!';
}

greet();
```

## Сигнатура

Список параметров функции называется _сигнатурой_.

{% include nav.html %}