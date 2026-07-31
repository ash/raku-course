---
title: regex, token et rule
translations_gpt:
---

{% include menu.html %}

Tria verba clavis alterum super alterum aedificant:

* `regex` — retro cedit, sicut exemplaria in `/ … /`
* `token` — retro **non** cedit
* `rule` — sicut `token`, sed spatia in exemplari significantia sunt

_Regressio_ significat machinam, cum pars posterior exemplaris deficit, retro ire et congruentiam breviorem pro parte priore temptare. `regex` hoc agit:

```raku
my regex r { \w+ 'b' }
say so 'aaab' ~~ / <r> /; # True
```

`\w+` primum totum `aaab` rapit, deinde ultimam `b` reddere debet ut litterale `b` congruere possit. `token` nihil reddere recusat:

```raku
my token t { \w+ 'b' }
say so 'aaab' ~~ / <t> /; # False
```

Hic `\w+` totum `aaab` capit, litterale `b` nihil reliquum invenit, et tessera simpliciter deficit loco eius quod retro cedat.

Hoc limitatio videtur, sed pro grammaticis exacte est quod vis: unaquaeque tessera unam rem mundam congruere et ei adhaerere debet. Hoc analysin celeriorem et effectum praedicibilem reddit. **Utere `token` ex more**; ad `regex` pete solum illis raris occasionibus cum regressione vere eges.

{% include nav.html %}
