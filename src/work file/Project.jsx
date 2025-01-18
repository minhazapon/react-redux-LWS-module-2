import { connect } from "react-redux"
import { DECREMENT, INCREMENT } from "../redux file/actionType"

function Project({ count, INCREMENT, DECREMENT }) {
    return (
        <div className=" mt-20 mb-20 ml-20 mr-20 ">
            <div className=" flex-col md:flex-row lg:flex-row flex justify-center items-center gap-5 bg-black p-10 rounded-xl ">
                <button onClick={INCREMENT} className=" btn bg-cyan-400 ">Increment</button>
                <p className=" text-green-600 ">{count}</p>
                <button onClick={DECREMENT} className=" btn bg-cyan-400 ">Decrement</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        count: state.value
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: (value) => {
            dispatch(INCREMENT(value))
        },
        decrement: (value) => {
            dispatch(DECREMENT(value))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Project)
