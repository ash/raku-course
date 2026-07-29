---
title: Заредете по време на изпълнение
translations_gpt:
---

{% include menu.html %}

## Задача

Даден ви е модул `Greeting.rakumod`, който експортира подпрограма `hello`:

```raku
unit module Greeting;

sub hello($name) is export {
    "Hello, $name!"
}
```

Заредете този модул с `require` вместо `use`, така че да бъде внесен по **време на изпълнение**. Тъй като `require` не импортира имена автоматично, посочете символа, който искате, с `require Greeting <&hello>;`. След това извикайте `hello('Sam')` и отпечатайте резултата.

За да покажете какво ви дава зареждането по време на изпълнение, поставете `require` вътре в `sub MAIN` с флаг `--quiet`, така че модулът да се зарежда *само* когато поздрав наистина е необходим. С `--quiet` програмата отпечатва `Silence.` и изобщо не докосва модула.

## Пример

При стартиране с модула в пътя за търсене, програмата отпечатва:

```console
$ raku -I. require-import.raku
Hello, Sam!

$ raku -I. require-import.raku --quiet
Silence.
```

## Решение

✅ [Вижте решението](solution)

{% include nav.html %}
