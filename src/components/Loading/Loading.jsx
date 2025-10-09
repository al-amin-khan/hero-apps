
const Loading = ({ show = 6 }) => {
    return (
        <>
            {
                Array.from({ length: show }).map((_, index) =>
                    <div key={index} className="flex flex-col gap-4 p-2">
                        <div className="flex justify-center items-center gap-4">
                            <div className="skeleton h-40 w-[80%] shrink-0 rounded-4xl"></div>
                        </div>
                        <div className="skeleton h-8 w-1/2"></div>
                        <div className="skeleton h-20 w-full"></div>
                        <div className="flex justify-between flex-row gap-2">
                            <div className="skeleton h-4 w-3/12"></div>
                            <div className="skeleton h-4 w-3/12"></div>
                        </div>
                    </div>
                )
            }
        </>
    );
};

export default Loading;