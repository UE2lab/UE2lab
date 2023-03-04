---
title: "UE2 Lab - Pictures"
layout: piclay
excerpt: "UE2 Lab -- Pictures"
permalink: /pictures/
---

# Pictures
Jump to: [Presentations](#presentation), [Congratulations](#congratulations), [Events](#events)


### Presentations
{% assign number_printed = 0 %}
{% for pic in site.data.Pictures_Presentations %}

{% assign even_odd = number_printed | modulo: 4 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-3 clearfix">
<img src="{{ site.url }}{{ site.baseurl }}/images/activities/Presentations/{{ pic.image }}" class="img-responsive" width="95%" style="float: left; margin:5px; padding: 0;" />
<p align="center" style="margin: 0; padding: 0; font-size:13px">**{{ pic.image | split: '_' | first }}**<br>{{ pic.image | split: '.' | first | split: '_' | last }}</p>
</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd > 2 %}
</div>
{% endif %}


{% endfor %}

{% assign even_odd = number_printed | modulo: 4 %}
{% if even_odd == 1 %}
</div>
{% endif %}

{% if even_odd == 2 %}
</div>
{% endif %}

{% if even_odd == 3 %}
</div>
{% endif %}

<p> &nbsp; </p>


### Congratulations
{% assign number_printed = 0 %}
{% for pic in site.data.Pictures_Congratulations %}

{% assign even_odd = number_printed | modulo: 4 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-3 clearfix">
<img src="{{ site.url }}{{ site.baseurl }}/images/activities/Congratulations/{{ pic.image }}" class="img-responsive" width="95%" style="float: left; margin:5px; padding: 0;" />
<p align="center" style="margin: 0; padding: 0; font-size:13px">**{{ pic.image | split: '_' | first }}**<br>{{ pic.image | split: '.' | first | split: '_' | last }}</p>
</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd > 2 %}
</div>
{% endif %}


{% endfor %}

{% assign even_odd = number_printed | modulo: 4 %}
{% if even_odd == 1 %}
</div>
{% endif %}

{% if even_odd == 2 %}
</div>
{% endif %}

{% if even_odd == 3 %}
</div>
{% endif %}

<p> &nbsp; </p>


### Events
{% assign number_printed = 0 %}
{% for pic in site.data.Pictures_Events %}

{% assign even_odd = number_printed | modulo: 4 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-3 clearfix">
<img src="{{ site.url }}{{ site.baseurl }}/images/activities/Events/{{ pic.image }}" class="img-responsive" width="95%" style="float: left; margin:5px; padding: 0;" />
<p align="center" style="margin: 0; padding: 0; font-size:13px">**{{ pic.image | split: '_' | first }}**<br>{{ pic.image | split: '.' | first | split: '_' | last }}</p>
</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd > 2 %}
</div>
{% endif %}


{% endfor %}

{% assign even_odd = number_printed | modulo: 4 %}
{% if even_odd == 1 %}
</div>
{% endif %}

{% if even_odd == 2 %}
</div>
{% endif %}

{% if even_odd == 3 %}
</div>
{% endif %}

<p> &nbsp; </p>


