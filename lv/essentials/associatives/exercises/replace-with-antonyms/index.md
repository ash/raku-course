---
title: 'Uzdevums: Aizstāt ar antonīmiem'
---

{% include menu.html %}

## Problēma

Izveidojiet programmu, kas aizstāj visus vārdus no komandrindas ar to antonīmiem. Ja vārds nav atrodams vārdnīcā, neatstājiet to nemainītu un izdrukājiet tādu, kāds tas ir.

Izmantojiet cieti kodētu hash, lai saglabātu antonīmu vārdnīcu. Jūsu ērtībai šeit ir sagatavots aptuveni 200 pāru saraksts, kuru varat tieši kopēt un ielīmēt savā programmā: [dictionary.raku](https://github.com/ash/raku-course/blob/master/essentials/associatives/exercises/replace-with-antonyms/dictionary.raku). Visi pāri ir saglabāti abos virzienos, piemēram:

```raku
my %dictionary =
    'above' => 'below',
    'absent' => 'present',
    # . . .
    'below' => 'above',
    # . . .
    'present' => 'absent',
    # . . .
;
```

Padariet programmu pēc iespējas vienkāršāku un izdrukājiet vārdus pa vienai rindai.

## Piemērs

Palaidiet programmu un nododiet tai dažus vārdus. Pārliecinieties, ka vismaz daži no vārdiem ir atrodami vārdnīcā.

```console
$ raku replace-with-antonyms.raku a quiet teacher wants to buy some salt
a
noisy
student
wants
to
sell
some
sugar
```

## Risinājums

✅ [Skatīt risinājumu](solution)

{% include nav.html %}