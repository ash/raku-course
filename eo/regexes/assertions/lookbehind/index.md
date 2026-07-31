---
title: Malantaŭrigardo
translations_gpt:
---

{% include menu.html %}

_Malantaŭrigardo_ kontrolas, kio venas tuj **antaŭ** la nuna pozicio:

* `<?after …>` — sukcesas, se la teksto malantaŭe kongruas (pozitiva malantaŭrigardo)
* `<!after …>` — sukcesas, se la teksto malantaŭe **ne** kongruas (negativa malantaŭrigardo)

Tio permesas al vi kongrui kun io nur pro tio, kio antaŭas ĝin, sen inkluzivi tiun prefikson en la rezulton. Ekzemple, kaptu la ciferojn, kiuj sekvas dolarsignon, sed lasu la `$` ekster la kongruo:

```raku
if '$100' ~~ / <?after '$'> \d+ / {
    say $/; # ｢100｣
}
```

La aserto `<?after '$'>` postulas `$` tuj antaŭ la nuna pozicio, poste `\d+` kongruas kun la ciferoj. La kongruo estas `100`, sen la dolarsigno.

Antaŭrigardo kaj malantaŭrigardo estas ofte kombinataj. Peco de teksto envolvita en `<?after …>` kaj `<?before …>` kongruas nur, kiam ĝi sidas inter la postulataj najbaroj — oportuna maniero eltiri valoron el konata kunteksto.

{% include nav.html %}
