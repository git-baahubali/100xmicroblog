// components/Button.js

export function Create_acc_Button({ children, onClick, disabled }) {
    return (
        <button
            onClick={onClick}
            className={`w-[334px] h-[35px] flex justify-center items-center text-base
             bg-gray-200 hover:bg-gray-50 text-black font-bold py-2 px-6  shadow-lg
              transform  hover:scale-105 transition-all rounded-full ${disabled ? 'bg-gray-700' : ''}`}
        >
            {children}
        </button>
    );
}



export function Follow_Button({ children, onClick, disabled }) {
    return (
        <button
            onClick={onClick}
            className={`w-[85px] h-[35px] flex justify-center items-center text-base
             bg-gray-200 hover:bg-gray-50 text-black font-bold py-2 px-5  shadow-lg
             m-10 transform hover:scale-105 transition-all rounded-full`}
        >
            {children}
        </button>
    );
}

export function Signup_Button({ children,onClick }) {
    return (<button
        onClick={onClick}
        className={`w-[334px] h-[35px] flex justify-center items-center text-base
                bg-gray-900 hover:twitter-blue-hover active:bg-blue-500 active:text-white text-twitter-blue-default  border-2 border-twitter-blue-default font-bold py-2 px-6  shadow-lg
                 transform  hover:scale-105 transition-all rounded-full `}
    >{children}
    </button>
    );


}

export function Following_Button({ onClick, disabled }) {
    return (
        <button
            onClick={onClick}
            className={`w-[98px] h-[29px] flex justify-center items-center text-base
             bg-gray-200 hover:bg-gray-50 text-black font-bold py-[6px] px-5  shadow-lg
             m-10 transform  hover:scale-105 transition-all rounded-full`}
        >
            Following
        </button>
    );
}

export function Post_Button({ onClick, disabled }) {
    return (
        <button
            onClick={onClick}
            className={`w-[222px] h-[49px] flex justify-center items-center text-base font-bold
             text-white py-[15px] px-[93px]  shadow-lg
             m-10  rounded-full ${disabled ? 'bg-twitter-blue-disabled hover:bg-twitter-blue-disabled ' : 'bg-twitter-blue-default hover:bg-twitter-blue-hover transform  hover:scale-105 transition-all'}`} >
            Post
        </button>
    );
}

export function Home_icon({selected}) {
    return (
        selected ? <img src="/images/state-selected.svg" alt="" srcset="" /> : <img src="/images/state-not-selected.svg" alt="" srcset="" />
    )
}

export function Group_icon({ selected }) {
    return (
        selected ? <img src="/images/group-selected.svg" alt="" srcset="" /> : <img src="/images/group.svg" alt="" srcset="" />
    )
}

