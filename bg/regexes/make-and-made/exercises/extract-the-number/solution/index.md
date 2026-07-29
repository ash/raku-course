---
title: 'Решение: Извлечете числото'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
grammar Weight {
    token TOP    { <number> 'kg' { make $<number>.Int } }
    token number { \d+ }
}

say Weight.parse('5kg').made;
```

🦋 Намерете програмата във файла [extract-the-number.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/make-and-made/extract-the-number.raku).

## Изход

```
5
```

## Коментари

1. Шаблонът съпоставя цифрите и буквалното `kg`, но вграденият блок съхранява само `$<number>.Int` — цялото число, без единицата.

1. `made` прочита тази стойност обратно: истинска `5`, готова за смятане, а не текстът `5kg`. Това е обичайната работа на `make` — да превърне съвпадението в чистата стойност, която всъщност искате.

{% include nav.html %}
