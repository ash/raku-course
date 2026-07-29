---
title: 'Solution: Периметр прямокутника'
---

{% include menu.html %}

Ця програма повинна мати можливість приймати один або два аргументи командного рядка. У цьому рішенні показано новий трюк. Значення за замовчуванням для другої змінної встановлюється на значення першої змінної: `sub MAIN($a, $b = $a)`. Отже, замість створення двох мультифункцій, ми маємо загальну функцію, яка встановлює розмір другої сторони, якщо фігура є квадратом.

## Код

Ось розв'язок:

```raku
sub MAIN($a, $b = $a) {
    my $perimeter = 2 * ($a + $b);

    my $shape = $a == $b ?? 'square' !! 'rectangle';
    say "The perimeter of a $shape is $perimeter.";
}
```

🦋 Знайдіть програму у файлі [perimeter.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/the-main-function/perimeter.raku).

## Вивід

Спробуйте різні вхідні значення, щоб перевірити як квадрати, так і прямокутники.

```console
$ raku exercises/the-main-function/perimeter.raku 1    
The perimeter of a square is 4.

$ raku exercises/the-main-function/perimeter.raku 1 2
The perimeter of a rectangle is 6.
```

Зверніть увагу, що існує третій випадок, який також слід протестувати. Якщо передаються два однакові числа, програма повинна все одно розуміти, що це був квадрат:

```console
$ raku exercises/the-main-function/perimeter.raku 2 2
The perimeter of a square is 8.
```

{% include nav.html %}