import React, { useEffect } from 'react'
import $ from "jquery";

const Loader = () => {
    useEffect(() => {
        $(window).on("load",function() {
            $("body").addClass('loader_active');
            setTimeout(() => {
                $(".loader_block").fadeOut(1000);
            }, 2000);
        });
    }, [])

    return (
        <div className="loader_block">
            <div className="loader_rectangle"></div>
        </div>
    )
}

export default Loader
