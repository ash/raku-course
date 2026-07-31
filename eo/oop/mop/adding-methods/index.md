---
title: Aldoni metodojn dum la rulado
translations_gpt:
---

{% include menu.html %}

La MOP ne estas nur por inspektado — ĝi ankaŭ povas **ŝanĝi** tipon dum la programo ruliĝas. La metametodo `.^add_method` aldonas novan metodon al klaso:

```raku
class Empty {
}

Empty.^add_method('greet', method { 'hi' });

say Empty.new.greet; # hi
```

La klaso `Empty` estas difinita tute sen metodoj. `Empty.^add_method('greet', …)` poste alfiksas metodon nomatan `greet`, donitan kiel anonima `method { … }`. De tiu punkto, ĉiu objekto `Empty` respondas al `.greet`, ĝuste kvazaŭ ĝi estus skribita en la klason.

Ĉi tio estas vera meta-programado: al la metaobjekto de `Empty` estas dirite kreskigi novan metodon. La sama protokolo subtenas ecojn, kiujn vi jam uzis — koncepte, kiam vi skribas `class`, `role`, `has` aŭ `method`, la kompililo konstruas vian tipon per MOP-metodoj kiel `.^add_method` kaj `.^add_attribute` je via nomo.

«Koncepte», ĉar ĉi tio estas modelo de la lingvo, ne promeso pri iu ajn kompililo. La MOP estas tio, per kio la objekta sistemo estas *specifita*; ĉu donita realigo laŭvorte direktas ĉiun deklaron tra tiuj metametodoj — kaj ĉu vi povas observi ĝin fari tion — dependas de tiu realigo. Pro la sama kialo, *voki* ĉi tiujn metametodojn mem dependas de la realigo: kiujn el ili kompililo elmontras, kaj kiel ekzakte ili kondutas, povas malsami, do kodo, kiu atingas `.^add_method` kaj similajn, eble ne ruliĝas same sur ĉiu Raku.

Aldoni metodojn je rultempe estas potenca kaj malofte bezonata ilo. La plej multaj programoj neniam atingas ĝin, sed ĝi estas tio, kio faras la objektan sistemon de Raku malfermita: la reguloj de klasoj mem estas skribitaj per la MOP, do vi povas etendi ilin. Por ĉiutaga kodo, la inspektaj metametodoj de la antaŭa temo estas la parto de la MOP, kiun vi efektive uzos.

{% include nav.html %}
