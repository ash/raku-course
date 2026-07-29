---
title: 'Solution: Цифрові сходи'
---

{% include menu.html %}

Програма використовує два цикли та два діапазони.

## Код

Ось одне з можливих рішень:

```raku
my $size = prompt 'Enter the size: ';

for 1..$size -> $n {
    .print for 1..$n;
    print "\n";
}
```

🦋 Знайдіть програму у файлі [digital-stairs.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/loops/digital-stairs.raku).

## Вивід

Запустіть програму та введіть розмір структури:

```console
$ raku exercises/loops/digital-stairs.raku
Enter the size: 7
1
12
123
1234
12345
123456
1234567
```

## Коментар

Зверніть увагу, як друкується поточна цифра:

```raku
.print for 1..$n;
```

Як і у випадку з `say`, рутину `print` можна викликати як метод. У цьому випадку вона викликається на [змінній теми](/uk/essentials/loops/topic) `$_`.

{% include nav.html %}