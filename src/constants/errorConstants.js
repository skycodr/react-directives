import { getClass as gc, getErrorObject as geo } from '../helpers';
import * as Directives from '../components/directives';

export const ERR_ONLY_IF_ELSE_ELSEIF_ALLOWED = geo(
    `${gc(Directives.Check)} - Only ${gc(Directives.If)}, ${gc(
        Directives.Else
    )} and ${gc(Directives.ElseIf)} elements are allowed.`
);

export const ERR_MUST_CONTAIN_AT_LEAST_AN_IF = geo(
    `${gc(Directives.Check)} - Has to contain at least an ${gc(
        Directives.If
    )} element.`
);

export const ERR_FIRST_CHILD_SHOULD_BE_IF = geo(
    `${gc(Directives.Check)} - Only ${gc(
        Directives.If
    )} element is allowed as the first element.`
);

export const ERR_LAST_CHILD_SHOULD_BE_ELSE_OR_ELSEIF = geo(
    `${gc(Directives.Check)} - Only ${gc(Directives.Else)} or ${gc(
        Directives.ElseIf
    )} elements are allowed as the last element.`
);

export const ERR_ELSEIF_ALLOWED_BETWEEN_IF_ELSE = geo(
    `${gc(Directives.Check)} - Only ${gc(
        Directives.ElseIf
    )} elements are allowed between ${gc(Directives.If)} and ${gc(
        Directives.Else
    )}.`
);

export const ERR_IF_MUST_CONTAIN_AT_LEAST_ONE_ELEMENT = geo(
    `${gc(Directives.If)} - Has to contain at least one element.`
);

export const ERR_IF_CANNOT_CONTAIN_ELSE_ELSEIF = geo(
    `${gc(Directives.If)} - ${gc(Directives.Else)} and ${gc(Directives.ElseIf)} elements are not allowed.`
);

export const ERR_ELSEIF_MUST_CONTAIN_AT_LEAST_ONE_ELEMENT = geo(
    `${gc(Directives.ElseIf)} - Has to contain at least one element.`
);

export const ERR_ELSEIF_CANNOT_CONTAIN_IF_ELSE = geo(
    `${gc(Directives.ElseIf)} - ${gc(Directives.If)} and ${gc(Directives.Else)} elements are not allowed.`
);

export const ERR_ELSE_MUST_CONTAIN_AT_LEAST_ONE_ELEMENT = geo(
    `${gc(Directives.Else)} - Has to contain at least one element.`
);
export const ERR_ELSE_CANNOT_CONTAIN_IF_ELSEIF = geo(
    `${gc(Directives.Else)} - ${gc(Directives.If)} and ${gc(Directives.ElseIf)} elements are not allowed.`
);