---
title: Modèles méteo
weight: 9
display_reading_time: true
display_share_buttons: true
navigation:
  - "/docs/meteorology/weather_report"
  - "/docs/meteorology"
---
Meteorological models are tools that allow us to predict the evolution of weather in the future.

They are based on complex mathematical calculations that take into account current conditions and wind and wave forecasts.

They are used by sailors to predict sailing conditions and by racers to predict race conditions.

## Les informations à rechercher

### L'origine

Weather models are produced by national or international weather services.
One can assume a higher reliability depending on the proximity, but one should always check the forecasts with other sources.
For example, one can assume that a French model will be more reliable for France than for Germany.

{{< hint danger >}}
*But this is not an absolute rule, we will make sure to cross-check the models and to be very careful in case of inconsistency.*
{{< / hint >}}

### Composantes prévisionnelles

* The forecast area
* The duration of the forecast
* Forecast accuracy
* Wind
* Waves
* Air temperature
* Water temperature
* Humidity
* Atmospheric pressure

Some models offer a range of additional components, such as visibility, rain, snow, etc.

### La maille

The mesh is the distance between two points in a model.

**The smaller the mesh size, the more accurate the pattern.**

Meteorological models are generally calculated on grids of one to several tens of kilometers.

## Quels modèles choisir

Il existe plusieurs modèles météorologiques, mais les plus utilisés sont les suivants :

{{< tabs "meteo-models" >}}
{{< tab "GFS" >}}
{{< columns >}}
{{< figure caption="GFS logo" src="images/meteorology/gfs_logo.png" >}}
{{< /columns >}}
{{< columns >}}
The American GFS model (widely used) is produced by the NCEP (National Centers Environmental Prediction), a branch of NOAA (National Oceanic and Atmospheric administration) and gives forecasts on different data.

Its mesh size is **22 km**

* Advantages: no matter where you are in the world, GFS will provide you with a free long term weather forecast.
* Disadvantages: relatively basic model giving sometimes disappointing results, especially locally.

{{< /columns >}}
{{< /tab >}}
{{< tab "ECMWF" >}}
{{< columns >}}
{{< figure caption="ECMWF logo" src="images/meteorology/ECMWF-logo.png" >}}
{{< /columns >}}
{{< columns >}}
  ECMWF (European Center for Medium range Weather Forecasting), a European model, is one of the leaders in the forecasting of blockages, but also of storms.

It has a grid of **9 km**

* Advantages: certainly one of the best global models for the quality and reliability of the forecasts provided.
 Disadvantages : quality often has a price, this model is not widely used online because it is expensive.

{{< /columns >}}
{{< /tab >}}

{{< tab "AROME" >}}
{{< columns >}}
{{< figure caption="AROME logo" src="images/meteorology/arome-logo.jpeg" >}}
{{< /columns >}}
{{< columns >}}
The AROME model is the fine mesh numerical weather prediction model used by Météo France. In use since December 2008, it was created to improve short term forecasts of potentially dangerous phenomena such as Mediterranean episodes, heat waves, thunderstorms, fogs... AROME was designed in the framework of an international collaboration with the objective of using the latest advances in atmospheric modeling. The calculation grid of the model is very precise with only 1.3 km (compared to 5 km for ARPEGE over France).

Its mesh size is **1.3 km** or **2.5 km**

* Advantages: very accurate locally in the short term.
* Disadvantages: use restricted to its advantages.

{{< /columns >}}
{{< /tab >}}

{{< tab "ARPEGE" >}}
{{< columns >}}
{{< figure caption="ARPEGE logo" src="images/meteorology/arpege-logo.png" >}}
{{< /columns >}}
{{< columns >}}
ARPEGE is the main numerical model of Météo-France. It is a global model that slices the atmosphere into a hundred or so layers vertically and its horizontal resolution varies in space. It is used to forecast large-scale phenomena (depressions, anticyclones for example) that cross the globe.

Its mesh size is **5 km**

* Advantages: Reliable and proven.
* Disadvantages: Little available on applications.

{{< /columns >}}
{{< /tab >}}
{{< tab "ICON" >}}
{{< columns >}}
{{< figure caption="ICON logo" src="images/meteorology/icon-logo.png" >}}
{{< /columns >}}
{{< columns >}}
ICON (Icosahedral Nonhydrostatic) is a German model of very good quality, as well used for its 22km mesh as for the 5km one. The all-purpose model par excellence.

Its mesh size is **5 km**

* Advantages: Reliable and accurate for Europe.
* Disadvantages: Little available on applications.

{{< /columns >}}
{{< /tab >}}
{{< /tabs >}}

## Exemple de prévisions entre deux modèles sur la même zone (Deauville)

{{< columns >}}
{{< figure caption="Modèle GFS 23km" src="images/meteorology/gfs-previ.png" >}}
<--->
{{< figure caption="Modèle Arôme 1,3KM" src="images/meteorology/arome-previ.png" >}}
{{< /columns >}}
We note that the two models give different forecasts, GFS gives a wind established and stronger gusts, while Arôme gives a weaker wind and weaker gusts.
On the other hand the directions are similar.

{{< columns >}}
{{< figure caption="Modèle GFS 23km" src="images/meteorology/gfs-windy-previ.png" >}}
<--->
{{< figure caption="Modèle Arôme 1,3KM" src="images/meteorology/arome-windy-previ.png" >}}
{{< /columns >}}
It can be assumed that the presence of an onshore wind (southwest wind) has influenced the forecast of the GFS model, which does not take into account the attenuation of the coast as accurately.