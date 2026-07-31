---
title: Pakotnes un moduļi
translations_gpt:
---

{% include menu.html %}

Atslēgvārds `package` ievieš vārdtelpu. Viss, kas tajā deklarēts ar `our`, kļūst par šīs vārdtelpas daļu un ir sasniedzams no ārpuses, izmantojot pakotnes nosaukumu un `::` atdalītāju:

```raku
package Maths {
    our $pi = 3.14;
    our sub double($x) { $x * 2 }
}

say $Maths::pi;         # 3.14
say Maths::double(5);   # 10
```

Mainīgajam piekļūst kā `$Maths::pi` — sigils, tad pakotnes nosaukums, tad mainīgā nosaukums. Apakšprogrammu izsauc kā `Maths::double(...)`.

Gan `package`, gan `module` izveido vārdtelpu; tie atšķiras ar to, ko vēl papildus dara. `module` ir parastā izvēle atkārtoti lietojamam kodam, savukārt vienkāršs `package` ir tikai vārdtelpa bez papildinājumiem. (`class`, ar kuru iepazīsieties [nākamajā daļā](/lv/oop), arī izveido vārdtelpu un papildus pievieno objektorientēto mehānismu.)

```raku
module Greet {
    our sub hello { 'hi' }
}

say Greet::hello; # hi
```

Tātad vārdtelpa, ko jūs saņēmāt no `module`, ir tas pats mehānisms, ko `package` nodrošina pats par sevi. Izvēle starp tiem lielākoties ir par nodomu: `module` bibliotēkām, `package` tīrai vārdtelpai — un, kad nonākat pie objektiem, `class` tipiem.

{% include nav.html %}
