---
title: 'Розв''язання: Прапорець командного рядка'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
sub MAIN(Bool :$shout = False) {
    say $shout ?? 'HELLO' !! 'hello';
}
```

🦋 Вихідний код можна знайти у файлі [boolean-flag.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/more-on-main/boolean-flag.raku).

## Вивід

```console
$ raku boolean-flag.raku
hello

$ raku boolean-flag.raku --shout
HELLO
```

## Коментарі

1. Іменований параметр типу `Bool` стає прапорцем: передача `--shout` встановлює `$shout` у `True`, а його пропуск лишає типове `False`.

1. Далі тернарний оператор виводить відповідно `HELLO` або `hello`. На відміну від опції `--name=value`, прапорець не бере значення — важить сама його присутність.

{% include nav.html %}
