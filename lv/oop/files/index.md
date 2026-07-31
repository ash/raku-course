---
title: Darbs ar failiem
translations_gpt:
---

{% include menu.html %}

Vienkāršākais veids, kā strādāt ar failu, ir nolasīt vai ierakstīt to visu uzreiz.

Rutīna `spurt` ieraksta virkni failā, izveidojot failu (vai aizstājot tā saturu, ja tas jau eksistē):

```raku
spurt 'greeting.txt', "Hello, file!\n";
```

Rutīna `slurp` nolasa visu faila saturu atpakaļ virknē:

```raku
my $text = slurp 'greeting.txt';
print $text; # Hello, file!
```

Kopā `spurt` un `slurp` ļauj datus saglabāt un atkal ielādēt ar diviem īsiem izsaukumiem. (Šeit lietots `print`, nevis `say`, jo teksts jau beidzas ar jaunas rindas rakstzīmi.)

Šīs veselā faila darbības ir ideālas, kad fails ir pietiekami mazs, lai to ērti turētu atmiņā. Lielākiem failiem vai tad, kad failu vēlaties apstrādāt pa rindai, izmantojat [faila turi](/lv/oop/file-handles), kas aplūkots šīs sadaļas beigās. Nākamais temats parāda, kā failam pievienot, nevis to aizstāt.

{% include nav.html %}
