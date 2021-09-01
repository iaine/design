## Modularity

These are the designs for the modularity work. This is linked to the [networks](networks.md) code. 

Modularity is part of the community algorithm. 

The sounds focus on the edges, or the links. 

## Detuned Edge

The detuned edge applies the modularity to the sound. It might be used on its own or with the unaffected edge sound. 

This allows the designer to apply a frequency or sound to the community and the subsequent calculation. 

Edge = (Frequency -> Community)

Existing = Edge * modularity_score


## Jittered Edge

This puts randomness back into the network. The modularity score provides the maximum amount of randomness that is in the graph. 

The delayed start time must be greater or equal to the start time. The random seed function has the maximum of the modularity score and cannot be greater. The random seed function can use the function within the audio language. 

delayed_start = start + random_seed(max=modularity_score)

### Object Constraints 

start > 0 && start >= current time

delayed_start > 0 && delayed_start >= current time

## Edges

The duration can be affected by the weight within the graph to use the note length to suggest the changes. 

This can also be applied to the volume to use that aspect. 

duration = current * weight

or 
duration = weight