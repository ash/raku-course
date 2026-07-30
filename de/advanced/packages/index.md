---
title: Pakete und Namensräume
---

{% include menu.html %}

Ein _Namensraum_ (Namespace) ist ein benannter Behälter für andere benannte Dinge, wie Variablen und Subroutinen. Er verhindert Namenskollisionen: `Maths::pi` und `Physics::pi` können beide existieren, ohne sich gegenseitig zu stören. Ein _Package_ ist die einfachste Art von Namensraum.

Du hast bereits einen Namensraum verwendet, ohne ihn zu benennen: Jedes `module` erzeugt einen. Dieser Abschnitt betrachtet Packages direkt und zeigt, wie `our`-Variablen und der `::`-Trenner es dir ermöglichen, von außen auf einen Namensraum zuzugreifen.

{% include nav.html %}
