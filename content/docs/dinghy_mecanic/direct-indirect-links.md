---
title: "Liaisons directes et indirectes"
weight: 4
---

# Liaisons directes et indirectes

## Liaisons directes
{{< mermaid >}}
stateDiagram
    Barre --> Direction
    Voile --> Propulsion
    Poids --> Équilibre
{{< /mermaid >}}

* La barre joue sur la direction:
    * Si je mets ma barre vers la gauche ou la droite, je lofe ou j’abats.
* Les voiles jouent sur la propulsion:
    * Si je mets beaucoup de surface de voiles, j’ai beaucoup de puissance, j’avance plus vite.
* Le poids de l’équipage joue sur l’équilibre:
    * Si je me mets le poids d’un côté le bateau gîte plus ou moins.

## Liaisons indirectes

### La barre
{{< mermaid >}}
stateDiagram
    Barre --> Propulsion
    Barre --> Équilibre
{{< /mermaid >}}

* La barre joue sur la propulsion:
    * Si avec ma barre, je me mets face au vent : j’arrête le bateau.
    * Au contraire si j’oriente le bateau pour que les voiles soient gonflées : je fais avancer le bateau.
    * Utiliser la barre génère une trainée dans l'eau qui freine le bateau.
* La barre joue aussi sur l’équilibre:
    * Si avec ma barre, je me mets au près : le bateau gîte.
    * Au contraire si je me mets face au vent ou vent arrière : le bateau est à plat.

### La voile
{{< mermaid >}}
stateDiagram
    Voile --> Direction
    Voile --> Équilibre
{{< /mermaid >}}

* La voile joue sur la direction:
    * Pour abattre, je choque
    * Pour lofer, je borde
* La voile joue aussi sur l’équilibre:
    * Si je borde, le bateau gîte
    * Si je choque le bateau se remet à plat

Si plusieurs voiles sont présentes, il est possible de jouer avec l'équilibre des deux autour du mat:
la voile d'avant va permettre d'abattre et la grand voile va permettre de lofer.

{{< figure caption="Dériveur à la gite" src="../images/gite.jpg" >}}

Pour remettre ce dériveur à plat, on peut soit choquer la voile soit augmenter le rappel.

### Le poids
{{< mermaid >}}
stateDiagram
    Poids --> Direction
    Poids --> Propulsion
{{< /mermaid >}}

* Le poids joue sur la direction:
    * Pour abattre, il faut mettre le poids au vent et à l’arrière.
    * Pour lofer, il faut mettre le poids sous le vent et à l’avant.
* Le poids joue aussi sur la propulsion:
    * Puisque le poids à une action sur la direction, il en a une sur la propulsion.
    * En fonction du placement, le poids permet une meilleure remonté au près, ou une meilleure descente au vent

{{< figure caption="Virement bascule" src="../images/virement-bascule.jpeg" >}}

Le virement bascule et l'empannage sont la première application du poids comme liaisons indirectes, en faisant giter le bateau, on force sa direction en limitant la trainée du safran

{{< navigation previous="/docs/dinghy_mecanic/balance" parent="/docs/dinghy_mecanic" >}}
