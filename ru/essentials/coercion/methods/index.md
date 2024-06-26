---
title: Преобразование типов с использованием методов приведения типов
---

{% include menu.html %}

Чтобы преобразовать, или _привести_ тип, вызовите метод с именем типа данных. Например, чтобы преобразовать строку в целое число:

```raku
my $howmany = '42';
my $n = $howmany.Int;
say $n;
```

Во многих случаях вам не нужно явно преобразовывать значения, так как Raku делает это за вас. Следующий код работает корректно и предсказуемо:

```raku
my $a = '10';
my $b = '20';
my $c = $a + $b;
say "The result is $c."; # The result is 30.
```

Две переменные, `$a` и `$b`, содержат строки, но они используются в арифметическом выражении с `+`. В этот момент обе строки преобразуются в целые числа, и таким образом `$c` также становится целым числом. Переменная, содержащая целое число, интерполируется в строку в последней строке, где Raku выполняет необходимые операции, чтобы представить число как последовательность цифр.

{% include nav.html %}