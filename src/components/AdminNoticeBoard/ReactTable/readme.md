fixing typescript error : 

[Resource](https://github.com/TanStack/table/discussions/2664)

1. Create an interface that will be used to define how your object will look like

```typescript
interface ExampleObject {
    col1: string
    col2: string
    col3: string
}
```
2.When you define your columns use as keyof ExampleObject to cast your accessor value :
```typescript
const columns: Column<ExampleObject>[] = [
    {
        Header: () => ...,
        accessor: "col1" as keyof ExampleObject,
        Cell: ({value}: CellProps<ExampleObject>) => ...
    },
    {
        Header: () => ...,
        accessor: "col2" as keyof ExampleObject,
        Cell: ({value}: CellProps<ExampleObject>) => ...
    },
    {
        Header: () => ...,
        accessor: "col3" as keyof ExampleObject,
        Cell: ({value}: CellProps<ExampleObject>) => ...
    },
]
```

3. Lastly, use your interface as a parameter for the generic 
useTable<D extends object={}>() function like this:
```typescript
const {...} = useTable<ExampleObject>({columns, data, ...})

```

This is what I've used to get rid of this error. I don't really know if this is the best approach but it worked for me.

P.S.: Ran into this error today and it took a bit of time until I found out what to do in this situation.