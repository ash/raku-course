---
title: 'Solution: Използвайте конвертора'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

Програмата, `temperature.raku`:

```raku
use Temperature;

sub MAIN($celsius) {
    say c-to-f($celsius);
}
```

🦋 Можете да намерите двата файла с изходния код в директорията [exercises/advanced/modules-basics/use-temperature](https://github.com/ash/raku-course/tree/master/exercises/advanced/modules-basics/use-temperature).

## Изход

```console
$ raku -I. temperature.raku 100
212
```

## Коментари

1. `use Temperature` зарежда модула и импортира експортираната подпрограма `c-to-f`, така че програмата може да я извика директно.

1. `sub MAIN($celsius)` получава аргумента от командния ред, така че температурата за преобразуване се избира при стартиране на програмата, а не е твърдо кодирана. При стартиране без аргумент Raku автоматично отпечатва съобщение за употреба.

1. Модулът трябва да бъде достъпен, затова програмата се стартира с `-I.`, така че Raku да търси `Temperature.rakumod` в текущата директория. Преобразуването на `100` °C дава `212` °F.

{% include nav.html %}
