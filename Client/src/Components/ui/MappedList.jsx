export default function MappedList({ arr, className, Item, props, children, ...rest }) {

    return (

        <ul className={`${className || ''}`}>
            {arr.map((el) => {
                return (
                    <li className={``} key={el.id}>
                        <Item props={el} />
                    </li>
                );
            })}
        </ul>

    );
}