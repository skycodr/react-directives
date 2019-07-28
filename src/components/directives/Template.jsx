import React from "react";

export default function Template(props){

    let { index: i } = props;

    return (
        <>
            {
                `iteration ${i} `
            }
        </>
    );
}