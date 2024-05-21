---
title: Vienrindas komentāri
---

{% include menu.html %}

Vienkāršākā komentāra forma ir vienrindas komentārs. Tas sākas ar `#` rakstzīmi un turpinās līdz pašreizējās rindas beigām.

```raku
my $name; # Šis mainīgais tiek izmantots lietotāja vārda glabāšanai
$name = prompt 'Kā tevi sauc? ';
say $name; # Tagad redzam vārdu
```

Ņemiet vērā, ka sheebang, piemēram, `#!/usr/bin/env raku` koda pirmajā rindā, arī ir komentārs Raku valodā, lai gan to var nolasīt un izpildīt čaula.

{% include nav.html %}