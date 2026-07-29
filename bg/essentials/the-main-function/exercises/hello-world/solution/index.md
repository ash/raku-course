---
title: 'Solution: Здравей, свят!'
---

{% include menu.html %}

След дълъг път през курса, трябваше отново да се върнем към тази програма, тъй като току-що научихме новия начин за писане на програми на Raku.

## Код 1

```raku
sub MAIN() {
    say 'Hello, World!';
}
```

🦋 Намерете програмата във файла [hello-world.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/the-main-function/hello-world.raku).

## Код 2

```raku
unit sub MAIN;
say 'Hello, World!';
```

🦋 Намерете програмата във файла [hello-world-unit.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/the-main-function/hello-world-unit.raku).

## Пример

Стартирайте която и да е програма:

```console
$ raku exercises/the-main-function/hello-world.raku
Hello, World!

$ raku exercises/the-main-function/hello-world-unit.raku
Hello, World!
```

{% include nav.html %}