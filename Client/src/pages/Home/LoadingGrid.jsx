import loadingImage from '../../assets/images/online-news-lg.png'

export default function LoadingGrid() {

    const LoadingUnit = () => {
        return (
            <article
                className={`w-full group relative overflow-hidden rounded border-4 border-red-700 border-opacity-0 hover:border-opacity-80 transition ease-linear duration-100 delay-[50ms]`}>
                <div className='flex aspect-square w-full'>
                    <img 
                        src={loadingImage}
                        className={`max-w-full object-contain object-center`}
                    />
                </div>
            </article>
        )
    }

    return (
        <>
            {Array(9)
                .fill(true)
                .map((item, index) => (
                    <LoadingUnit key={index} />
                ))
            }
        </>
    )
}