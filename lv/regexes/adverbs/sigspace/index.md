---
title: Nozīmīgas atstarpes
translations_gpt:
---

{% include menu.html %}

Regulārās izteiksmes iekšienē atstarpes parasti tiek ignorētas — tās ir tur tikai tāpēc, lai raksturs būtu lasāms. Tieši tāpēc `/foo bar/` sakrīt ar `foobar`. Tomēr dažreiz jūs patiešām vēlaties, lai atstarpe raksturā nozīmētu «šeit ir atstarpe». Tieši to dara apstākļvārds `:s` (saīsinājums no `:sigspace`, «nozīmīga atstarpe»):

```raku
say so 'foo    bar' ~~ /:s foo bar/; # True
say so 'foobar'     ~~ /:s foo bar/; # False
```

Ar `:s` atstarpe starp `foo` un `bar` raksturā pieprasa atstarpi starp abiem vārdiem virknē. Der viena vai vairākas atstarpes (vai tabulācijas), tāpēc atstarpju virtene virknē `'foo    bar'` sakrīt.

Nozīmīgas atstarpes kļūst īpaši svarīgas ar gramatikām, kur tās ļauj rakstīt raksturus, kas lasās kā valoda, kuru parsējat. Ar tām sastapsieties atkal kā ar atšķirību starp `token` un `rule`.

{% include nav.html %}
