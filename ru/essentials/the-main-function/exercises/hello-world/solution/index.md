---
title: 'Решение: Привет, мир!'
---

{% include menu.html %}

После долгого пути через курс, нам пришлось вернуться к этой программе снова, так как мы только что узнали новый способ написания программ на Raku.

## Код 1

```raku
sub MAIN() {
    say 'Hello, World!';
}
```

🦋 Найдите программу в файле [hello-world.raku](https://github.com/ash/raku-course/blob/master/exercises/the-main-function/hello-world.raku).

## Код 2

```raku
unit sub MAIN;
say 'Hello, World!';
```

🦋 Найдите программу в файле [hello-world-unit.raku](https://github.com/ash/raku-course/blob/master/exercises/the-main-function/hello-world-unit.raku).

## Пример

Запустите любую из программ:

```console
$ raku exercises/the-main-function/hello-world.raku
Hello, World!

$ raku exercises/the-main-function/hello-world-unit.raku
Hello, World!
```

{% include nav.html %}