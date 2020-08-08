import { getClass as gc, getErrorObject as geo } from '../helpers';

export const ERR_ONLY_IF_ELSE_ELSEIF_ALLOWED = geo(`${gc('Check')} - Only ${gc('If')}, ${gc('Else')} and ${gc('ElseIf')} elements are allowed.`);

export const ERR_MUST_CONTAIN_AT_LEAST_AN_IF = geo(`${gc('Check')} - Has to contain at least an ${gc('If')} element.`);
export const ERR_FIRST_CHILD_SHOULD_BE_IF = geo(`${gc('Check')} - Only ${gc('If')} element is allowed as the first element.`);

export const ERR_LAST_CHILD_SHOULD_BE_ELSE_OR_ELSEIF = geo(`${gc('Check')} - Only ${gc('Else')} or ${gc('ElseIf')} elements are allowed as the last element.`);
export const ERR_ELSEIF_ALLOWED_BETWEEN_IF_ELSE = geo(`${gc('Check')} - Only ${gc('ElseIf')} elements are allowed between ${gc('If')} and ${gc('Else')}.`);

export const ERR_IF_MUST_CONTAIN_AT_LEAST_ONE_ELEMENT = geo(`${gc('If')} - Has to contain at least one element.`);
export const ERR_IF_CANNOT_CONTAIN_ELSE_ELSEIF = geo(`${gc('If')} - ${gc('Else')} and ${gc('ElseIf')} elements are not allowed.`);

export const ERR_ELSEIF_MUST_CONTAIN_AT_LEAST_ONE_ELEMENT = geo(`${gc('ElseIf')} - Has to contain at least one element.`);
export const ERR_ELSEIF_CANNOT_CONTAIN_IF_ELSE = geo(`${gc('ElseIf')} - ${gc('If')} and ${gc('Else')} elements are not allowed.`);

export const ERR_ELSE_MUST_CONTAIN_AT_LEAST_ONE_ELEMENT = geo(`${gc('Else')} - Has to contain at least one element.`);
export const ERR_ELSE_CANNOT_CONTAIN_IF_ELSEIF = geo(`${gc('Else')} - ${gc('If')} and ${gc('ElseIf')} elements are not allowed.`);

export const ERR_LOOP_MUST_CONTAIN_AN_TEMPLATE_ELEMENT = geo(`${gc('Loop')} - Must contain a single ${gc('Template')} element.`);
export const ERR_LOOP_MUST_CONTAIN_ONLY_ONE_ELEMENT = geo(`${gc('Loop')} - Must contain only one ${gc('Template')} element.`);
export const ERR_LOOP_ONLY_TEMPLATE_ELEMENT_ALLOWED = geo(`${gc('Loop')} - Only one ${gc('Template')} element allowed.`);

export const ERR_TEMPLATE_MUST_CONTAIN_A_CHILD_COMPONENT = geo(`${gc('Template')} - Must contain a child component to render.`);
