---
title: The flows
weight: 1
---
A flow is the movement of a fluid. A streamline is the materialization of the movement of the fluid in a flow.

There are 2 types of flows:

- Laminar: the current lines are almost parallel to each other.
- Vortex: the current lines are totally disordered.

The sails of a sports dinghy are most effective when the flow is laminar. It is highlighted by the penons and favors.

{{< columns >}}
{{< figure caption="Penons" src="../images/penon.jpg" >}}
<--->
{{< figure caption="Favors" src="../images/faveur.jpeg" >}}
{{< /columns >}}

The flow remains laminar up to about 40 degrees of incidence, i.e. a broad reach / wide reach gait (depending on the speed of the dinghy).

Downwind, the flow is turbulent.
The state of the flow depends on several factors: viscosity of the fluid ({{< katex >}}V{{< /katex >}}), speed of the flow, density ({{< katex >}}p{{< /katex >}}) of the fluid. In order to understand how the forces that drive our drifter are formed, let's look at the different pressures along the flows.

The total pressure of a moving fluid is the sum of:

- Its static pressure ({{< katex >}}Ps{{< /katex >}}): for the case of air, this is the meteorological pressure.
- Its dynamic pressure ({{< katex >}}Pd{{< /katex >}}): which depends on its velocity squared {{< katex >}}Pd = 1/2 ρV2{{< /katex >}}

Bernoulli states that within an incompressible flow, the total pressure remains constant along a streamline :
{{< katex >}}V^2/2 + Ps/P = cste {{< /katex >}}

## Laminar flow generating displacement

What we are interested in is understanding how a sail, immersed in a flow (the speed of the boat), can move the boat forward.

{{< figure caption="Sail lift" src="../images/bernoulli.jpg" >}}

The sail surface (curve) deflects the flow. From a certain distance, the flow is no longer disturbed.

On the upper surface there is a tightening while on the lower surface there is a widening.
This is a Venturi effect: the air is accelerated on the top surface while it is slowed down on the bottom surface (case of a "simple" sail).

There is therefore a decrease in static pressure on the top surface and vice versa on the bottom surface.

The static pressure differential creates a force: the aerodynamic force or buoyancy. The suction (top surface) is more important than the thrust (bottom surface).

## Profile stall

In a normal situation, the airflow is "attached" to both sides of the wing, top and bottom. The airflow sticks to the airfoil, which favors the lift.

At a certain angle of incidence, about 15 to 20°, depending on the characteristics of the wing - profile, aspect ratio, etc. - and the number of

{{< columns >}}
{{< figure caption="Profil normal" src="../images/profil_normal.jpg" >}}
display_reading_time: true
display_share_buttons: true
navigation:
  - "/docs/dinghy_mecanic"
  - "/docs/dinghy_mecanic/strengths"
<--->
{{< figure caption="Profil décroché" src="../images/profil_stall.jpg" >}}
{{< /columns >}}
Une voile correctement bordé génère une portance permettant le déplacement.
Une voile bordée en excès génère un écoulement turbulent, la portance est alors inférieure à la trainée, le bateau n'avance plus.