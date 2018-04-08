QUnit.test('validateString_Success', function (assert) {
    assert.ok(validateString('Teststring'), 'Passed!');
});

QUnit.test('validateString_Fail', function (assert) {
    assert.notOk(validateString(''), 'Passed!');
});

QUnit.test('validateEmail_Success', function (assert) {
    assert.ok(validateEmail('test@test.com'), 'Passed!');
});

QUnit.test('validateEmail_Fail', function (assert) {
    assert.notOk(validateEmail('test@test.123'), 'Passed!');
});