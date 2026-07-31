---
title: 'Solvo: De du ĝis kvar ciferoj'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
say 'abc12345' ~~ / \d ** 2..4 /;
```

🦋 Vi povas trovi la fontkodon en la dosiero [two-to-four-digits.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/quantifiers/two-to-four-digits.raku).

## Eligo

```
｢1234｣
```

## Komentoj

1. `\d ** 2..4` kongruas kun du ĝis kvar ciferoj sinsekve.

1. La ĉeno havas kvin ciferojn disponeblajn, sed la intervalo limigas la kongruon al kvar, do la ŝablono prenas `1234` kaj lasas la finan `5`. Estante avida, ĝi prenas la plejmulton, kiun la intervalo permesas, anstataŭ la plej malmulton.

1. Avideco validas nur ene de unu sola kongruo — la motoro ankoraŭ haltas ĉe la **unua** loko, kie la ŝablono sukcesas. Eĉ se pli longa cifera sekvenco aperas poste en la ĉeno, ĝi neniam estas atingata:

    ```raku
    say 'abc123def6789012z' ~~ / \d ** 2..4 /;   # ｢123｣
    ```

    Ĉi tie `123` estas kongruita, kvankam la posta serio `6789012` estus pleniginta la tutan intervalon per `6789`. La plej maldekstra kongruo venkas.

{% include nav.html %}
