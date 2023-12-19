export default function Button({ onClick, className, children, ...rest }) {

    return (
        <button
            {...rest}
            className={`font-sans
            bg-red-500 hover:bg-red-600 focus:bg-red-700
            text-white text-sm sm:text-base md:text-lg
            px-4 py-2 rounded transition duration-200 ease-in-out
            ${className || ''}`}
            onClick={onClick}
        >
            {children}
        </button>

    );
}