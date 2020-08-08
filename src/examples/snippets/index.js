import Example001 from './Example001';
import Example002 from './Example002';
import Example003 from './Example003';
import Example004 from './Example004';
import Example005 from './Example005';
import Example006 from './Example006';
import Example007 from './Example007';

export const EXAMPLES = [
  { title: 'Basic If  ', comp: Example001 },
  { title: 'Basic If, Else', comp: Example002 },
  {
    title: 'If, ElseIf, Else with nested conditionals and components',
    comp: Example003,
  },
  {
    title: 'Loop, with Template from 0 to 10, excludes 10',
    comp: Example004,
  },
  {
    title:
      'Loop, with template from 9 to -1, excludes -1, itemRenderer, stepping down',
    comp: Example005,
  },
  {
    title: 'Loop, with template over [], with functional components',
    comp: Example006,
  },
  {
    title: 'Loop, with template over [1....n], with conditional components',
    comp: Example007,
  },
];
