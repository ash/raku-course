---
title: 'Risinājums: Statuss ar klientu'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
use Cro::HTTP::Client;

my $response = await Cro::HTTP::Client.get('http://example.com/');
say $response.status;
```

🦋 Atrodiet programmu failā [status-line.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/cro/status-line.raku).

## Izvade

```
200
```

## Komentāri

1. `Cro::HTTP::Client.get` atgriež solījumu — tīkla pieprasījums beidzas vēlāk —, tāpēc mēs to gaidām ar `await`.

1. Atbildes objekts savu `.status` jau zina, tāpēc `200` iegūstam tieši, nesūtot pieprasījuma tekstu un neparsējot atbildi ar rokām. Salīdziniet to ar neapstrādātās ligzdas variantu: modulis visu protokola darbu izdara jūsu vietā.

{% include nav.html %}
