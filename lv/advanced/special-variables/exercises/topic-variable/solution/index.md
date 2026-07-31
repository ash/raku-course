---
title: 'Risinājums: Tēmas mainīgais'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
for 'apple', 'fig', 'cherry' {
    say "$_ has {.chars} letters";
}
```

🦋 Atrodiet programmu failā [topic-variable.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/special-variables/topic-variable.raku).

## Izvade

```
apple has 5 letters
fig has 3 letters
cherry has 6 letters
```

## Komentāri

1. Cikls `for` tēmas mainīgo `$_` pēc kārtas uzstāda uz katru elementu, tāpēc bloks izpildās trīs reizes ar `$_`, kas vienāds ar `'apple'`, tad `'fig'`, tad `'cherry'`.

1. Virknes iekšienē `$_` interpolē pašreizējo vārdu, un izsaukums `.chars` ar punktu priekšā — saīsinājums no `$_.chars` — dod tā garumu. Abi atsaucas uz vienu un to pašu tēmu, un tieši tāpēc skaits vienmēr sakrīt ar vārdu rindā.

{% include nav.html %}
