// This Test passes a string into the 'validateString' method to test if the method works.
QUnit.test('validateString_Success', function (assert) {
    assert.ok(validateString('Teststring'), 'Passed!');
});

// This test passes an empty string into the 'validateString' method to make sure that the method works with an empty string.
QUnit.test('validateString_Fail', function (assert) {
    assert.notOk(validateString(''), 'Passed!');
});

// This test passes a valid email into the 'validateEmail' method to test if the method actually validates emails
QUnit.test('validateEmail_Success', function (assert) {
    assert.ok(validateEmail('test@test.com'), 'Passed!');
});

// This test passes a wrong email into the method and see if it fails. This makes sure that the method works both ways.
QUnit.test('validateEmail_Fail', function (assert) {
    assert.notOk(validateEmail('test@test.123'), 'Passed!');
});