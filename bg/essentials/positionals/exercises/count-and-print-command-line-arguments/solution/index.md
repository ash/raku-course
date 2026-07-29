---
title: 'Solution: Броене и принтиране на аргументите на командния ред'
---

{% include menu.html %}

В тази програма, `for` цикъл е добър избор.

## Код

```raku
for ^@*ARGS -> $n {
    say "{$n + 1}. @*ARGS[$n]";
}
```

🦋 Намерете програмата във файла [count-and-print-arguments.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/positionals/count-and-print-arguments.raku).

## Изход

Стартирайте програмата и потвърдете, че отпечатва аргументите и номерата на редовете:

```console
$ raku exercises/positionals/count-and-print-arguments.raku one two three four
1. one
2. two
3. three
4. four
```

## Дискусия

Тази програма използва няколко полезни трика. Първо, `for` цикълът преминава през [интервал, създаден с `^`](/bg/essentials/ranges/excluding-endpoints). Така че, интервалът започва от 0 и стига до (но не включва) стойността на `@*ARGS`. В този контекст, [той връща](/bg/essentials/positionals/arrays#size) дължината на масива.

Тъй като първият елемент на масива има индекс `0`, а задачата изисква да броим редовете от `1`, тази проста промяна се изчислява [вътре в кодов блок](/bg/essentials/strings/code-interpolation) в низ: `"{$n + 1} ..."`.

{% include nav.html %}