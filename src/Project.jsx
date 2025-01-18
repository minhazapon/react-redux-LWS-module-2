
function Project() {
    return (
        <div className=" mt-20 mb-20 ml-20 mr-20 ">
            <div className=" flex-col md:flex-row lg:flex-row flex justify-center items-center gap-5 bg-black p-10 rounded-xl ">
                <button className=" btn bg-cyan-400 ">Increment</button>
                <p className=" text-green-600 ">0</p>
                <button className=" btn bg-cyan-400 ">Decrement</button>
            </div>
        </div>
    )
}

export default Project
