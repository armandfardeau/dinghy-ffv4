---
title: "Modèles méteo"
weight: 9
display_reading_time: true
display_share_buttons: true
navigation:
  - "/docs/meteorology/weather_report"
  - "/docs/meteorology"
---
Les modèles météorologiques sont des outils qui permettent de prédire l'évolution du temps dans le futur.

Ils sont basés sur des calculs mathématiques complexes qui prennent en compte les conditions actuelles et les prévisions de vent et de vagues.

Ils sont utilisés par les navigateurs pour prévoir les conditions de navigation et les régatiers pour prévoir les conditions de course.

## Les informations à rechercher

### L'origine

Les modèles météorologiques sont réalisés par des services météorologiques nationaux ou internationaux.
On peut en induire une fiabilité accrue en fonction de la proximité , mais il faut toujours vérifier les prévisions avec d'autres sources.
Par exemple on peut présumer qu'un modèle Français sera plus fiable pour la France que pour l'Allemagne.

{{< hint danger >}}
*Mais ce n'est pas une règle absolue, on veillera à croiser les modèles et à maintenir une grande prudence en cas d'incohérence.*
{{< / hint >}}

### Composantes prévisionnelles

* La zone de prévision
* La durée de prévision
* La précision de la prévision
* Vent
* Vagues
* Température de l'air
* Température de l'eau
* Humidité
* pression atmosphérique

Certains modèles offrent un panel de composantes additionnelles, comme la visibilité, la pluie, la neige, etc.

### La maille

La maille est la distance entre deux points d'un modèle.

**Plus la maille est petite, plus le modèle est précis.**

Les modèles météorologiques sont généralement calculés sur des mailles de un à plusieurs dizaines de kilomètres.

## Quels modèles choisir

Il existe plusieurs modèles météorologiques, mais les plus utilisés sont les suivants :

{{< tabs "meteo-models" >}}
{{< tab "GFS" >}}
{{< columns >}}
{{< figure caption="GFS logo" src="../images/gfs_logo.png" >}}
{{< /columns >}}
{{< columns >}}
Le modèle américain GFS (très utilisé) est réalisé par le NCEP (National Centers Environmental Prediction), branche du NOAA (National Oceanic and Atmospheric administration) et donne des prévisions sur différentes données.

Sa maille est de **22 km**

* Avantages: où que vous vous trouviez dans le monde, GFS saura vous fournir une prévision météo long terme gratuitement.
* Inconvénients: modèle relativement basique donnant des résultats parfois décevants, surtout localement.

{{< /columns >}}
{{< /tab >}}
{{< tab "ECMWF" >}}
{{< columns >}}
{{< figure caption="ECMWF logo" src="../images/ECMWF-logo.png" >}}
{{< /columns >}}
{{< columns >}}
  ECMWF (European Center for Medium range Weather Forecasting), modèle européen, est un des leaders dans la prévision des blocages, mais aussi des tempêtes.

Sa maille est de **9 km**

* Avantages : certainement l’un des meilleurs modèles globaux de par la qualité et la fiabilité des prévisions fournies.
* Inconvénients : la qualité a souvent un prix, ce modèle payant est peu répandu en ligne car coûteux.

{{< /columns >}}
{{< /tab >}}

{{< tab "AROME" >}}
{{< columns >}}
{{< figure caption="AROME logo" src="../images/arome-logo.jpeg" >}}
{{< /columns >}}
{{< columns >}}
Le modèle AROME est le modèle de prévision numérique du temps à maille fine utilisé notamment par Météo France. En service depuis décembre 2008, il a été créé  pour améliorer les prévisions à courte échéance des phénomènes potentiellement dangereux comme les épisodes méditerranéens, les canicules, les orages, les brouillards... AROME a été conçu dans le cadre d'une collaboration internationale avec pour objectif d'utiliser les dernières avancées en modélisation atmosphérique. La maille de calcul du modèle est très précise avec seulement 1,3 km (contre 5 km pour ARPEGE sur la France).

Sa maille est de **1,3 km** ou **2,5 km**

* Avantages : très précis localement à courte échéance.
* Inconvénients : usage restreint à ses seuls avantages.

{{< /columns >}}
{{< /tab >}}

{{< tab "ARPEGE" >}}
{{< columns >}}
{{< figure caption="ARPEGE logo" src="../images/arpege-logo.png" >}}
{{< /columns >}}
{{< columns >}}
ARPEGE est le principal modèle numérique de Météo-France. C'est un modèle global qui découpe l'atmosphère sur une centaine de couches sur la verticale et sa résolution horizontale varie dans l'espace. Il permet de prévoir les phénomènes de grande échelle (dépressions, anticyclones par exemple) qui parcourent le globe.

Sa maille est de **5 km**

* Avantages: Fiable et éprouvé.
* Inconvénients: Peu disponible sur les applications.

{{< /columns >}}
{{< /tab >}}
{{< tab "ICON" >}}
{{< columns >}}
{{< figure caption="ICON logo" src="../images/icon-logo.png" >}}
{{< /columns >}}
{{< columns >}}
ICON (Icosahedral Nonhydrostatic) est un modèle allemand de très bonne qualité, aussi bien utilisé pour sa maille de 22km que pour celle de 5km. Le modèle passe-partout par excellence.

Sa maille est de **5 km**

* Avantages: Fiable et précis pour l'europe.
* Inconvénients: Peu disponible sur les applications.

{{< /columns >}}
{{< /tab >}}
{{< /tabs >}}

## Exemple de prévisions entre deux modèles sur la même zone (Deauville)

{{< columns >}}
{{< figure caption="Modèle GFS 23km" src="../images/gfs-previ.png" >}}
<--->
{{< figure caption="Modèle Arôme 1,3KM" src="../images/arome-previ.png" >}}
{{< /columns >}}
On constate que les deux modèles donnent des prévisions différentes, GFS donne un vent établi et des rafales plus fortes, alors que Arôme donne un vent plus faible et des rafales plus faibles.
En revanche les directions sont similaires.

{{< columns >}}
{{< figure caption="Modèle GFS 23km" src="../images/gfs-windy-previ.png" >}}
<--->
{{< figure caption="Modèle Arôme 1,3KM" src="../images/arome-windy-previ.png" >}}
{{< /columns >}}
On peut supposer que la présence d'un vent de terre (vent de sud-ouest) a influencé la prévision du modèle GFS qui ne prend pas en compte aussi précisement l'atténuation de la côte.
