---
title: 'Atkļūdošana ar `dd`'
translations_gpt:
---

{% include menu.html %}

Programmu atkļūdot var dažādi — no vienkāršas drukāšanas instrukcijas, piemēram, `say`, līdz izsmalcinātākiem izsekošanas rīkiem. Šajā sadaļā aplūkosim ērto rutīnu `dd`. Tā ir iebūvēta Rakudo kompilatorā, lai gan pati par sevi nav Raku valodas standarta daļa.

Nosaukums `dd` cēlies no _data dumper_ (datu izmetējs). Atšķirībā no `say` vai `put`, kas paredzēti programmas parastajai izvadei, `dd` izdrukā izstrādātājam draudzīgu vērtības atveidojumu — to pašu kodam līdzīgo formu, ko iepriekšējā sadaļā deva metode [`.raku`](/lv/advanced/representations/raku-method). Tā raksta standarta kļūdu plūsmā, tāpēc tās izvade nesajaucas ar datiem, ko programma izdrukā lietotājam.

{% include nav.html %}
