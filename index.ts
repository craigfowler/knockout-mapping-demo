// Import stylesheets
import './style.css';
import ko from 'knockout';
import 'knockout-mapping';
import { EnrichTheNewWay } from './EnrichTheNewWay';
import { enrichTheOldWay } from './enrichTheOldWay';
import { displayFormattedObject } from './displayFormattedObject';

const dataModel = {
  Name: 'Joe Bloggs',
  Age: 34,
  Children: [
    {
      Name: 'Jane Bloggs',
      Age: 9,
    },
    {
      Name: 'Sam Bloggs',
      Age: 6,
    },
  ],
};

// The old way, 2-phase mapping first via the mapping plugin, then using a function to add stuff.
const mappedTheOldWay = ko.mapping.fromJS(dataModel);
enrichTheOldWay(mappedTheOldWay);
displayFormattedObject(mappedTheOldWay, document.querySelector('#old_way'));

// The new way, single-phase mapping using a class which self-maps in its own constructor
// and has full access to customise the whole mapping process.
const mappedTheNewWay = new EnrichTheNewWay(dataModel);
displayFormattedObject(mappedTheNewWay, document.querySelector('#new_way'));
