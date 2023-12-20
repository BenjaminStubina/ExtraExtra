export default function AnimatedLoader() {

    return (

        <div className='absolute left-[calc(50%-75px)] top-[50%]'>
            <span className="loader inline-block w-36 h-36 relative border-8 border-pink-500">
                <span className="loader-inner align-top inline-block w-full bg-blue-300"></span>
            </span>
        </div>

    );
}