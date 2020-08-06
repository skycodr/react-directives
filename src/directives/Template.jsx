import React, { Children } from "react";

export default function Template ( props ) {

    const { index, data, children, level = 0, renderer = null } = props;
    const itemRenders = [];

    const childRenderer = (renderer) ?  renderer( props ) : children;

    Children.forEach( childRenderer, ( child, childIndex ) => {
        itemRenders.push( React.cloneElement( child, { key: `${ level }_${ index }_${ childIndex }`, level, data, index } ) );
    } );

    return <>{ itemRenders }</>;
}

// Todo:
// Template.propTypes = {
//      children: (props, key) => {
//         return null;
//      }
// };