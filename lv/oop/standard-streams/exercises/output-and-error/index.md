---
title: Izvade un kļūdas
translations_gpt:
---

{% include menu.html %}

## Uzdevums

Programma ciklā saskaita skaitļu sarakstu `3, 5, 7`. Katrā apgriezienā nosūtiet pašreizējo uzkrāto summu uz standarta kļūdu plūsmu kā progresa paziņojumu, bet pēc cikla nosūtiet galīgo rezultātu uz standarta izvadi, izmantojot plūsmu turus tieši.

Šī nošķiršana ir svarīga: rezultātu var noķert vai padot tālāk pa cauruli, kamēr progresa paziņojumi paliek malā standarta kļūdu plūsmā.

## Piemērs

Palaižot programmu, ekrānā parādās abas plūsmas — vispirms uzkrātās summas, tad galīgais rezultāts:

```
running total: 3
running total: 8
running total: 15
15
```

Taču, ja standarta kļūdu plūsmu izmet, paliek tikai īstais rezultāts:

```
$ raku output-and-error.raku 2>/dev/null
15
```

## Risinājums

✅ [Skatīt risinājumu](solution)

{% include nav.html %}
