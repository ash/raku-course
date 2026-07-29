---
title: Вправа «Завантаження під час виконання»
translations_gpt:
---

{% include menu.html %}

## Завдання

Вам дано модуль `Greeting.rakumod`, який експортує підпрограму `hello`:

```raku
unit module Greeting;

sub hello($name) is export {
    "Hello, $name!"
}
```

Завантажте цей модуль через `require` замість `use`, щоб його було внесено під **час виконання**. Оскільки `require` не імпортує імен автоматично, перелічіть потрібний символ через `require Greeting <&hello>;`. Потім викличте `hello('Sam')` і виведіть результат.

Щоб показати, що дає завантаження під час виконання, покладіть `require` усередину `sub MAIN` із прапорцем `--quiet`, щоб модуль завантажувався *лише* тоді, коли привітання справді потрібне. З `--quiet` програма виводить `Silence.` і взагалі не торкається модуля.

## Приклад

Запущена з модулем на шляху пошуку, програма виводить:

```console
$ raku -I. require-import.raku
Hello, Sam!

$ raku -I. require-import.raku --quiet
Silence.
```

## Рішення

✅ [Дивіться рішення](solution)

{% include nav.html %}
