---
title: Gramatikas ir klases
translations_gpt:
---

{% include menu.html %}

Kad rakstāt `grammar`, Raku izveido kaut ko ļoti tuvu klasei. Marķieri ir tās metodes, un uz to attiecas visa [mantošanas](/lv/oop/inheritance) mašinērija no daļas par objektiem. Tāpēc viena gramatika var paplašināt citu ar `is`, gluži kā apakšklase:

```raku
grammar Base {
    token TOP      { <greeting> }
    token greeting { 'hi' }
}

grammar Loud is Base {
    token greeting { 'HI' }
}

say Loud.parse('HI').defined; # True
say Base.parse('hi').defined; # True
```

`Loud` manto `TOP` no `Base`, taču nodrošina savu `greeting`. Kad `Loud` parsē, tā `TOP` izsauc `<greeting>`, un tiek izmantots `Loud` pārrakstītais marķieris — tieši tā, kā uz objektiem darbojas pārrakstīta metode.

Tas padara gramatikas komponējamas. Var uzrakstīt vispārīgu gramatiku kādam formātam un pēc tam atvasināt specializētu versiju, kas maina tikai tos marķierus, kas atšķiras, pārējo nepārkopējot.

Pat `.parse`, ko nemitīgi izsaucat, nāk no šīs klases dabas: katra gramatika automātiski manto no iebūvēta bāzes tipa ar nosaukumu `Grammar`, kas nodrošina `.parse` (un tā daļējās sakritības radinieku `.subparse`). Jūs to nekad nerakstāt pats — to iegūstat par velti, gluži kā parasta klase manto metodes no savas vecākklases.

{% include nav.html %}
