---
title: Direct and indirect links
weight: 4
display_reading_time: true
display_share_buttons: true
navigation:
  - "/docs/dinghy_mecanic/balance"
  - "/docs/dinghy_mecanic"
---
## Direct links
{{< mermaid >}}
stateDiagram
Helm --> Direction
Sail --> Propulsion
Weight --> Balance
{{< /mermaid >}}

* The helm affects the direction:
    * If I put my helm to the left or right, I luff or pull down.
* The sails affect propulsion:
    * If I put a lot of sail area, I have a lot of power, I move faster.
* The weight of the crew affects the balance:
    * If I put the weight on one side the boat heels more or less.

## Indirect links

### The helm
{{< mermaid >}}
stateDiagram
Helm --> Propulsion
Bar --> Balance
{{< /mermaid >}}

* The helm plays on propulsion:
    * If with my helm, I face the wind: I stop the boat.
    * On the contrary, if I turn the boat so that the sails are inflated: I make the boat move forward.
    * Using the helm generates a drag in the water which slows down the boat.
* The helm also affects the balance:
    * If I use my helm to sail close-hauled: the boat heels.
    * On the contrary, if I put the boat into the wind or downwind: the boat is flat.

### The sail
{{< mermaid >}}
stateDiagram
Sail --> Direction
Sail --> Balance
{{< /mermaid >}}

* The sail plays on the direction:
    * To knock down, I shock
    * To luff, I tuck
* The sail also plays on the balance:
    * If I tack, the boat heels
    * If I ease off, the boat heels over

If several sails are present, it is possible to play with the balance of the two around the mast:
the headsail will allow to bring down and the mainsail will allow to luff.

{{< figure caption="Dinghy at the head" src="images/dinghy_mecanic/gite.jpg" >}}

To get this dinghy back to flat, you can either ease the sail or increase the recall.

### The weight
{{< mermaid >}}
stateDiagram
Weight --> Direction
Weight --> Propulsion
{{< /mermaid >}}

* Weight plays into the direction:
    * To shoot down, put the weight to windward and aft.
    * To luff, you have to put your weight to leeward and forward.
* Weight also affects propulsion:
    * Since the weight has an action on the direction, it has one on the propulsion.
    * Depending on the placement, the weight allows a better upwind or downwind ride

{{< figure caption="Tilt-turn" src="images/dinghy_mecanic/virement-bascule.jpeg" >}}

The tilt tack and gybe are the first application of weight as indirect links, by making the boat heel, we force its direction by limiting the drag of the rudder