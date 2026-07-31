---
title: run kaj shell
translations_gpt:
---

{% include menu.html %}

Estas du manieroj lanĉi eksteran programon. La funkcio `run` prenas la komandon kaj ĝiajn argumentojn kiel **apartajn** valorojn kaj rulas la programon rekte, sen impliki ŝelon:

```raku
run 'echo', 'hello';
```

Ĉi tio rulas la programon `echo` kun la sola argumento `hello`, kiu presas `hello`. Ĉar la argumentoj estas transdonataj aparte, ne estas risko, ke la ŝelo miskomprenu spacojn aŭ specialajn signojn — `run` estas la sekura defaŭlto.

La funkcio `shell` anstataŭe transdonas unu solan **ĉenon** al la sistema ŝelo, kiu interpretas ĝin. Tio permesas al vi uzi ŝelajn ecojn kiel duktojn kaj redirektadon:

```raku
shell 'echo hello | tr a-z A-Z';
```

Ĉi tie la ŝelo rulas `echo`, duktas ĝian eligon tra `tr`, kaj presas `HELLO`. La oportuneco venas kun averto: ĉar la ŝelo analizas la ĉenon, konstrui komandon `shell` el nefidinda enigo estas danĝere. Preferu `run`, krom se vi specife bezonas ŝelajn ecojn.

Ambaŭ redonas objekton `Proc`, kiu priskribas, kiel la programo finiĝis. Defaŭlte, la lanĉita programo kunhavas la eligon de via programo, do kion ĝi presas aperas sur la ekrano. Por kapti tiun eligon anstataŭe, vi petas ĝin — la temo de la sekva paĝo.

{% include nav.html %}
