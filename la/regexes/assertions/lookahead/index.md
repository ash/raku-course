---
title: Prospectus
translations_gpt:
---

{% include menu.html %}

_Prospectus_ inspicit quid statim **post** locum currentem veniat. Inter uncos angulares scribitur:

* `<?before …>` — succedit si textus ante congruit (prospectus positivus)
* `<!before …>` — succedit si textus ante **non** congruit (prospectus negativus)

Ipsa assertio nullas litteras congruit; solum locum probat. Exempli gratia, congrue numerum solum cum verbum `dollars` illum sequitur:

```raku
say '100 dollars' ~~ / \d+ <?before ' dollars'> /; # ｢100｣
```

Congruentia est sola `100` — textus ` dollars` inspectus est sed non inclusus.

Quia prospectus solum asserit quid sequatur, idem numerus congruit vel non prout moneta post eum sit:

```raku
say so '100 euro'    ~~ / \d+ <?before ' euro'> /; # True
say so '100 dollars' ~~ / \d+ <?before ' euro'> /; # False
```

Cifrae in utraque catena eaedem sunt, sed assertio `100` solum tunc accipit cum ` euro` sequitur.

Forma negativa utilis est ad «… sed non cum sequitur …». Congrue `cat` solum cum cifra illud **non** sequitur:

```raku
say so 'cats' ~~ / cat <!before \d> /; # True
say so 'cat5' ~~ / cat <!before \d> /; # False
```

In `cat5` prospectus cifram statim post `cat` videt, itaque assertio negativa deficit et tota congruentia deficit.

{% include nav.html %}
