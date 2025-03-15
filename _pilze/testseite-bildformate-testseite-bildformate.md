---
beschreibung:
  wissenschaftlich: Testseite Bildformate
  deutsch: Testseite Bildformate
  referenz: Johann Rejek
  familie: Test
profil:
  aktualisiert: 2025-03-15
hauptbild:
  anzeige: true
  datei: /bilder/grauer-moosbart_01.jpg
---
{% include abbildung_start.html stil="standard" %}
{% include bild.html datei="/bilder/jojo_01.jpg" nocrop=true %}
{% include bild.html datei="/bilder/jojo_02.jpg" nocrop=true %}
{% include abbildung_ende.html %}

Blindtext

{% include abbildung_start.html stil="mittel" %}
{% include bild.html datei="/bilder/grauer-moosbart_01a.jpg" nocrop=true %}
{% include bild.html datei="/bilder/grauer-moosbart_03a.jpg" nocrop=true %}
{% include abbildung_ende.html legende="Mittel (zwei nebeneinander)" %}

Blindtext

{% include abbildung_start.html stil="klein" %}
{% include bild.html datei="/bilder/grauer-moosbart_01a.jpg" nocrop=true %}
{% include bild.html datei="/bilder/grauer-moosbart_03a.jpg" nocrop=true %}
{% include abbildung_ende.html legende="klein (drei nebeneinander)" %}