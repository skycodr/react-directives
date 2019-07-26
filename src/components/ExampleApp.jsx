import React from 'react';
import { Check, If, Else, ElseIf, Loop } from './directives';

export default function ExampleApp(props) {

    let some = ['abc', 'efg', 'hij', 'klm']
    return (
        <div>
            <Check>
                <If condition={true}>
                    If statement<br />
                    <Check>
                        <If condition={false}>
                            Nested If statement
                        </If>
                        <Else>
                            Nested Else statement
                        </Else>
                    </Check>
                </If>
                <ElseIf condition={false}>ElseIf statement 1</ElseIf>
                <ElseIf condition={false}>ElseIf statement 2</ElseIf>
                <Else>Else satement 1 </Else>
            </Check>
            <br />
            <ul>
                <Loop over={some}>
                    <HocLi />
                </Loop>
            </ul>
            <Check>
                <If condition={some.length > 3}>
                    <Loop over={some}>
                        <div>child {props.index}</div>
                    </Loop>
                </If>
            </Check>
            <Loop from={0} to={5}>
                <Loop over={['x', 'y', 'z']}>
                    <HocLi />
                </Loop>
            </Loop>
        </div>
    );
}

function HocLi(props) {
    const { index: i, data } = props;
    return (
        <li>
            {`${i + 1} --> ${data}`}
        </li>
    );
}