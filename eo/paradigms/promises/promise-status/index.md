---
title: La stato de promeso 🆕
translations_gpt:
---

{% include menu.html %}

Promeso ĉiam estas en unu el tri statoj, raportataj de ĝia metodo `.status`:

* **`Planned`** — ankoraŭ ne decidita;
* **`Kept`** — ĝi finiĝis kun valoro;
* **`Broken`** — ĝia laboro ĵetis escepton.

Tio estas la valoroj de la enumeracio `PromiseStatus`. Legi `.status` ne
atendas — ĝi diras al vi, kie la promeso estas *ĝuste nun*, do vi povas kontroli ĝin antaŭ ol la
promeso decidiĝis kaj denove poste:

```raku
my $p = start { sleep 1; 10 };

say $p.status; # Planned — legita tuj, dum la bloko ankoraŭ kuras
await $p;      # nun atendu, ke ĝi finiĝu
say $p.status; # Kept
say $p.result; # 10
```

`.result` donas la plenumitan valoron. Malsame ol `.status`, ĝi *atendas* ĝis la promeso estas
decidita, do sur nefinita promeso ĝi blokas precize kiel `await`. Kaj se la
promeso estis rompita, `.result` reĵetas la escepton.

Kiam vi volas rigardi malsukceson sen reĵeti ĝin, uzu `.cause` — la
escepto-objekton de rompita promeso:

```raku
my $p = start { die 'boom' };
try await $p;         # lasu ĝin decidiĝi (kaj forglutu la reĵetitan eraron)
say $p.status;        # Broken
say $p.cause.message; # boom
```

Do `.status` kaj `.cause` inspektas promeson sen ĝeni ĝin, dum `await` kaj
`.result` kolektas ĝian rezulton — la valoron, aŭ la reĵetitan eraron.

{% include nav.html %}
