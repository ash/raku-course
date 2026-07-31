---
title: Saplacināšana un vienuma veidošana
translations_gpt:
---

{% include menu.html %}

Kad ievietojat vienu masīvu citā, Raku _automātiski neapvieno_ to elementus. Aplūkojiet šādu programmu:

```raku
my @a = 1, 2, 3;
my @b = 4, 5;
my @c = @a, @b;

say @c.elems; # 2
say @c;       # [[1 2 3] [4 5]]
```

Masīvam `@c` ir tikai divi elementi: masīvi `@a` un `@b`. Raku saglabā katru konteineru kā vienu vienību, nevis izlej tā saturu ārējā masīvā. Tas pats notiek ar vērtību, kas novietota starp citām:

```raku
my @a = 1, 2, 3;
my @d = 0, @a, 99;
say @d; # [0 [1 2 3] 99]
```

Kad jums tiešām nepieciešama viena plakana secība, pieprasiet to tieši ar rutīnu `flat`:

```raku
my @a = 1, 2, 3;
my @b = 4, 5;

say flat(@a, @b);       # (1 2 3 4 5)
say flat(@a, @b).elems; # 5
```

## Itemizācija (Itemization)

Dažreiz jums ir nepieciešams pretējais: pasargāt konteineru no izlīdzināšanas pat `flat` iekšienē. Konstrukcija `$(...)` _itemizē_ savu argumentu — tā atzīmē rezultātu kā vienu vienību. Salīdziniet iepriekšējo piemēru ar šo:

```raku
my @a = 1, 2, 3;
my @b = 4, 5;

say flat($(@a), @b); # ([1 2 3] 4 5)
```

Šeit `$(@a)` saglabā `@a` kā vienu elementu, bet `@b` joprojām tiek izlīdzināts savās divās vērtībās. Tā ir sigila `$` ideja vēlreiz: `$` nozīmē "uztvert šo kā vienu lietu".

{% include nav.html %}
