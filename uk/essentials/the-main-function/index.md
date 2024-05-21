---
title: Функція MAIN
---

{% include menu.html %}

Програма на Raku не потребує жодних шаблонних ритуалів, тому ви можете одразу почати писати корисні інструкції. Ця частина програми, яка знаходиться на рівні вище будь-якого [блоку коду](/uk/essentials/code-blocks) (включаючи [функції](/uk/essentials/functions), наприклад), називається _mainline_.

Якщо програма містить функцію зі спеціальною назвою `MAIN`, Raku виконує цю функцію після компіляції всього коду та після виконання коду mainline.

```raku
say '1. Mainline code';

sub MAIN {
    say '3. MAIN called';
}

say '2. Also mainline';
```

Ця програма спочатку виконує верхньорівневі `say`, а потім викликає `MAIN`:

```console
$ raku t.raku
1. Mainline code
2. Also mainline
3. MAIN called
```

Звичайно, також можливо мати програму з функцією `MAIN` без іншого коду mainline.

{% include nav.html %}