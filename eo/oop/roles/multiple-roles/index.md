---
title: Kunmeti plurajn rolojn
translations_gpt:
---

{% include menu.html %}

Klaso povas fari pli ol unu rolon. Vi simple listigas ĉiun kun sia propra `does`:

```raku
role Walk {
    method move { 'walking' }
}

role Swim {
    method dive { 'diving' }
}

class Duck does Walk does Swim {
}
```

La klaso `Duck` nun havas kaj la metodon `move` el `Walk` kaj la metodon `dive` el `Swim`:

```raku
say Duck.new.move; # walking
say Duck.new.dive; # diving
```

Kombini rolojn tiel nomiĝas _kunmeto_. Ĝi permesas al vi kunigi klason el pluraj sendependaj pecoj de konduto, kio ofte estas pli fleksebla ol konstrui unu solan ĉenon de heredo — klaso povas enmiksi ĝuste la kapablojn, kiujn ĝi bezonas, kaj nenion pli.

{% include nav.html %}
