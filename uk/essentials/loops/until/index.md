---
title: until
---

{% include menu.html %}

Конструкція `until` є протилежною до `while`. Вона виконує блок коду, поки умова не стане `True` (або, іншими словами, поки вона є `False`).

Ось модифікована [програма з попередньої сторінки](../while), яка використовує `until` та нову умову:

```raku
my $x = 0;
until $x > 10 {
    $x = prompt 'Enter a number, which is not bigger than 10: ';
    say "You entered $x.";
}
say "$x is bigger than 10.";
```

Запустіть програму та перевірте результат:

```console
$ raku t.raku 
Enter a number, which is not bigger than 10: 10
You entered 10.
Enter a number, which is not bigger than 10: 4
You entered 4.
Enter a number, which is not bigger than 10: 1
You entered 1.
Enter a number, which is not bigger than 10: 20
You entered 20.
20 is bigger than 10.
```

## `until` проти `while`

Порівняйте еквівалентні програми з `while` і `until`:

```raku
while $x <= 10 { . . . }

until $x > 10 { . . . }
```

Як бачите, умови є запереченими версіями одна одної. У цьому сенсі, `while` і `until` знаходяться в таких же відносинах, як `if` і `unless`.

{% include nav.html %}