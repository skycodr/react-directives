import React from 'react';
import { /* Check, If, Else, ElseIf, */ Loop, Template } from './directives';

export default function ExampleApp(props) {

    return (
        <div>
            <Loop to={10}>
                <Template />
            </Loop>
        </div>
    );
}