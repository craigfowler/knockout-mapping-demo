import ko from 'knockout';
import 'knockout-mapping';

export function enrichTheOldWay(mappedModel: any) {
  mappedModel.firstName = ko.pureComputed(function () {
    return this.Name().split(' ')[0];
  }, mappedModel);

  mappedModel.numberOfPets = ko.observable(3);
}
