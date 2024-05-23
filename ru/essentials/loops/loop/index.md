---
title: loop
---

{% include menu.html %}

Оператор `loop` в Raku имеет много общего с традиционными циклами в языке программирования C и его родственниках. Он принимает три выражения: инициализатор, проверку и выражение для изменения переменной цикла. Тело цикла выполняется многократно, пока проверка остается `True`.

```raku
loop (my $c = 0; $c < 5; $c++) {
    say "Текущее значение счетчика: $c.";
}
```

Здесь `++` — это постфиксный оператор, который увеличивает свой аргумент на 1. Мы рассмотрим больше операторов во второй части курса.

Программа выполняет тело цикла пять раз.

```console
$ raku t.raku
Текущее значение счетчика: 0.
Текущее значение счетчика: 1.
Текущее значение счетчика: 2.
Текущее значение счетчика: 3.
Текущее значение счетчика: 4.
```

Некоторые или даже все выражения в заголовке `loop` могут быть опущены. Например, вот та же программа:

```raku
my $c = 0;
loop (; $c < 5;) {
    say "Текущее значение счетчика: $c.";
    $c++;
}
```

## * * *

Циклы `loop` являются, вероятно, наименее используемыми циклами в Raku. Их можно найти, например, в автоматическом переводчике с C на Raku. Однако в Raku есть более удобные циклы, такие как `for`, которые мы рассмотрим очень скоро.

{% include nav.html %}