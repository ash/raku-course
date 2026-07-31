---
title: 'Risinājums: Pāra skaitļu kvadrātu summa'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
say [+] (1..10).grep(* %% 2).map(* ** 2);
```

🦋 Atrodiet programmu failā [sum-even-squares.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/subs-functional/sum-even-squares.raku).

## Izvade

```
220
```

## Komentāri

1. Ķēde lasās no kreisās uz labo: `.grep(* %% 2)` patur pāra skaitļus,
`.map(* ** 2)` katru kāpina kvadrātā, un `[+]` kvadrātus reducē līdz to summai.

1. Pāra skaitļi `2 4 6 8 10` kvadrātā dod `4 16 36 64 100`, kas saskaitās par `220`.

1. Tos pašus soļus var uzrakstīt kā [plūsmas konveijeru](/lv/paradigms/feeds/feed-operator),
kurā `==>` katru rezultātu padod nākamajam posmam, — tā plūsma lasās no augšas uz
leju, nevis kā metožu ķēde:

    ```raku
    (1..10)
        ==> grep(* %% 2)
        ==> map(* ** 2)
        ==> sum()
        ==> say();
    ```

    Katrs `==>` savu kreisās puses sarakstu ievada nākamajā procedūrā, un noslēdzošais
    `==> say()` izdrukā summu `220`.

{% include nav.html %}
