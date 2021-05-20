# Types for Plugin Development in Adobe Photoshop

The properties describing all kinds of objects or classes in Photoshop (Layers, Documents, Channels, ...) are nested in so called Descriptors.
Since UXP was added in 2021, these Descriptors can be accessed and manipulated via [BatchPlay](https://www.adobe.io/photoshop/uxp/ps_reference/media/advanced/batchplay/), in a form of basic JavaScript Objects. (No more messing around with hard-to-read classes like in old CEP 🥳)

Anyways, if you just use batchPlay with vanilla JavaScript, your code is quite error-prone and you might constantly have to check how the actual structure of a Descriptor looks like to navigate through the nested object without any misspellings.
That's where TypeScript can be a real life saver, since type-safety solves both these issues. However, there are no official types for all the objects buzzing around in Photoshop - therefore this Repo exists!

For example you could write a generic function to access any property of a Layer Descriptor:

```typescript

function getLayerProperty<T extends keyof LayerDescriptor>(_property: T): LayerDescriptor[T] {
  return photoshop.action.batchPlay([
    {
      _obj: 'get',
      _target: [{ _property }, { _ref: 'layer', _enum: 'ordinal', _value: 'targetEnum' }],
    },
  ], { synchronousExecution: true })[0][_property]
}

```

If you're using VSC, selecting a property becomes super easy due to the suggestions of intelliSense, as well as working on the returned object without the risk of making mistakes:

![example: using types in code](https://i.imgur.com/5cNvu6k.gif)