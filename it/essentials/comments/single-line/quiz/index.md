---
title: 'Quiz: Commenti su una singola linea'
---

{% include menu.html %}

Seleziona le righe con i commenti corretti. Non preoccuparti se non capisci ancora il codice Raku.

{:.quiz}
1 | `my $name = 'John'; # Impostazione del nome`
1 | `my $age = 23; ## Cambialo l'anno prossimo` | Tutto ciò che segue il primo `#` è un commento.
0 | `say $name; Stampa del nome` | Un commento deve iniziare con un `#`.
0 | `my $city = 'TBA'; // Non ancora conosciuto` | I commenti in stile C++ non sono riconosciuti in Raku.
1 | `# say $age;` | L'intera riga è stata commentata.
1 | `#say $age;`

{% include quiz.html %}

{% include nav.html %}