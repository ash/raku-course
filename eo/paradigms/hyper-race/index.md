---
title: hyper kaj race 🆕
translations_gpt:
---

{% include menu.html %}

La funkciaj listaj operacioj, kiujn vi renkontis pli frue — `map` kaj `grep` — traktas siajn elementojn unu post la alia. Kiam la laboro sur ĉiu elemento estas sendependa kaj konsiderinda, Raku povas plenumi ĝin **paralele** trans pluraj procesoraj kernoj, kun preskaŭ nenia ŝanĝo en via kodo.

Du metodoj ŝaltas tion: `.hyper`, kiu tenas la rezultojn en ordo, kaj `.race`, kiu ne faras tion sed povas esti iomete pli rapida. Ĉi tiu sekcio montras ambaŭ.

{% include nav.html %}
