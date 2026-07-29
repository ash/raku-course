---
title: 'Solution: Підрахунок і друк аргументів командного рядка'
---

{% include menu.html %}

У цій програмі цикл `for` є гарним вибором.

## Код

```raku
for ^@*ARGS -> $n {
    say "{$n + 1}. @*ARGS[$n]";
}
```

🦋 Знайдіть програму у файлі [count-and-print-arguments.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/positionals/count-and-print-arguments.raku).

## Вивід

Запустіть програму і переконайтеся, що вона виводить аргументи та номери рядків:

```console
$ raku exercises/positionals/count-and-print-arguments.raku one two three four
1. one
2. two
3. three
4. four
```

## Обговорення

Ця програма використовує кілька корисних трюків. По-перше, цикл `for` проходить по [діапазону, створеному за допомогою `^`](/uk/essentials/ranges/excluding-endpoints). Таким чином, діапазон починається з 0 і йде до (але не включаючи) значення `@*ARGS`. У цьому контексті [він повертає](/uk/essentials/positionals/arrays#size) довжину масиву.

Оскільки перший елемент масиву має індекс `0`, а завдання вимагає, щоб ми рахували рядки з `1`, це просте зміщення обчислюється [всередині блоку коду](/uk/essentials/strings/code-interpolation) у рядку: `"{$n + 1} ..."`.

{% include nav.html %}