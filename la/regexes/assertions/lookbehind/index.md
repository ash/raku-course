---
title: Respectus
translations_gpt:
---

{% include menu.html %}

_Respectus_ inspicit quid statim **ante** locum currentem veniat:

* `<?after …>` — succedit si textus retro congruit (respectus positivus)
* `<!after …>` — succedit si textus retro **non** congruit (respectus negativus)

Hoc tibi permittit aliquid congruere solum propter id quod praecedit, sine illo praefixo in effectu incluso. Exempli gratia, cape cifras quae signum dollari sequuntur, sed `$` extra congruentiam relinque:

```raku
if '$100' ~~ / <?after '$'> \d+ / {
    say $/; # ｢100｣
}
```

Assertio `<?after '$'>` postulat `$` statim ante locum currentem, deinde `\d+` cifras congruit. Congruentia est `100`, sine signo dollari.

Prospectus et respectus saepe coniunguntur. Pars textus `<?after …>` et `<?before …>` involuta solum tunc congruit cum inter vicinos postulatos sedet — modus utilis valorem ex contextu noto extrahendi.

{% include nav.html %}
