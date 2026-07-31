---
title: La regulo TOP
translations_gpt:
---

{% include menu.html %}

Kiam vi analizas ĉenon per gramatiko, Raku komencas de ĵetono nomata `TOP`. Ĝi estas la enirpunkto — la priskribo de la **tuta** enigo. Ĉio alia en la gramatiko ekzistas por subteni ĝin.

Ĵetono `TOP` kutime referencas aliajn ĵetonojn laŭ nomo, dividante la problemon en pli malgrandajn partojn:

```raku
grammar Pair {
    token TOP   { <key> '=' <value> }
    token key   { \w+ }
    token value { \w+ }
}
```

Legu `TOP` laŭtvoĉe: «ŝlosilo, poste egalsigno, poste valoro». La ĵetonoj `key` kaj `value` diras, kiel ĉiu el tiuj partoj aspektas. Ĉi tiu divido estas la tuta celo de gramatiko — ĉiu ĵetono havas unu malgrandan, klare nomitan laboron, kaj `TOP` kunmetas ilin.

`TOP` estas nur konvencio devigata de `.parse`; la aliaj ĵetonoj povas esti nomitaj kiel ajn vi volas. La nomoj, kiujn vi elektas, ankaŭ fariĝas la nomitaj kaptoj en la rezulto, do bone nomita gramatiko produktas mem-priskriban kongruarbon, kiel vi vidos baldaŭ.

{% include nav.html %}
