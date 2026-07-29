---
title: Загрузка во время выполнения
translations_gpt:
---

{% include menu.html %}

## Задача

Вам дан модуль `Greeting.rakumod`, который экспортирует подпрограмму `hello`:

```raku
unit module Greeting;

sub hello($name) is export {
    "Hello, $name!"
}
```

Загрузите этот модуль с помощью `require`, а не `use`, чтобы он подключался **во время
выполнения**. Поскольку `require` не импортирует имена автоматически, перечислите нужный
символ так: `require Greeting <&hello>;`. Затем вызовите `hello('Sam')` и напечатайте результат.

Чтобы показать, что даёт загрузка во время выполнения, поместите `require` внутрь `sub MAIN`
с флагом `--quiet` — так модуль будет загружаться *только* тогда, когда приветствие
действительно нужно. С `--quiet` программа печатает `Silence.` и вообще не обращается к модулю.

## Пример

Запущенная с модулем в пути поиска, программа печатает:

```console
$ raku -I. require-import.raku
Hello, Sam!

$ raku -I. require-import.raku --quiet
Silence.
```

## Решение

✅ [Посмотреть решение](solution)

{% include nav.html %}
