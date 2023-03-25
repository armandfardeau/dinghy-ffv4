---
title: "Les écoulements"
weight: 1
---

# Les écoulements

Un écoulement est le déplacement d’un fluide. Une ligne de courant est la matérialisation du déplacement du fluide dans un écoulement.

Il existe 2 types d’écoulements:

- Laminaire : les lignes de courants sont quasiment parallèles entre eux.
- Tourbillonnaire : les lignes de courants sont totalement désordonnées.

Les voiles d’un dériveur de sport sont le plus efficaces lorsque l’écoulement est laminaire. Il est mis en évidence par les penons et les faveurs.

{{< columns >}}
{{< figure caption="Penons" src="../images/penon.jpg" >}}
<--->
{{< figure caption="Faveurs" src="../images/faveur.jpeg" >}}
{{< /columns >}}

L’écoulement reste laminaire jusqu'à une quarantaine de degrés d’incidence, soit une allure de largue / grand largue (dépendamment de la vitesse du dériveur).

Au vent arrière, l’écoulement est turbulent.
L ’ état de l’écoulement dépend de plusieurs facteurs: viscosité du fluide ({{< katex >}}V{{< /katex >}}),vitesse de l’écoulement, masse volumique ({{< katex >}}p{{< /katex >}}) du fluide. Afin de comprendre comment se forme les forces qui font avancer notre dériveur, intéressons-nous aux différentes pressions le long des écoulements.

La pression totale d’un fluide en mouvement est la somme de:

- Sa pression statique ({{< katex >}}Ps{{< /katex >}}): pour le cas de l’air, c’est la pression météorologique.
- Sa pression dynamique ({{< katex >}}Pd{{< /katex >}}): qui dépend de sa vitesse au carré {{< katex >}}Pd = 1/2 ρV2{{< /katex >}}

Bernoulli énonce qu’au sein d’un écoulement incompressible, la pression totale reste constante sur une ligne de courant :
{{< katex >}}V^2/2 + Ps/P = cste {{< /katex >}}

## Écoulement laminaire générant un déplacement

Ce qui nous intéresse est de comprendre comment une voile, immergée dans un écoulement (la vitesse du bateau), peut faire avancer ce dernier.

{{< figure caption="Portance de la voile" src="../images/bernoulli.jpg" >}}

 La surface de la voile (courbe) dévie l’écoulement. A partir d’une certaine distance, l’écoulement n’est plus perturbé.

Du coté extrados il y a un resserrement alors qu’a l’intrados il y a un élargissement.
C’est un effet Venturi : l’air est accéléré du coté extrados alors qu’il est ralentit du coté intrados (cas d’une voile « simple »).

Il y a donc diminution de la pression statique à l’extrados et vice-versa à l’intrados.

Le différentiel de pression statique crée une force : la force aérodynamique ou poussée vélique. La succion (extrados) est prépondérante devant la poussée (intrados).

## Décrochage du profil

En situation normale, l'écoulement de l'air est « attaché » sur les deux faces, intrados et extrados, de l'aile. Les filets d'air collent au profil de la voile, ce qui favorise la portance.

À une certaine valeur de l'angle d'incidence, de l'ordre de 15 à 20°, selon les caractéristiques de l'aile — profil, allongement, etc. — et le nombre de Reynolds, il se produit un décollement de l'écoulement aérodynamique à l'extrados de l'aile entraînant une chute de portance plus ou moins brusque : c'est à ce moment que la voile décroche.

{{< columns >}}
{{< figure caption="Profil normal" src="../images/profil_normal.jpg" >}}
<--->
{{< figure caption="Profil décroché" src="../images/profil_stall.jpg" >}}
{{< /columns >}}
Une voile correctement bordé génère une portance permettant le déplacement.
Une voile bordée en excès génère un écoulement turbulent, la portance est alors inférieure à la trainée, le bateau n'avance plus.

{{< navigation parent="/docs/dinghy_mecanic" next="/docs/dinghy_mecanic/strengths" >}}
