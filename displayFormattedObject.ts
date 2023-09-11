import ko from 'knockout';
import 'knockout-mapping';

export function displayFormattedObject(
  mappedObject: any,
  divElement: HTMLDivElement
) {
  const unmapped = ko.mapping.toJS(mappedObject);
  const codePreview = divElement.querySelector('code pre');
  const valueElement = divElement.querySelector('p');

  valueElement.innerText = `The name is ${mappedObject.firstName()}, with ${mappedObject.numberOfPets()} pets`;
  codePreview.innerHTML = JSON.stringify(unmapped, undefined, 4);
}
