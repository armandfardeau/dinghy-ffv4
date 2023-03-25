---
title: "Calcul de la hauteur d'eau"
weight: 2
---

# Calcul de la hauteur d'eau

L’intérêt pour le marin est de savoir si on a assez d’eau pour naviguer. Même avec un faible tirant d’eau, il est bon de savoir ou l’on peut passer ou pas. Cela peut permettre de faire du rase cailloux ou bien encore de gérer une passe sensible.

Il faut impérativement rester critique face aux calculs et les vérifier empiriquement. Une erreur fréquente est l'inversion entre marée montante et descendante.

Pour savoir si l’on peut passer à un endroit, il faut calculer la hauteur d’eau.
 Pour ce faire, il faut :
 * une carte (Carte du SHOM par exemple)
 * un calendrier des marées pour l’endroit où l’on navigue. (Almanach du marin Breton par exemple)

Le SHOM ne pouvant pas calculer les marées pour tous les ports de France, il y a des ports de références et des ports rattachés. Ces derniers dépendent des ports de références avec des corrections en hauteur d’eau et en heure de PM et BM.

Soyez vigilant aux points suivants:

* Sur les calendriers des marées, l’heure correspond rarement à l'heure locale.
* Faite attention à la hauteur de référence utilisé dans le calendrier des marées et sur votre carte. En France, le SHOM prend comme référence le zéro hydrographique (hauteur d’eau à BM coefficient 120).
* On peut noter que pour tous les coefficients, la hauteur d’eau à mi marée est toujours la même.

## La méthode des douzièmes

{{< columns >}}
{{< figure caption="Courbe sinusoïdale de la marée" src="../images/tide-sinusoidale.png" >}}
<--->
Le cycle des marées en France est de 2 marées par jour, il peut être représenté par une sinusoïdale.

 Afin de le représenter plus facilement, on linéarise le sinus en déformant l’axe temporel. En effet, en changeant l'échelle du graphique, la courbe est désormais une droite. C’est la méthode des douzièmes.
{{< /columns >}}

Avant de commencer à calculer, il faut trouver deux éléments:

* L’amplitude: Hauteur à PM – Hauteur à BM
* L’heure marée : Temps entre PM et BM / 6

Pour cela, on découpe un demi cycle (de la BM à la PM par ex.) en douzième, on considère que la mer monte ou descend de :

* **1/12** de l’amplitude durant la **1ère heure marée**
* **2/12** de l’amplitude durant la **2ème heure marée**
* **3/12** de l’amplitude durant la **3ème heure marée**
* **3/12** de l’amplitude durant la **4ème heure marée**
* **2/12** de l’amplitude durant la **5ème heure marée**
* **1/12** de l’amplitude durant la **6ème heure marée**

## Comment calculer la méthode des douzièmes sur un papier gradué
On va faire un graphique avec en abscisse le temps en deuxième et en ordonnée la hauteur d’eau.

### Exemple de calcul sur papier gradué

* Heure de basse mer: **6h06**
* Heure de pleine mer: **12h12**
* Hauteur d’eau à PM: **6m40**
* Hauteur d’eau à BM: **3m10**

**Soit:**

* Heure marée: (12h12 – 6h06) / 6 = **1h01**
* Amplitude: 6,40m – 3,10m = **3,30m**

{{< columns >}}
{{< figure caption="Calcul de la marée grâce à un papier gradué et à la méthode des douzièmes" src="../images/tide-calculation.png" >}}
<--->

* 6h06: **3,10m**
* 7h07: **3,38m**
* 8h08: **3,93m**
* 9h09: **4,75m**
* 10h10: **5,58m**
* 11h11: **6,13m**
* 12h12: **6,40m**

{{< /columns >}}

On constate que la précision des résulats dépend de la précision des mailles du quadrillage, cette méthode est à privilégier quand on souhaite aller vite et que la précision du calcul n'est pas essentielle.

## Comment calculer la méthode des douzièmes avec des rapports de proportionnalitées

### Exemple de calcul avec des rapports de proportionnalitées

* Heure de basse mer: **10h38**
* Heure de pleine mer: **17h09**
* Hauteur d’eau à PM: **5,55m**
* Hauteur d’eau à BM: **2,50m**

**Soit:**

* Heure marée: 17H09 - 10H38 = (17 x 60 + 9) - (10 x 60 + 38) = 391 min / 6 = **65,17 min**
* Amplitude: 5,55 m - 2,50 m = 3,05 m
* Douzième = Amplitude / 12 = 3,05 m / 12 = **0,254m**

**Pour trouver la hauteur d'eau à 12h12**

1. Calculons le nombre d'heures marée entre 10H38 et 12H12
    * Dans cet intervalle de temps, il s'écoule 94 min.
2. On divise ce temps par la durée d' 1 heure marée (ici 65,17 min) :
    * 94 / 65,17 = **1,442 heures marée**.
    * Il y a donc **1,442 heures marée** qui s'écoulent entre 10H38 et 12H12.
3. On prend 1 heure marée + 0,442 heure marée:
    * soit 1 douzième + 2 douzième x 0,442: **1,885 douzièmes**

**Donc:**

* La mer est descendue de 1,885m douzièmes
* En multipliant par la valeur du douzième : 1,885 x 0,254 m = **0,48m**
    * La mer est descendue de **0,48m**
* En retranchant de la hauteur de la PM :
    * 5,55 m - 0,48 m = **5,07m**

Résultat de la règle des douzièmes :
À 12H12, la hauteur de la marée est de **5,07m**

**Pour trouver l'heure à laquelle  la hauteur d'eau sera de 3,00m**

1. Pour passer de 3,00 m à 2,50 m, la mer doit descendre de **0,50m**.
2. Calculons le nombre de douzièmes dans 0,50 m.
    * 0,50 m / 0,254 m = **1,967 douzièmes**
3. On prend 1 Heure marée + 0,967 / 2 douzième: **1,484 Heure marée**

**Donc:**

* il s'écoule **1,484 Heure marée** dans notre intervalle de temps.
* En multipliant le nombre d'heures marée trouvé par la valeur de l'heure marée (65,167 min.) :
    * 1,484 Hm x 65,167 min. = **97 min** = **01H37**
* En retranchant 01H37 de l'heure de la Basse Mer
    * 17H09 - 01H37 = **15H32**

Résultat de la règle des douzièmes :
La hauteur marée atteint 3,00 m à **15H32**

Si cette méthode est plus précise, elle est plus complexe à mettre en place, il faudra être pragmatique et choisir une route moins engagée en fonction de la confiance que l'on porte dans ses calculs.

## Avant de prendre la mer
Une fois que l'on aura obtenu la hauteur d'eau à une heure donnée, il faudra ajouter:

* Un pied de pilote (En voile légère, 50 cm sont judicieux)
* La hauteur significative des vagues divisé par deux (moyenne des hauteurs mesurées entre crête et creux du tiers des plus fortes vagues)

La pression atmosphérique modifie la hauteur de la mer:

* Rajouter 10cm pour 10hPa en condition anticyclonique
* Enlever 10cm pour 10hPa en conditionanti dépressionnaire

Un vent de mer fort et constant peut entraîner une hausse du niveau de la mer jusqu'à un mètre.

{{< navigation parent="/docs/tides" >}}
