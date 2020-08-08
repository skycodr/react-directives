import React, { useState } from 'react';

import { Check, If, Else, ElseIf } from '../../directives';
import { Code } from '../components';

import { getClass as gc } from '../../helpers';

const style = (age) => ({
  backgroundColor: age <= 0 ? 'lightblue' : age < 18 ? 'yellow' : age < 60 ? 'lightgreen' : age < 100 ? 'orange' : 'black',
  color: age <= 0 ? 'darkblue' : age < 18 ? 'green' : age < 60 ? 'darkgreen' : age < 100 ? 'red' : 'white'
});

const AgeValidator = ({ age, prediction }) => <div style={style(age)}>At the age of {age},<br /> We predict, you are {prediction} </div>;

export default () => {
  const [age, setAge] = useState('');

  const parsedAge = parseFloat(age);

  return (<>
    <div>{`Example: ${gc('If')}, ${gc('ElseIf')}, ${gc('Else')} with nested directives & custom components`}</div>
    <Code>
      {`<Check>
          <If condition={age.length > 0 && !isNaN(age)}>
            <Check>
              <If condition={parsedAge < 1} >
                <AgeValidator age={parsedAge} prediction="still in heaven" />
              </If>
              <ElseIf condition={parsedAge >= 1 && parsedAge < 18}>
                <AgeValidator age={parsedAge} prediction="a toothless gummy bear" />
              </ElseIf>
              <ElseIf condition={parsedAge >= 18 && parsedAge < 60} >
                <AgeValidator age={parsedAge} prediction="live 'n kickin'" />
              </ElseIf>
              <ElseIf condition={parsedAge >= 60 && parsedAge < 100} >
                <AgeValidator age={parsedAge} prediction="an aging tooth fairy" />
              </ElseIf>
              <Else>
                <AgeValidator age={parsedAge} prediction="six feet under" />
              </Else>
            </Check>
          </If>
          <ElseIf condition={age.length > 0 && isNaN(age)}>
            Inglorious nutter
          </ElseIf>
          <Else>
            Type in your age
          </Else>
        </Check>`}
    </Code>
    <div><input onChange={(e) => setAge(e.target.value)} /></div>
    <div>
      <Check>
        <If condition={age.length > 0 && !isNaN(age)}>
          <Check>
            <If condition={parsedAge < 1} >
              <AgeValidator age={parsedAge} prediction="still in heaven" />
            </If>
            <ElseIf condition={parsedAge >= 1 && parsedAge < 18}>
              <AgeValidator age={parsedAge} prediction="a toothless gummy bear" />
            </ElseIf>
            <ElseIf condition={parsedAge >= 18 && parsedAge < 60} >
              <AgeValidator age={parsedAge} prediction="live 'n kickin'" />
            </ElseIf>
            <ElseIf condition={parsedAge >= 60 && parsedAge < 100} >
              <AgeValidator age={parsedAge} prediction="an aging tooth fairy" />
            </ElseIf>
            <Else>
              <AgeValidator age={parsedAge} prediction="six feet under" />
            </Else>
          </Check>
        </If>
        <ElseIf condition={age.length > 0 && isNaN(age)}>
          Inglorious nutter
        </ElseIf>
        <Else>
          Type in your age
        </Else>
      </Check>
    </div>
  </>);
};