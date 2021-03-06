import { selector } from 'recoil'
import exampleAtom from './atom'

const withParens = selector({
  key: 'exampleWithParens',
  get: ({ get }) => `Adding parens: (${get(exampleAtom).value})`,
  set: ({ get, set }, newValue) => {
    set(exampleAtom, newValue)
  },
});

export default withParens;
