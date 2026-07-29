---
title: 'Solution: Перетворення вводу користувача у число'
---

{% include menu.html %}

Програма може бути такою простою:

## Код

```raku
my Int $n = prompt 'Enter a number: ';
say $n;
```

🦋 Ви можете знайти вихідний код у файлі [input-number.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/typed-variables/input-number.raku).

## Приклад

Запустіть її та введіть ціле число, позитивне або негативне:

```console
$ raku exercises/typed-variables/input-number.raku
Enter a number: -42
-42
```

## Коментарі

Як ми вже [бачили](/uk/essentials/typed-variables/allomorphs), повернене значення `prompt` є `IntStr`, яке можна призначити змінній типу `Int` без примусу.

Зверніть увагу, що програма завершиться з винятком, якщо ви введете рядок, який не можна перетворити на ціле число.

{% include nav.html %}