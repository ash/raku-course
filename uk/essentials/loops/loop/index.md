---
title: loop
---

{% include menu.html %}

Оператор `loop` в Raku має багато спільного з традиційними циклами в мовах програмування C та її родичів. Він приймає три вирази: ініціалізатор, тест та вираз для модифікації змінної циклу. Тіло циклу виконується повторно, поки тест залишається `True`.

```raku
loop (my $c = 0; $c < 5; $c++) {
    say "Поточне значення лічильника: $c.";
}
```

Тут, `++` є постфіксним оператором, який збільшує свій аргумент на 1. Ми розглянемо більше операторів у другій частині курсу.

Програма виконує тіло циклу п'ять разів.

```console
$ raku t.raku
Поточне значення лічильника: 0.
Поточне значення лічильника: 1.
Поточне значення лічильника: 2.
Поточне значення лічильника: 3.
Поточне значення лічильника: 4.
```

Деякі або навіть всі вирази в заголовку `loop` можуть бути пропущені. Наприклад, ось та сама програма:

```raku
my $c = 0;
loop (; $c < 5;) {
    say "Поточне значення лічильника: $c.";
    $c++;
}
```

## * * *

Цикли `loop`, ймовірно, найменш використовувані цикли в Raku. Їх можна знайти, наприклад, в автоматизованому перекладачі з C на Raku. У Raku, однак, є зручніші цикли, такі як `for`, які ми розглянемо дуже скоро.

{% include nav.html %}