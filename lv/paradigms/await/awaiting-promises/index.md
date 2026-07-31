---
title: Solījuma gaidīšana
translations_gpt:
---

{% include menu.html %}

`await` ņem solījumu, nogaida tā pabeigšanu un atgriež tā rezultātu:

```raku
my $p = start { 7 * 6 };
say await $p; # 42
```

Programma pie `await` apstājas tikai tik ilgi, cik vajadzīgs, un tad turpina ar vērtību, ko solījums radījis.

Ja dots vairāki solījumi, `await` nogaida **visus** un atgriež to rezultātus tādā pašā secībā, kādā solījumi ir sarakstā:

```raku
my @jobs = (start { 5 }), (start { 10 }), (start { 15 });
say await @jobs;     # (5 10 15)
say [+] await @jobs; # 30
```

Darbi izpildās vienlaikus, bet `await @jobs` neatgriežas, kamēr nav pabeigts katrs no tiem. Katrs rezultāts tad atrodas tajā pašā vietā, kur tā solījums `@jobs` sarakstā, — neatkarīgi no tā, kurš darbs gadījās pabeigt pirmais.

Ja gaidītais solījums ir **lauzts** — tā bloks meta izņēmumu —, `await` šo izņēmumu pārmet pašā `await` vietā. Tas nozīmē, ka fona darba kļūdas parādās tur, kur to gaidāt, tāpēc tās var apstrādāt ar ierasto `try` / `CATCH` no daļas par izņēmumiem:

```raku
my $p = start { die 'no such file' };

my $result = try await $p;
say $result // "the job failed: $!";
```

Tas izdrukā:

```
the job failed: no such file
```

`die` notiek fona pavedienā, bet izņēmums ceļo līdzi solījumam un izlec pie `await`. `try` to tur noķer, atstājot `$result` nedefinētu un kļūdu mainīgajā `$!` — tātad kļūme konkurentā darbā tiek apstrādāta tieši tāpat kā jebkurš cits izņēmums. Gaidīšana tāpēc nav tikai vērtības iegūšana; tas ir brīdis, kurā konkurentais darbs — gan rezultāti, gan kļūdas — atkal pievienojas galvenajai plūsmai.

{% include nav.html %}
