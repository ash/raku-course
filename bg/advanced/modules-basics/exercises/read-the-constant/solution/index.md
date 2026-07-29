---
title: 'Solution: Прочетете константата'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

Програмата, `read-pi.raku`:

```raku
need Circle;

say $Circle::pi;
```

🦋 Можете да намерите двата файла с изходния код в директорията [exercises/advanced/modules-basics/read-the-constant](https://github.com/ash/raku-course/tree/master/exercises/advanced/modules-basics/read-the-constant).

## Изход

```console
$ raku -I. read-pi.raku
3.14
```

## Коментари

1. `need Circle` зарежда модула, но не импортира никакви имена, така че самостоятелно `$pi` не би било разпознато.

1. `our` променливата се достига чрез името на модула, записана като `$Circle::pi`.

{% include nav.html %}
