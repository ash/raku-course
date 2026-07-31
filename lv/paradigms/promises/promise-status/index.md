---
title: Solījuma statuss 🆕
translations_gpt:
---

{% include menu.html %}

Solījums vienmēr ir vienā no trim stāvokļiem, ko paziņo tā metode `.status`:

* **`Planned`** — vēl nav nokārtots;
* **`Kept`** — tas beidzās ar vērtību;
* **`Broken`** — tā darbs meta izņēmumu.

Šīs ir `PromiseStatus` uzskaitījuma vērtības. `.status` nolasīšana negaida — tā pasaka, kur solījums ir *tieši tagad*, tāpēc to var pārbaudīt gan pirms solījuma nokārtošanās, gan atkal pēc tās:

```raku
my $p = start { sleep 1; 10 };

say $p.status; # Planned — nolasīts uzreiz, kamēr bloks vēl darbojas
await $p;      # tagad sagaidām tā beigas
say $p.status; # Kept
say $p.result; # 10
```

`.result` dod turēto vērtību. Atšķirībā no `.status` tā *gaida*, līdz solījums ir nokārtots, tāpēc nepabeigtam solījumam tā bloķē tieši tāpat kā `await`. Un, ja solījums ir lauzts, `.result` pārmet izņēmumu.

Kad vēlaties apskatīt kļūmi, to nepārmetot, izmantojiet `.cause` — lauzta solījuma izņēmuma objektu:

```raku
my $p = start { die 'boom' };
try await $p;         # ļaujam tam nokārtoties (un norijam pārmesto kļūdu)
say $p.status;        # Broken
say $p.cause.message; # boom
```

Tātad `.status` un `.cause` solījumu apskata, to netraucējot, kamēr `await` un `.result` savāc tā iznākumu — vērtību vai pārmesto kļūdu.

{% include nav.html %}
