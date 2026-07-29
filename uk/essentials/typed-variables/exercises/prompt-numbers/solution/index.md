---
title: 'Solution: Дослідження результату `prompt` — Числа'
---

{% include menu.html %}

## Код

Ось повна програма, яка розв'язує проблему і виводить як введене значення, так і його тип.

```raku
my $n = prompt 'Enter a number: ';
say $n;
say $n.WHAT;
```

🦋 Ви можете знайти вихідний код у файлі [prompt-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/typed-variables/prompt-numbers.raku).

## Тестові запуски

Запустіть програму кілька разів і введіть числа різних типів.

### Цілі числа

Спробуємо спочатку цілі числа, як позитивні, так і негативні.

```console
$ raku exercises/what/prompt-numbers.raku
Enter a number: 10
10
(IntStr)
```

Тип результату — `IntStr`. Це вбудований тип, який має властивості як `Int`, так і `Str`.

### Раціональні числа

Тепер спробуємо раціональне число. Пам'ятайте, що в Raku, запис з десятковою крапкою створює число типу `Rat`, а не число з плаваючою комою.

```console
$ raku exercises/what/prompt-numbers.raku
Enter a number: 3.14
3.14
(RatStr)
```

Цього разу програма каже, що тип даних у `$n` — `RatStr`, що означає комбінований тип як `Rat`, так і `Str`.

### Числа з плаваючою комою

Нарешті, спробуйте число в науковій нотації. Ви повинні вже здогадатися про результат.

```console
$ raku exercises/what/prompt-numbers.raku
Enter a number: 5e-14
5e-14
(NumStr)
```

Дійсно, нове значення має тип `NumStr`.

{% include nav.html %}