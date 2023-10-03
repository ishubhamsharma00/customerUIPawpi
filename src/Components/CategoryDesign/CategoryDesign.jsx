import { Link } from "react-router-dom";

const CategoryDesign=(props)=>{
    return (
        <>
            {/*Large Screen*/}
            <Link to={`/product/${props.id}`} className="hidden lg:flex flex-col items-center mx-1 h-52 rounded-3xl w-full gap-2 cursor-pointer">
                <div className="h-52 w-44 flex items-center justify-around rounded-3xl " style={{backgroundColor:props.bcolor}} >
                    <div className="h-40 rounded-3xl w-44">
                        <div className="flex flex-row h-full w-full justify-center pl-4 scale-90 transition ease-in-out delay-75 duration-500 hover:scale-110">
                            <img classname="w-full h-full"  src={props.image} alt="Category Images" />
                        </div>
                    </div>
                </div>
                <div className="h-1/5 text-2xl flex items-center font-caveatB">
                    {props.name}
                </div>
            </Link>
            
            {/*Medium screen*/}
            <Link to={`/product/${props.id}`} className="hidden md:contents lg:hidden">
                <div className="flex items-center flex-col">
                    <div className="h-40 w-40 flex items-center justify-around rounded-3xl " style={{backgroundColor:props.bcolor}} >
                        <div className="flex flex-row h-32 w-32 justify-center">
                            <img classname="w-full h-full"  src={props.image} alt="Category Images" />
                        </div>
                    </div>
                    <div className="h-1/5 text-xl flex items-center font-caveatB">
                        {props.name}
                    </div>
                </div>
            </Link>

            {/*Small Screen*/}
            <Link to={`/product/${props.id}`} className="contents md:hidden">
                <div className="flex items-center px-4 flex-col">
                    <div className="h-28 w-28 flex items-center justify-around rounded-2xl " style={{backgroundColor:props.bcolor}} >
                        <div className="flex flex-row h-20 w-20 justify-center">
                            <img classname="w-full h-full"  src={props.image} alt="Category Images" />
                        </div>
                    </div>
                    <div className="h-1/5 text-lg flex items-center font-caveatB">
                        {props.name}
                    </div>
                </div>
            </Link>
        </>
    );
};

export default CategoryDesign;