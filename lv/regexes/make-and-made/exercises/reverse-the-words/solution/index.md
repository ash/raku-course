---
title: 'Risinājums: Apgrieziet vārdu secību'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
grammar Phrase {
    token TOP  { <word> [ ' ' <word> ]* { make $<word>».made.join(' ') } }
    token word { \w+ { make $/.flip } }
}

say Phrase.parse('hello world').made;
```

🦋 Atrodiet programmu failā [reverse-the-words.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/make-and-made/reverse-the-words.raku).

## Izvade

```
olleh dlrow
```

## Komentāri

1. Katrs marķieris `word` izveido savu apgriezto tekstu: tā iekšējais bloks izpildās ikreiz, kad vārds sakrīt, un `make $/.flip` saglabā vārdu — `$/` ir pašreizējā sakritība — uzrakstītu no otra gala.

1. `TOP` piemeklē vārdus ar `<word> [ ' ' <word> ]*` — viens vārds, tad jebkurš skaits «atstarpe, tad vārds» — un tos apvieno. `$<word>` ir katras vārda sakritības saraksts; `».made` izvelk apgriezto tekstu, ko katra saglabājusi, un `.join(' ')` atkal uzbūvē frāzi ar atstarpēm.

1. Šī «elements, tad elements, tad elements…» forma ir pietiekami izplatīta, lai tai būtu saīsinājums: atdalītājs `%`. Rakstot `<word>+ % ' '`, tas nozīmē «viens vai vairāki `<word>`, atdalīti ar atstarpi», un tas piemeklē tieši tās pašas frāzes, ko `<word> [ ' ' <word> ]*`, tikai kompaktāk.

1. Tātad `make` un `made` šeit strādā divos līmeņos: mazie gabali izveido savas vērtības, un veselums tiek izveidots no tām. Nolasot `.made` uz rezultāta, iegūstam `olleh dlrow`.

{% include nav.html %}
