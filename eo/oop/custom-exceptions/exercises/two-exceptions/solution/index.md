---
title: 'Solvo: Du esceptotipoj'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
class TooSmall is Exception {
    method message { 'too small' }
}

class TooBig is Exception {
    method message { 'too big' }
}

for TooSmall, TooBig -> $type {
    {
        $type.new.throw;

        CATCH {
            when TooSmall { say 'small' }
            when TooBig   { say 'big' }
        }
    }
}
```

🦋 Vi povas trovi la fontkodon en la dosiero [two-exceptions.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/custom-exceptions/two-exceptions.raku).

## Eligo

```
small
big
```

## Komentoj

1. La buklo ĵetas `TooSmall` ĉe la unua paso kaj `TooBig` ĉe la dua, ĉiun ene de sia propra bloko kun sia propra `CATCH`.

1. La fazero `CATCH` havas branĉon `when` por ĉiu esceptotipo. Ĉe ĉiu paso, nur la branĉo kongrua kun la ĵetita tipo ruliĝas — do la unua paso presas `small` kaj la dua presas `big`. Tiel unu sola aro da trakteroj reagas malsame al malsamaj specoj de eraro.

{% include nav.html %}
