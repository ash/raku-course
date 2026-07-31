---
title: Skatiens uz priekšu
translations_gpt:
---

{% include menu.html %}

_Lūkošanās uz priekšu_ pārbauda, kas nāk tūlīt **aiz** pašreizējās pozīcijas. To raksta leņķa iekavās:

* `<?before …>` — izdodas, ja teksts priekšā sakrīt (pozitīva lūkošanās uz priekšu)
* `<!before …>` — izdodas, ja teksts priekšā **nesakrīt** (negatīva lūkošanās uz priekšu)

Pats apgalvojums nesakrīt ne ar vienu rakstzīmi; tas tikai pārbauda pozīciju. Piemēram, piemeklējiet skaitli tikai tad, kad tam seko vārds `dollars`:

```raku
say '100 dollars' ~~ / \d+ <?before ' dollars'> /; # ｢100｣
```

Sakritība ir tikai `100` — teksts ` dollars` tika pārbaudīts, bet nav iekļauts.

Tā kā lūkošanās uz priekšu tikai apgalvo, kas seko, tas pats skaitlis sakrīt vai nesakrīt atkarībā no valūtas aiz tā:

```raku
say so '100 euro'    ~~ / \d+ <?before ' euro'> /; # True
say so '100 dollars' ~~ / \d+ <?before ' euro'> /; # False
```

Cipari abās virknēs ir vienādi, taču apgalvojums pieņem `100` tikai tad, kad tālāk seko ` euro`.

Negatīvā forma noder gadījumam «… bet ne tad, kad tam seko …». Piemeklējiet `cat` tikai tad, kad tam **neseko** cipars:

```raku
say so 'cats' ~~ / cat <!before \d> /; # True
say so 'cat5' ~~ / cat <!before \d> /; # False
```

Virknē `cat5` lūkošanās uz priekšu tūlīt aiz `cat` ierauga ciparu, tāpēc negatīvais apgalvojums neizdodas un neizdodas visa sakritība.

{% include nav.html %}
