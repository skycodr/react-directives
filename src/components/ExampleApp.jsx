import React, { useState } from 'react';
import { Check, If, Else, ElseIf, Loop, Template } from '../directives';
import { Item } from './examples/Item';

export default function ExampleApp(props) {
  const [text, setText] = useState('');
  const words = ['Hello', 'cruel', 'world', '!!!'];
  const daysOfWeek = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
  // const isDayOfWeek = (day) => daysOfWeek.includes(day.toLowerCase());
  const isDayOfWeek = (day) => (/^(mon|tues|wednes|thrus|fri|satur|sun)day$/i).test(day.trim());
  const isDayOfWeekPartial = (day) => (/^(mon|tues|wednes|thrus|fri|satur|sun)/i).test(day.trim());

  return (
    <div>
      <input onChange={(e) => { setText(e.target.value); }} />
      <span>
        <Check>
          <If condition={text !== undefined && text.length > 0}>
            <Check>
               <If condition={isDayOfWeek(text)}>
                {`${text} is a day of week`}
              </If>
              <ElseIf condition={isDayOfWeekPartial(text)}>
                {`Almost there...`}
              </ElseIf>
              <Else>
                {`${text} is not remotely a day`}
              </Else>
            </Check>
          </If>
          <Else>Type in a name of a day of a week</Else>
        </Check>
      </span>
      {/* <Loop from={ 0 } to={ 10 } step={ 1 }>
                <Template >
                    <div>abc</div>
                </Template>
            </Loop>
            <Loop from={ 9 } to={ -1 } step={ -1 }>
                <Template >
                    <div>xyz</div>
                </Template>
            </Loop> */}
      <Loop over={daysOfWeek}>
        <Template renderer={(props) => <div>{props.data}</div>} />
      </Loop>
      <Loop over={words}>
        <Template>
          <Item />
        </Template>
      </Loop>
    </div>
  );
}