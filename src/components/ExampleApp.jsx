import React from 'react';
import { Check, If, Else, ElseIf, Loop } from './directives';

export default function ExampleApp(props) {

    let arr = ['abc', 'efg', 'hij', 'klm']
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
                <Loop over={arr}>
                    <HocLi />
                </Loop>
            </ul>
            <Check>
                <If condition={arr.length > 3}>
                    <ul>
                        <Loop over={arr}>
                            <HocLi />
                        </Loop>
                    </ul>
                </If>
            </Check>
            <ul>
                <Loop from={0} to={5}>
                    <HocLiParent>
                        <Loop over={['x', 'y', 'z']}>
                            <HocLi />
                        </Loop>
                    </HocLiParent>
                </Loop>
            </ul>
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

function HocLiParent(props) {
    const { index: i, children } = props;
    return (
        <li>
            {`Iteration ${i + 1}`}
            <ul>
                {
                    children
                }
            </ul>
        </li>
    );
}