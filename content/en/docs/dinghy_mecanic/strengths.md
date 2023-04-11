---
title: Forces
weight: 2
display_reading_time: true
display_share_buttons: true
navigation:
  - "/docs/dinghy_mecanic/flows"
  - "/docs/dinghy_mecanic"
  - "/docs/dinghy_mecanic/balance"
---
## Aerodynamic force / velocity force

### Component of the velocity force
The aerodynamic force or vellic force is the sum of an infinite number of elementary "small forces".
{{< figure caption="Aero force" src="images/dinghy_mecanic/force_aero.png" >}}
The resultant force is applied at the maximum of the trough and is almost perpendicular to the chord (except for incidence angles below 25°).

### Sail efficiency
{{< columns >}}
{{< figure caption="Velic polar" src="images/dinghy_mecanic/polaire_velique.png" >}}
<--->
The angles that run through the curve are those of the apparent wind relative to the sailboat's course.
{{< /columns >}}

The {{< katex >}}Cz{{< /katex >}} is the coefficient of lift while the {{< katex >}}Cx{{< /katex >}} is the coefficient of drag.
These dimensionless numbers represent the values of lift and drag (for the same speed).

The maximum aerodynamic efficiency of a sail is obtained for the maximum glide ratio which is the maximization of the ratio {{< katex >}}Cz/Cx{{< /katex >}}. Be careful, max efficiency does not mean maximum speed.

Moreover, this curve is only aerodynamic and does not show the need for power to overcome the drag of the hull in the water.

Its interest is to show us the range of use of the apparent wind:

- above 45° of incidence, we are in a vortex regime.
- At 20°, we start to see a separation (on the trailing edge side) which will only increase (towards the leading edge).

## Hydrodynamic force

Water is a fluid, so everything we said before remains valid. There is therefore, as for the sail, a hydrodynamic force. It is usually broken down into anti-drift force and drag.
The rudder, which has a large dimension, is also an anti-drift element.
{{< columns >}}
{{< figure caption="Hydro force top view" src="images/dinghy_mecanic/force_hydro_dessus.svg" >}}
<--->
{{< figure caption="Hydro force from behind" src="images/dinghy_mecanic/force_hydro_derriere.svg" >}}
{{< /columns >}}

## Weight and buoyancy
The weight is the mass of the boat and its crew subjected to the earth's gravity.

{{< columns >}}
{{< figure caption="Action of gravity" src="images/dinghy_mecanic/gravite.svg" >}}
<--->
{{< figure caption="Archimedean thrust" src="images/dinghy_mecanic/archimede.svg" >}}
{{< /columns >}}

- The weight is vertical and applies to the center of gravity ({{< katex >}}CG{{< /katex >}}) of the system: boat + crew.
- The buoyancy is applied at the center of buoyancy ({{< katex >}}CC{{< /katex >}}): center of gravity of the immersed parts.