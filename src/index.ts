import { Sorter } from './Sorter';
import { NumbersCollection } from './numbersCollection';
import { CharacterCollection } from './charactersCollection';
import { LinkedList } from './LinkedList';

// array sort
const numberCollection = new NumbersCollection([10, -5, 0, -3]);
numberCollection.sort();
console.log(numberCollection.data);

// string sort
const characterCollection = new CharacterCollection('Xyaba');
characterCollection.sort();
console.log(characterCollection.data);

// LinkedList sort
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

linkedList.sort();
linkedList.print();
