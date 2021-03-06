---
id: "core.iwrappedentity"
title: "Interface: IWrappedEntity<T, PK, P>"
sidebar_label: "IWrappedEntity"
hide_title: true
---

# Interface: IWrappedEntity<T, PK, P\>

[core](../modules/core.md).IWrappedEntity

## Type parameters

Name | Type | Default |
------ | ------ | ------ |
`T` | [*AnyEntity*](../modules/core.md#anyentity)<T\> | - |
`PK` | keyof T | - |
`P` | [*Populate*](../modules/core.md#populate)<T\> \| *unknown* | *unknown* |

## Hierarchy

* **IWrappedEntity**

## Implemented by

* [*BaseEntity*](../classes/core.baseentity.md)

## Methods

### assign

▸ **assign**(`data`: *any*, `options?`: *boolean* \| [*AssignOptions*](core.assignoptions.md)): T

#### Parameters:

Name | Type |
------ | ------ |
`data` | *any* |
`options?` | *boolean* \| [*AssignOptions*](core.assignoptions.md) |

**Returns:** T

Defined in: [packages/core/src/typings.ts:87](https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/typings.ts#L87)

___

### init

▸ **init**<P\>(`populated?`: *boolean*, `populate?`: P, `lockMode?`: [*NONE*](../enums/core.lockmode.md#none) \| [*OPTIMISTIC*](../enums/core.lockmode.md#optimistic) \| [*PESSIMISTIC\_READ*](../enums/core.lockmode.md#pessimistic_read) \| [*PESSIMISTIC\_WRITE*](../enums/core.lockmode.md#pessimistic_write)): *Promise*<T\>

#### Type parameters:

Name | Type | Default |
------ | ------ | ------ |
`P` | [*Populate*](../modules/core.md#populate)<T\> | [*Populate*](../modules/core.md#populate)<T\\> |

#### Parameters:

Name | Type |
------ | ------ |
`populated?` | *boolean* |
`populate?` | P |
`lockMode?` | [*NONE*](../enums/core.lockmode.md#none) \| [*OPTIMISTIC*](../enums/core.lockmode.md#optimistic) \| [*PESSIMISTIC\_READ*](../enums/core.lockmode.md#pessimistic_read) \| [*PESSIMISTIC\_WRITE*](../enums/core.lockmode.md#pessimistic_write) |

**Returns:** *Promise*<T\>

Defined in: [packages/core/src/typings.ts:82](https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/typings.ts#L82)

___

### isInitialized

▸ **isInitialized**(): *boolean*

**Returns:** *boolean*

Defined in: [packages/core/src/typings.ts:80](https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/typings.ts#L80)

___

### populated

▸ **populated**(`populated?`: *boolean*): *void*

#### Parameters:

Name | Type |
------ | ------ |
`populated?` | *boolean* |

**Returns:** *void*

Defined in: [packages/core/src/typings.ts:81](https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/typings.ts#L81)

___

### toJSON

▸ **toJSON**(...`args`: *any*[]): [*Dictionary*](../modules/core.md#dictionary)<*any*\>

#### Parameters:

Name | Type |
------ | ------ |
`...args` | *any*[] |

**Returns:** [*Dictionary*](../modules/core.md#dictionary)<*any*\>

Defined in: [packages/core/src/typings.ts:85](https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/typings.ts#L85)

___

### toObject

▸ **toObject**(`ignoreFields?`: *string*[]): [*Dictionary*](../modules/core.md#dictionary)<*any*\>

#### Parameters:

Name | Type |
------ | ------ |
`ignoreFields?` | *string*[] |

**Returns:** [*Dictionary*](../modules/core.md#dictionary)<*any*\>

Defined in: [packages/core/src/typings.ts:84](https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/typings.ts#L84)

___

### toPOJO

▸ **toPOJO**(): [*EntityData*](../modules/core.md#entitydata)<T\>

**Returns:** [*EntityData*](../modules/core.md#entitydata)<T\>

Defined in: [packages/core/src/typings.ts:86](https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/typings.ts#L86)

___

### toReference

▸ **toReference**<PK2, P2\>(): [*IdentifiedReference*](../modules/core.md#identifiedreference)<T, PK2\> & [*LoadedReference*](core.loadedreference.md)<T, P2\>

#### Type parameters:

Name | Type | Default |
------ | ------ | ------ |
`PK2` | *unknown* | [*PrimaryProperty*](../modules/core.md#primaryproperty)<T\\> |
`P2` | *unknown* | *unknown* |

**Returns:** [*IdentifiedReference*](../modules/core.md#identifiedreference)<T, PK2\> & [*LoadedReference*](core.loadedreference.md)<T, P2\>

Defined in: [packages/core/src/typings.ts:83](https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/typings.ts#L83)
