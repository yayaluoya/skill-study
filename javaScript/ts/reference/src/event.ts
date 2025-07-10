type EventT = {
  name: string;
  cb: () => void;
};

type getName<T> = T extends { name: infer V } ? V : never;
type getCb<T> = T extends { cb: infer V } ? V : EventT['cb'];

class Event1<T extends EventT> {
  on(name: getName<T>, on: getCb<T>) {
    //
  }
}

class Event2 extends Event1<{ name: 'a'; cb: () => void }> {}

let e2 = new Event2();
e2.on('a', () => {
  return {};
});

e2.on('a', () => {});
