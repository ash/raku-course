---
title: 'Solution: Заредете по време на изпълнение'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

Програмата, `require-import.raku`:

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

🦋 Можете да намерите двата файла с изходния код в директорията [exercises/advanced/modules-basics/require-at-runtime](https://github.com/ash/raku-course/tree/master/exercises/advanced/modules-basics/require-at-runtime).

## Изход

```console
$ raku -I. require-import.raku
Hello, Sam!

$ raku -I. require-import.raku --quiet
Silence.
```

## Коментари

1. `require` зарежда модула по време на изпълнение, а не по време на компилация. Сам по себе си не импортира нищо, затова самостоятелно `hello` би било неизвестно.

1. Списъкът `<&hello>` казва на `require` да импортира този един символ, така че след оператора `hello('Sam')` може да бъде извикано директно, давайки `Hello, Sam!`.

1. Точно за това е `require`: тъй като работи по време на изпълнение, може да стои вътре в `if`. Когато е подаден `--quiet`, този клон се прескача и модулът никога не се зарежда — нещо, което `use` по време на компилация не би могъл да избегне.

{% include nav.html %}
