<section id="termine">
  {% assign termine = site.termine | sort: 'zeit' %}
  {% for termin in termine %}
    {% capture datum %}
    {% assign w = termin.zeit | date: "%u" | minus: 1 %}
    {{ site.data.wochentage[w] }},
    {{ termin.zeit | date: "%-d." }}
    {% assign m = termin.zeit | date: "%-m" | minus: 1 %}
    {{ site.data.monate[m] }}
    {{ termin.zeit | date: "%Y" }}
    {% endcapture %}
    {% capture uhrzeit %}
    {{ termin.zeit | date: "%H:%M" }}
    {% endcapture %}
  <div class="card termin">
    <h5 class="card-header">{{ termin.aktivitaet }}</h5>
    <div class="card-body">
      <div class="details">
        <p class="card-text">Datum:<br /><strong>{{ datum }}</strong></p>
        <p class="card-text">Uhrzeit:<br /><strong>{{ uhrzeit }}</strong></p>
        {% if termin.treffpunkt and termin.treffpunkt != "" %}<p class="card-text">Treffpunkt:<br /><strong>{{ termin.treffpunkt }}</strong></p>{% endif %}
        {% if termin.teilnahmegebuehr and termin.teilnahmegebuehr != "" %}<p class="card-text">Teilnahmegebühr:<br /><strong>{{ termin.teilnahmegebuehr }}</strong></p>{% endif %}
        <p class="card-text">{{ termin.content | markdownify }}</p>
      </div>
      {% if termin.anmeldung_offen %}
      <div class="text-center">
        <a class="btn btn-lg border-primary mb-1 text-primary" data-toggle="collapse" href="#anmeldeform-{{termin.slug}}" role="button" aria-expanded="false" aria-controls="anmeldeform-{{termin-slug}}"><i class="fas fa-user-edit"></i> Anmelden</a>
        <!-- <a href="#" class="btn border-warning mb-1"><i class="fa fa-calendar-plus-o" aria-hidden="true"></i> In den Kalender eintragen</a> -->
      </div>
      {% include anmeldung_form.html termin=termin datum=datum uhrzeit=uhrzeit %}
      {% else %}
        <p class="card-text"><strong>Der Termin ist ausgebucht – Anmeldungen sind leider nicht mehr möglich.</strong></p>
      {% endif %}
    </div>
  </div>
  {% endfor %}
</section>
