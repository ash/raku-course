---
title: 'Solvo: Superjaroj'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
for 2000, 1900, 2024, 2023 -> $year {
    my $leap = $year %% 400 || ($year %% 4 && !($year %% 100));

    say "$year: { $leap ?? 'leap' !! 'common' }";
}
```

🦋 Vi povas trovi la fontkodon en la dosiero [leap-year.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/control-logic/leap-year.raku).

## Eligo

```
2000: leap
1900: common
2024: leap
2023: common
```

## Komentoj

1. La regulo legiĝas rekte kiel bulea esprimo: superjaro estas tiu, kiu estas
dividebla per 400, *aŭ* tiu, kiu estas dividebla per 4 sed ne per 100. `%%` estas
la testo pri divideblo.

1. `1900` estas dividebla per 100 sed ne per 400, do ĝi estas ordinara; `2000` estas
dividebla per 400, do ĝi estas superjaro.

1. La tipo [`Date`](/eo/advanced/date-and-time) de Raku jam konas ĉi tiun regulon. Ĝi
prezentas ĝin kiel `.is-leap-year` — metodon sur *data objekto*, do vi faras ajnan
daton en la jaro (ĉi tie la 1-an de januaro) kaj demandas ĝin:

    ```raku
    for 2000, 1900, 2024, 2023 -> $year {
        my $leap = Date.new($year, 1, 1).is-leap-year;
        say "$year: { $leap ?? 'leap' !! 'common' }";
    }
    ```

    La ekzerco, kompreneble, temas pri verki la regulon mem.

{% include nav.html %}
