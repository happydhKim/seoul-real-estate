import { selector } from 'recoil'
import exampleAtom from './atom'

const withBrackets = selector({
  key: 'withBrackets',
  get: ({ get }) => `Adding brackets: [${get(exampleAtom).value}]`,
  set: ({ get, set }, newValue) => {
    set(exampleAtom, newValue)
  },
});

export default withBrackets;
