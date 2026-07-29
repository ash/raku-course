---
title: 'Solution: Потърсете символ'
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

Програмата, `lookup.raku`:

```raku
use Circle;

say Circle::{'$pi'};
```

🦋 Можете да намерите пълния код във файла [exercises/advanced/module-introspection/lookup-symbol](https://github.com/ash/raku-course/tree/master/exercises/advanced/module-introspection/lookup-symbol).

## Резултат

```console
$ raku -I. lookup.raku
3.14
```

## Коментари

1. `Circle::` е стешът на модула, а използването на име като ключ — `Circle::{'$pi'}` — извлича съхранената под него стойност. Ключът трябва да включва сигила, точно както изброените имена.

1. Това достига същата стойност като квалифицираната `$Circle::pi`, но тъй като името е обикновен низ, то може да бъде изчислено по време на изпълнение, вместо да бъде записано в изходния код.

{% include nav.html %}
