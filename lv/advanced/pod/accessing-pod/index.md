---
title: Piekļuve Pod datiem
translations_gpt:
---

{% include menu.html %}

Bez atveidošanas programma savu Pod var nolasīt **no iekšpuses**, kamēr tā darbojas. Speciālais mainīgais `$=pod` satur pašreizējā faila Pod kā bloku objektu sarakstu, tāpēc programma var izpētīt savu dokumentāciju:

```raku
=begin pod
=head1 Hello
A paragraph.
=end pod

say $=pod.elems;      # 1
say $=pod[0].name;    # pod
```

`$=pod` šeit ir viens elements — bloks `pod` —, un tajā var ieiet, lai nolasītu virsrakstus, rindkopas un punktus kā datus. Tieši uz to paļaujas rīki, kas ģenerē dokumentāciju vai pārbauda, ka tā ir klāt. Vai atveidota ar `--doc`, vai nolasīta caur `$=pod`, dokumentācija ir pilntiesīga programmas daļa, nevis komentārs, kas jānomet.

{% include nav.html %}
