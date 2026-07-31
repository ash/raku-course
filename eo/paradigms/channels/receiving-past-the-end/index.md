---
title: Ricevi post la fino
translations_gpt:
---

{% include menu.html %}

Kio okazas, se vi vokas `.receive` pli da fojoj ol estas valoroj por preni? La respondo dependas de tio, ĉu la kanalo estis **fermita**.

Prenu la ekzemplon produktanto–konsumanto el antaŭe: fona tasko sendas tri valorojn kaj fermas la kanalon. Kio, se la konsumanto petas kvaran?

```raku
my $c = Channel.new;
start {
    $c.send($_) for 1..3;
    $c.close;
}

say $c.receive; # 1
say $c.receive; # 2
say $c.receive; # 3
say $c.receive; # unu ricevo tro multe
```

## Sur fermita kanalo, kroma ricevo ĵetas escepton

Fermo ne forĵetas la valorojn jam envicigitajn — la tri vokoj de `.receive` supre ankoraŭ redonas `1`, `2` kaj `3`. Sed post kiam la kanalo estas fermita **kaj** malplena, neniuj pliaj valoroj povas iam alveni, do anstataŭ lasi vin atendi eterne, Raku levas escepton:

```
Cannot receive a message on a closed channel
```

La escepto estas `X::Channel::ReceiveOnClosed`. Tio estas helpa prefere ol ĝena: ĝi diras al la konsumanto, senmiskompreneble, ke ĝi malplenigis la kanalon. Praktike vi evitas iam trafi ĝin, konsumante per `.list` (kiu haltas nete ĉe la fermo) aŭ buklante nur dum valoroj restas — ambaŭ montritaj sur la antaŭa paĝo.

## Sur malfermita kanalo, kroma ricevo blokas

Se la produktanto neniam fermas la kanalon, `.receive` havas nenian manieron scii, ĉu alia valoro ankoraŭ venos, do ĝi simple **atendas**:

```raku
my $c = Channel.new;
$c.send(1);
say $c.receive; # 1
say $c.receive; # atendas ĉi tie — la kanalo estas malfermita sed malplena
```

La programo pendas ĉe la dua `.receive`, ĉar valoro *eble* ankoraŭ estos sendita. Jen la danĝero, pri kiu la antaŭa paĝo avertis: forgesu `.close`, kaj normala «atendu la sekvan valoron» fariĝas atendo, kiu neniam finiĝas.

Do la du rezultoj estas maloj, en utila maniero. **Fermita** kanalo malsukcesas rapide, kiam ĝi estas malplena — vi ricevas escepton, kiun vi povas vidi kaj kapti. **Malfermita** kanalo daŭre atendas — precize ĝuste dum produktanto ankoraŭ laboras, sed silenta pendo, se la produktanto senbrue ĉesis sen fermi. Fermi la kanalon estas precize tio, kio transformas tiun silentan pendon en klaran signalon, ke la fluo finiĝis.

{% include nav.html %}
