---
title: Skaitļu bāzes
translations_gpt:
---

{% include menu.html %}

Vesela skaitļa literālis nav obligāti jāraksta decimālajā sistēmā. Raku saprot trīs visbiežāk lietotās alternatīvās bāzes, katrai ir savs prefikss:

```raku
say 0xFF;   # 255  — heksadecimālā (bāze 16)
say 0b1010; # 10   — binārā (bāze 2)
say 0o17;   # 15   — oktālā (bāze 8)
```

Neatkarīgi no tā, kādu bāzi izmantojat pirmkodā, vērtība ir viens un tas pats vesels skaitlis; atšķiras tikai pieraksts.

Jebkurai citai bāzei izmantojiet radiksa formu `:bāze<skaitlis>`:

```raku
say :16<FF>;   # 255
say :2<1010>;  # 10
```

Lai dotos pretējā virzienā — no skaitļa uz tā attēlojumu citā bāzē — izsauciet metodi `base`. Tā atgriež ciparu virkni:

```raku
say 255.base(16); # FF
say 10.base(2);   # 1010
```

{% include nav.html %}
