---
title: Tipa objekti un instances
translations_gpt:
---

{% include menu.html %}

Kad rakstāt klases nosaukumu, piemēram, `Dog`, jūs atsaucaties uz klases _tipa objektu_. Tipa objekts pārstāv pašu tipu, nevis kādu konkrētu šī tipa objektu. _Instance_, kas radīta ar `new`, ir īsts objekts.

Raku abus spēj atšķirt. Metode `defined` tipa objektam atgriež `False`, bet instancei `True`:

```raku
class Dog {
}

say Dog.defined;     # False
say Dog.new.defined; # True
```

Tipa objekts tiek uzskatīts par _nedefinētu_, jo tas nesatur nekādus konkrētus datus — tas ir tikai tipa apraksts. Instance ir _definēta_: tā ir īsts objekts.

Abi ziņo vienu un to pašu tipu caur `WHAT`, ar ko iepazināties [sadaļā par konteineriem](/lv/advanced/containers):

```raku
class Dog {
}

say Dog.WHAT;     # (Dog)
say Dog.new.WHAT; # (Dog)
```

Iekavas ap `(Dog)` ir Raku veids, kā parādīt tipu. Tātad `Dog` un `Dog.new` dala tipu `Dog`; atšķirība ir tāda, ka viens ir pats tips, bet otrs — šī tipa objekts.

{% include nav.html %}
