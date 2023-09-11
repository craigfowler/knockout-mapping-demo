import ko from 'knockout';
import 'knockout-mapping';

export class EnrichTheNewWay {
  firstName = ko.pureComputed(() => this.Name().split(' ')[0]);

  numberOfPets = ko.observable(3);

  constructor(dataModel: any) {
    ko.mapping.fromJS(dataModel, {}, this);
  }
}
