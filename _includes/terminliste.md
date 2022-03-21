<section id="termine">
  {% assign termine = site.termine | sort: 'zeit' %}
  {% for termin in termine %}
    {% assign w = termin.zeit | date: "%u" | minus: 1 %}
    {% assign m = termin.zeit | date: "%-m" | minus: 1 %}
    {% capture datum %}{{ site.data.wochentage[w] }}, {{ termin.zeit | date: "%-d." }} {{ site.data.monate[m] }} {{ termin.zeit | date: "%Y" }}{% endcapture %}
    {% capture uhrzeit %}{{ termin.zeit | date: "%H:%M" }}{% endcapture %}
    {% capture print_time %}{{ datum }} um {{ uhrzeit }}{% endcapture %}
  <div class="card termin">
    <h5 class="card-header">{{ termin.aktivitaet }}</h5>
    <div class="card-body">
      <div class="details">
        <p class="card-text">Datum:<br /><strong>{{ datum }}</strong></p>
        <p class="card-text">Uhrzeit:<br /><strong>{{ uhrzeit }}</strong></p>
        {% if termin.treffpunkt and termin.treffpunkt != "" %}<p class="card-text">Treffpunkt:<br /><strong>{{ termin.treffpunkt }}</strong></p>{% endif %}
        {% if termin.teilnahmegebuehr and termin.teilnahmegebuehr != "" %}<p class="card-text">Teilnahmegebühr:<br /><strong>{{ termin.teilnahmegebuehr }}</strong></p>{% endif %}
        {% if termin.bild and termin.bild != "" %}<div class="abbildung"><figure class="figure"><div class="bilder"><div class="bild"><img src="{{ termin.bild }}" /></div></div></figure></div>{% endif %}
{% if termin.bilder %}
{% capture imgs %}{{ termin.bilder | size | minus:1 }}{% endcapture %}
{% unless imgs contains '-' %}
<div class="abbildung"><figure class="figure"><div class="bild">
{% for bild in page.bilder %}
<div class="bild"><img src="{{ bild.bild }}"></div>
{% endfor %}
</div></figure></div> 
{% endunless %}
{% endif %}
        {{ termin.content | markdownify }}
      </div>
      {% if termin.anmeldung_offen %}
      <div class="text-center">
        <a class="btn btn-lg border-primary mb-1 text-primary" data-toggle="collapse" href="#anmeldeform-{{termin.slug}}" role="button" aria-expanded="false" aria-controls="anmeldeform-{{termin.slug}}"><i class="fas fa-user-edit"></i> Anmelden</a>
        <!-- <a href="#" class="btn border-warning mb-1"><i class="fa fa-calendar-plus-o" aria-hidden="true"></i> In den Kalender eintragen</a> -->
      </div>
      {% include anmeldung_form.html termin=termin print_time=print_time %}
      {% else %}
        <p class="card-text"><strong>Der Termin ist ausgebucht – Anmeldungen sind leider nicht mehr möglich.</strong></p>
      {% endif %}
    </div>
  </div>
  {% endfor %}
</section>
