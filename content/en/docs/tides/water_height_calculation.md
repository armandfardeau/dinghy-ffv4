---
title: "Sea level calculation"
weight: 2
---

# Calculation of the water level

The interest for the sailor is to know if there is enough water to sail. Even with a shallow draft, it is good to know where you can pass or not. This can allow you to make a short cut or to manage a sensitive channel.

It is imperative to remain critical of the calculations and verify them empirically. A frequent error is the inversion between rising and falling tide.

To know if it is possible to pass at a place, it is necessary to calculate the water height.
To do this, you need:

* a chart (SHOM chart for example)
* a tide calendar for the place where you are sailing (Almanach du marin Breton for example)

The SHOM cannot calculate the tides for all the ports in France, so there are reference ports and attached ports. The latter depend on the reference ports with corrections in water height and in PM and BM time.

Be careful with the following points:

* On tide calendars, the time rarely corresponds to local time.
* Pay attention to the reference height used in the tide calendar and on your chart. In France, the SHOM takes as reference the hydrographic zero (water height at BM coefficient 120).
* Note that for all coefficients, the water level at mid-tide is always the same.

## The twelfths method

{{< columns >}}
{{< figure caption="Tidal sine curve" src="../images/tide-sinusoidale.png" >}}
<--->
The tidal cycle in France is 2 tides per day, it can be represented by a sinusoidal.

In order to represent it more easily, we linearize the sine by distorting the time axis. Indeed, by changing the scale of the graph, the curve is now a straight line. This is the method of twelfths.
{{< /columns >}}

Before we start calculating, we need to find two things:

* The amplitude: Height at PM - Height at BM
* The tide time: Time between PM and BM / 6

For this, we cut a half cycle (from BM to PM for example) in twelfths, we consider that the sea rises or falls by :

* **1/12** of the amplitude during the **1st hour tide**
* **2/12** of the amplitude during the **2nd hour tide** * **3/12** of the amplitude during the **3rd hour tide
* **3/12** of the amplitude during the **3rd hour tide** * **3/12** of the amplitude during the **4th hour tide
* **2/12** of the amplitude during the **5th hour tide** * **1/12** of the amplitude during the **4th hour tide
* **1/12** of the amplitude during the **6th hour tide**.

## How to calculate the twelfths method on a graduated paper
We will make a graph with the time in second on the abscissa and the water height on the ordinate.

### Example of calculation on graduated paper

* Low tide hour: **6h06**
* High tide hour: **12h12**
* Tide level at high tide: **6m40**
* Tide level at low tide: **3m10**

**That is:**

* Tide time: (12h12 - 6h06) / 6 = **1h01**
* Amplitude: 6.40m - 3.10m = **3.30m**

{{< columns >}}
{{< figure caption="Tide calculation using a graduated paper and the twelfths method" src="../images/tide-calculation.png" >}}
<--->

* 6h06: **3,10m**
* 7h07: **3,38m**
* 8h08: **3,93m**
* 9h09: **4,75m**
* 10h10: **5,58m**
* 11h11: **6,13m**
* 12h12: **6,40m**

{{< /columns >}}

It can be seen that the accuracy of the results depends on the accuracy of the grid cells, this method is to be preferred when you want to go fast and the accuracy of the calculation is not essential.

## How to calculate the twelfths method with proportional ratios

### Example of calculation with proportional ratios

* Low water time: **10:38**
* High water hour: **17h09**
* Water level at High tide: **5,55m**
* Water level at low tide: **2,50m**

**That is:**

* Amplitude: 5.55 m - 2.50 m = 3.05 m
* Twelfth = Amplitude / 12 = 3.05 m / 12 = **0.254m**

**To find the water level at 12:12**

1. Let's calculate the number of tidal hours between 10:38 and 12:12
    * In this time interval, 94 minutes pass.
2. We divide this time by the duration of 1 hour tide (here 65,17 min):
    * 94 / 65,17 = **1,442 hours tide**.
    * There are therefore **1.442 hours of tide** that pass between 10:38 and 12:12.
3. We take 1 tidal hour + 0.442 tidal hours:
    * or 1 twelfth + 2 twelfths x 0.442: **1.885 twelfths**

**Therefore:**

* The sea has descended by 1.885 twelfths
* Multiplying by the value of the twelfth: 1.885 x 0.254 m = **0.48m**
    * The sea has descended by **0.48m**
* By subtracting from the height of the MP:
    * 5.55m - 0.48m = **5.07m**

Result of the twelfths rule:
At 12:12 PM, the tidal height is **5.07m**

**To find the time at which the water height will be 3.00m**

1. To go from 3.00m to 2.50m, the sea must go down **0.50m**.
2. Let's calculate the number of twelfths in 0.50m.
    * 0.50 m / 0.254 m = **1.967 twelfths**
      3