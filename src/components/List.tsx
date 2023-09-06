export const List = ({items}: {items: { name: string, id: string }[]}) => {
    return (
        <>
          {items.map((item) => (
            <div>{item.name}</div>
          ))}
        </>
    )
}