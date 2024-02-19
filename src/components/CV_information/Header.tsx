import React from "react";
import TypewriterEffect from "../Effect/TypewriterEffect";



const Header = React.forwardRef<HTMLDivElement, {}>((props, ref) => {
    return (
        <div className="" ref={ref}>
            <div className="text-white text-5xl flex items-center justify-center h-screen">
                <TypewriterEffect text="Hello ! I'm Arnaud Cologan " speed={100} />
            </div>
        </div>
    );
});

export default Header;
