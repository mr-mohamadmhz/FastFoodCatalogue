export default function Loading({ theme }) {
    return (
        <>
            <div className="flex justify-center m-auto">
                <div
                    class={`text-${theme || "green-600"} inline-block h-8 w-8 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]`}
                    role="status">
                    <span
                        class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                    ></span>
                </div>
            </div>
        </>
    )
}