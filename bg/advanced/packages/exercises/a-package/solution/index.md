---
title: 'Solution: Пакет'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
package Temperature {
    our $freezing = 0;
    our sub fahrenheit($c) { $c * 9/5 + 32 }
}

say $Temperature::freezing;
say Temperature::fahrenheit(100);
```

🦋 Можете да намерите изходния код във файла [a-package.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/packages/a-package.raku).

## Изход

```
0
212
```

## Коментари

1. И променливата, и подпрограмата са декларирани с `our`, така че и двете стават част от пространството от имена `Temperature` и са достъпни отвън.

1. Променливата се достъпва като `$Temperature::freezing` — сигил, име на пакета, след това име на променливата — докато подпрограмата се извиква като `Temperature::fahrenheit(100)`. Преобразуването на `100` дава `100 * 9/5 + 32`, което е `212`.

1. Обикновеният `package` предоставя само пространството от имена. За преизползваема библиотека бихме използвали `module` вместо това — а след като обектите влязат в играта, `class` — но механизмът на пространството от имена е един и същ във всеки случай.

{% include nav.html %}
