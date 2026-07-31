---
title: Antaŭrigardo
translations_gpt:
---

{% include menu.html %}

_Antaŭrigardo_ kontrolas, kio venas tuj **post** la nuna pozicio. Ĝi estas skribata ene de angulaj krampoj:

* `<?before …>` — sukcesas, se la teksto antaŭe kongruas (pozitiva antaŭrigardo)
* `<!before …>` — sukcesas, se la teksto antaŭe **ne** kongruas (negativa antaŭrigardo)

La aserto mem kongruas kun neniuj signoj; ĝi nur testas la pozicion. Ekzemple, kongruigu nombron nur, kiam ĝi estas sekvata de la vorto `dollars`:

```raku
say '100 dollars' ~~ / \d+ <?before ' dollars'> /; # ｢100｣
```

La kongruo estas nur `100` — la teksto ` dollars` estis kontrolita sed ne inkluzivita.

Ĉar la antaŭrigardo nur asertas, kio sekvas, la sama nombro kongruas aŭ ne depende de la valuto post ĝi:

```raku
say so '100 euro'    ~~ / \d+ <?before ' euro'> /; # True
say so '100 dollars' ~~ / \d+ <?before ' euro'> /; # False
```

La ciferoj estas identaj en ambaŭ ĉenoj, sed la aserto akceptas `100` nur, kiam ` euro` venas poste.

La negativa formo estas utila por «… sed ne kiam sekvata de …». Kongruigu `cat` nur, kiam ĝi **ne** estas sekvata de cifero:

```raku
say so 'cats' ~~ / cat <!before \d> /; # True
say so 'cat5' ~~ / cat <!before \d> /; # False
```

En `cat5` la antaŭrigardo vidas ciferon tuj post `cat`, do la negativa aserto malsukcesas kaj la tuta kongruo malsukcesas.

{% include nav.html %}
