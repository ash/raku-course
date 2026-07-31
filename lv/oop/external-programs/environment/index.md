---
title: Vide
translations_gpt:
---

{% include menu.html %}

Katra programma tiek palaista ar _vides mainīgo_ kopu — nosauktām vērtībām, piemēram, `HOME`, `PATH` vai `USER`, ko nodrošina operētājsistēma. Raku tie ir pieejami dinamiskajā jauktenī `%*ENV`:

```raku
say %*ENV<HOME>; # the home directory, e.g. /home/anna
```

Vides mainīgo nolasāt, indeksējot `%*ENV` ar tā nosaukumu. Tā kā tas ir parasts jauktenis, varat arī pārbaudīt, vai mainīgais ir uzstādīts, vai mainīt to programmām, ko palaižat:

```raku
%*ENV<GREETING> = 'Hello';
say %*ENV<GREETING>; # Hello
```

Uzstādot atslēgu `%*ENV`, tā tiek pievienota videi, ko mantos jebkura programma, kuru pēc tam palaidīsiet ar `run` vai `shell`, un tā konfigurāciju padod bērnprogrammai:

```raku
%*ENV<GREETING> = 'Hello';

my $proc = run 'sh', '-c', 'echo $GREETING', :out;
say $proc.out.slurp(:close).chomp; # Hello
```

Mainīgais tiek uzstādīts jūsu programmas vidē *pirms* bērna palaišanas, tāpēc čaulai, ko palaiž `run`, `GREETING` savā vidē jau ir un tā to var atbalsot atpakaļ. Katrs šādi uzstādītais mainīgais sasniedz katru programmu, ko palaižat pēc tam.

Tvigils `*` pasaka, ka `%*ENV` ir dinamisks mainīgais, tāpat kā `$*OUT` daļā par ievadi un izvadi. Vēl daži zvaigžņotie mainīgie apraksta darbojošās programmas pasauli — `@*ARGS` satur komandrindas argumentus, un `$*PROGRAM-NAME` ir paša skripta nosaukums. Kopā tie ļauj programmai saprast kontekstu, kurā tā palaista.

{% include nav.html %}
