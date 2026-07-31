---
title: 'Risinājums: Izgūt datu struktūru'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my @data = 'Raku', [1, 2, 3], (key => 'value');

dd @data;
say "Structure: { @data.raku }";
```

🦋 Atrodiet programmu failā [dump-the-structure.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/dd/dump-the-structure.raku).

## Izvade

```
["Raku", [1, 2, 3], :key("value")]
Structure: ["Raku", [1, 2, 3], :key("value")]
```

## Komentāri

1. `dd @data` izdrukā masīva satura kodam līdzīgu atveidojumu. Tas aiziet uz standarta kļūdu plūsmu.

1. Metode `.raku` atgriež to pašu atveidojumu kā virkni, kas pēc tam ar koda interpolāciju tiek iestrādāta parastā paziņojumā un ar `say` izdrukāta standarta izvadē.

1. Abas rindas šeit izskatās vienādas, taču tās ceļo pa dažādām izvades plūsmām: pirmā nāk no `dd` (standarta kļūdas), otrā no `say` (standarta izvade). Salīdziniet:

```console
$ raku t.raku > /dev/null
["Raku", [1, 2, 3], :key("value")]

$ raku t.raku 2&> /dev/null
Structure: ["Raku", [1, 2, 3], :key("value")]
```

{% include nav.html %}
