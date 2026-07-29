---
title: 'Розв''язання: Завантаження під час виконання'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

Програма `require-import.raku`:

```raku
sub MAIN(Bool :$quiet) {
    if $quiet {
        say 'Silence.';
    }
    else {
        require Greeting <&hello>;
        say hello('Sam');
    }
}
```

🦋 Обидва файли з вихідним кодом можна знайти в каталозі [exercises/advanced/modules-basics/require-at-runtime](https://github.com/ash/raku-course/tree/master/exercises/advanced/modules-basics/require-at-runtime).

## Вивід

```console
$ raku -I. require-import.raku
Hello, Sam!

$ raku -I. require-import.raku --quiet
Silence.
```

## Коментарі

1. `require` завантажує модуль під час виконання, а не під час компіляції. Сам по собі він нічого не імпортує, — саме тому голий `hello` був би невідомим.

1. Список `<&hello>` каже `require` імпортувати цей один символ, тож після цього оператора `hello('Sam')` можна викликати напряму, отримуючи `Hello, Sam!`.

1. Саме *для цього* й існує `require`: оскільки він виконується під час виконання, він може стояти всередині `if`. Коли задано `--quiet`, ця гілка пропускається, і модуль ніколи не завантажується — чого `use`, що працює під час компіляції, уникнути б не зміг.

{% include nav.html %}
